import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  isEditing: false,
  selectedId: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    toggleIsEditing: (state, {payload}) => {
      state.isEditing = !state.isEditing;
    },
    setSelectedId: (state, { payload }) => {
      state.selectedId = payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
      })
      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(({ _id }) => {
          return _id !== payload
        });
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
    .addCase(fetchEditContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEditContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isEditing = false;
        state.contacts = state.contacts.map(contact => contact._id === payload._id ? payload : contact)
      })
      .addCase(fetchEditContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isEditing = false;
        state.error = payload;
      })
  },
});

export const { toggleIsEditing, setSelectedId } = contactsSlice.actions;

export default contactsSlice.reducer;