import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from "uuid"

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: [
          {
            id: 1,
            name: "Ahjam Taoufik",
            email: "taoufik@gmail.com",
            phone: "+21267656526",
            status: "Active",
          },
          {
            id: 2,
            name: "Etaqi Kamal",
            email: "jEtaqi@gmail.com",
            phone: "+212878446746",
            status: "Inactive",
          },
          {
            id: 3,
            name: "Jimi Hendrix",
            email: "jamesgun@gmail.com",
            phone: "+212768446746",
            status: "Active",
          },
          {
            id: 4,
            name: "James Bond",
            email: "jamesbond@gmail.com",
            phone: "+212768446746",
            status: "Inactive",
          },
        ],
        filter: 'All',
        contact:{
            name: "",
            email: "",
            phone: "",
            status: "",
        },
      
    },
    reducers: {
        getContact: (state, action) => {
            state.contact=state.contacts.find((contact)=>contact.id==action.payload)
        },    
        addContact: (state, action) => {
          const newContact ={...action.payload, id: uuidv4()}
          state.contacts=[...state.contacts, newContact]
          // state.contacts.push(newContact)   // this is the same as above
        },
        deleteContact: (state, action) => {
          state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        updateContact: (state, action) => {
          const contact = state.contacts.find(item => item.id === action.payload.id)
          const index = state.contacts.indexOf(contact)
          state.contacts[index] = action.payload
        },

      },
});

export const {getContact,addContact,deleteContact,updateContact}=contactSlice.actions;

export default contactSlice.reducer;