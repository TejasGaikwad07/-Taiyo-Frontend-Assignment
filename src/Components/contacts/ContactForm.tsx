import React, { useState, useEffect } from "react";
import { Contact } from "../../types";

interface ContactFormProps {
  initialData: Contact;
  onSave: (contact: Contact) => void;
}

/**
 * ContactForm component for adding or editing a contact.
 * Includes fields for first name, last name, email, phone, and active status.
 *
 * @param initialData - Initial contact data for editing or empty for new contact.
 * @param onSave - Callback function to handle saving the contact.
 */
const ContactForm: React.FC<ContactFormProps> = ({ initialData, onSave }) => {
  const [contact, setContact] = useState<Contact>(initialData);

  useEffect(() => {
    setContact(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, isActive: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(contact);
    setContact({
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      isActive: true,
    }); // Reset form with isActive
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="isActive"
          className="block text-sm font-medium text-gray-700"
        >
          Active
        </label>
        <input
          type="checkbox"
          id="isActive"
          name="isActive"
          checked={contact.isActive}
          onChange={handleToggleChange}
          className="ml-2 mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
