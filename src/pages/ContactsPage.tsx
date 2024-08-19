import React, { useState } from "react";
import ContactList from "../Components/contacts/ContactList";
import ContactForm from "../Components/contacts/ContactForm";
import { Contact } from "../types";

const ContactPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleSaveContact = (contact: Contact) => {
    if (editingContact) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
      setEditingContact(null);
    } else {
      setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    }
    setShowForm(true); // Keep the form visible after saving
  };

  const handleEditContact = (contact: Contact) => {
    setEditingContact(contact);
    setShowForm(true); // Show the form for editing
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>

      {contacts.length === 0 && !showForm && (
        <div className="text-center mt-20">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setShowForm(true)}
          >
            Create Contact
          </button>
          <p className="text-lg mt-4">
            No contact found, please add a contact using the create contact
            button.
          </p>
        </div>
      )}

      {showForm && (
        <div className="mt-8 max-w-md mx-auto">
          <ContactForm
            initialData={
              editingContact || {
                id: 0,
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                isActive: true,
              }
            }
            onSave={handleSaveContact}
          />
        </div>
      )}

      {contacts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <ContactList
            contacts={contacts}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
          />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
