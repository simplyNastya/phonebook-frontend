import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addContact,
  deleteContact,
} from '../../services/API/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (value, { rejectWithValue }) => {
    try {
      //value - input fields value that frontend get from user 
      const { data } = await addContact(value);
      //data - info from DB from backend (after adding item)
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (value, { getState }) => {
      const { contacts } = getState();
      const checkForMatch = contacts.contacts.find(
        contact => contact.name.toLowerCase() === value.name.toLowerCase()
      );
      if (checkForMatch) {
        alert(`${value.name} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);