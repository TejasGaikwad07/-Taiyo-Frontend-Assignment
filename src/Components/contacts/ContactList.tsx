import React from 'react';
import { Contact } from '../../types';

interface ContactListProps {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}

/**
 * ContactList component for displaying a list of contacts.
 * Provides options to edit or delete each contact.
 * 
 * @param contacts - Array of contact objects to display.
 * @param onEdit - Callback function to handle editing a contact.
 * @param onDelete - Callback function to handle deleting a contact.
 */
const ContactList: React.FC<ContactListProps> = ({ contacts, onEdit, onDelete }) => {
  return (
    <ul className="space-y-4">
      {contacts.map(contact => (
        <li key={contact.id} className="p-4 border rounded-md shadow-sm flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">{contact.firstName} {contact.lastName}</p>
            <p className="text-sm text-gray-500">{contact.email}</p>
            <p className="text-sm text-gray-500">{contact.phone}</p>
            <p className={`text-sm ${contact.isActive ? 'text-green-500' : 'text-red-500'}`}>
              {contact.isActive ? 'Active' : 'Inactive'}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              className="bg-yellow-500 text-white px-2 py-1 rounded-md"
              onClick={() => onEdit(contact)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
