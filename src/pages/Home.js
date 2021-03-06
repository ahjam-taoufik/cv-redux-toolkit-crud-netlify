import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteContact, getFilter} from "../redux/features/contactSlice";
import "./Home.css";

const Home = () => {
  const dispatch=useDispatch();
  const {contacts,filter}=useSelector(state=>state.contacts);

  const onDeleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      dispatch(deleteContact(id));
      toast.success("Contact deleted successfully");

    }
  };


 const HandleActive=(v)=>{
  dispatch(getFilter(v))
 }



  const filterData = (value) => {};
  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/addContact">
        <button className="btn btn-contact">Add Contact</button>
      </Link>
      <button className="btn btn-active" onClick={()=>HandleActive('Active')} >Active</button>
      <button className="btn btn-inactive" onClick={()=>HandleActive('Inactive')}>inactive</button>
      <button className="btn btn-reset" onClick={()=>HandleActive('All')}>Reset</button>

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
          {contacts.filter(contact=>{
              if(filter==="All"){
                return contact
              }else{
                return contact.status===filter
              }
            }).map((item, index) => {
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
