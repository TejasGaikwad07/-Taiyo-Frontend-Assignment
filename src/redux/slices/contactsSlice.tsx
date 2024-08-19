// src/redux/slices/contactsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../types"; // Import the Contact type

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
    editContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
