import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the type for country data
interface CountryData {
  country: string;
  countryInfo: {
    _id?: string; // _id can be optional
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
  // Add other fields as necessary
}

// Fetch country data from API
const fetchCountryData = async (): Promise<CountryData[]> => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

const Map = () => {
  const { data, isLoading, error } = useQuery<CountryData[]>({
    queryKey: ['countryData'],
    queryFn: fetchCountryData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Array.isArray(data) && data.map((country) => {
        // Use _id as key if available, otherwise fall back to a combination of country name and lat/long
        const key = country.countryInfo._id || `${country.country}-${country.countryInfo.lat}-${country.countryInfo.long}`;

        return (
          <Marker key={key} position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
