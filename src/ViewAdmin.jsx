import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";
 
function View() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    axios
      .get("http://localhost:1202/adm/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  let handleSubmit = (aid) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:1202/adm/" + aid)
        .then((res) => {
          console.log(res.data);
          alert("record has deleted");
          navigate("/");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
 
  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2" className="text-center text-bg-info ">
          Admin Management System
        </h1>
 
        <div className="text-end">
          <Link to="/create1" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
 
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.aid}</td>
                <td>{d.servicename}</td>
                <td>{d.serviceaddress}</td>
                <td>{d.contact}</td>
                
 
                <td>
                  <Link
                    to={`/update1/${d.aid}`}
                    className="btn btn-sm btn-success " >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.aid)}
                    className="btn btn-sm ms-1 btn-danger" name="delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default View;