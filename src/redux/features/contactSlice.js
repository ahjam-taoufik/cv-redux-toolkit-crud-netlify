import {createSlice} from '@reduxjs/toolkit';


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
      
    }
});


export default contactSlice.reducer;