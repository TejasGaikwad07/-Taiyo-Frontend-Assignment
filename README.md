Contact Management App with Charts and Maps
Overview
This application allows users to manage contacts, view detailed information, and perform CRUD operations (Create, Read, Update, Delete). Additionally, the app features a dashboard with a line graph showing COVID-19 case fluctuations and a map displaying COVID-19 statistics for different countries.

Features
Contacts Page:

Form to add new contacts.
Display a list of all added contacts.
View contact details.
Edit and delete contacts.
Use of Redux for state management.
Dashboard Page:

Line graph showing COVID-19 cases fluctuations over time.
Map with markers indicating COVID-19 statistics for each country.
Technologies Used
Frontend:

ReactJS with TypeScript
TailwindCSS for styling
React Router v6 for routing
React Query (Tanstack Query) for data fetching
Backend API:

COVID-19 data APIs
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd contact-management-app
2. Install Dependencies
Ensure you have Node.js and npm installed. Run the following command to install the necessary dependencies:

bash
Copy code
npm install
3. Run the App
Start the development server with:

bash
Copy code
npm start
This will open the application in your default web browser. The app will be available at http://localhost:3000.

4. Build the App
To create a production build, run:

bash
Copy code
npm run build
This will generate a build directory containing the optimized production files.

API Endpoints Used
Worldwide Data of Cases

Endpoint: https://disease.sh/v3/covid-19/all
Description: Fetches global COVID-19 statistics including total cases, deaths, and recovered.
Country-Specific Data of Cases

Endpoint: https://disease.sh/v3/covid-19/countries
Description: Provides COVID-19 statistics for individual countries, including active cases, recovered cases, and deaths.
Graph Data for Cases with Date

Endpoint: https://disease.sh/v3/covid-19/historical/all?lastdays=all
Description: Supplies historical data of COVID-19 cases over time for generating a line graph.
