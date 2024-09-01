import { createSlice } from "@reduxjs/toolkit";

function saveToStorage(arr) {
  localStorage.setItem('phone-book', JSON.stringify(arr));
}

const savedContacts = JSON.parse(localStorage.getItem('phone-book'));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: savedContacts || [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        saveToStorage(state);
      },
      prepare({ name, phone }) {
        return {
          payload: {
            name,
            phone,
            id: Date.now(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      saveToStorage(state);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts;
