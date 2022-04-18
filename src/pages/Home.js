import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const contactData = [
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
];

const Home = () => {
    
  const onDeleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
    }
  };

  const filterData = (value) => {};

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/addContact">
        <button className="btn btn-contact">Add Contact</button>
      </Link>

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDeleteContact(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
