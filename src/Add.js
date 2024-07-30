
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import "./App2.css";
 
function Add() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
 
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1202/adm/all")
  //     .then((response) => {
  //       setColumns(Object.keys(response.data[0]));
  //       setRecords(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
 
  const [user, setUser] = useState({
        name: '',
        address: '',
        scity: '',
        ptype:'',
        admin: {
          servicename:'',
          serviceaddress:'',
          contact: ''
         
        }
      });
  
  // useEffect(() => {
  //   loadData();
  // }, []);
 
  const loadData = async () => {
    await axios.get("http://localhost:1202/adm/getAdmin")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  
  useEffect(() => {
    console.log('Updated user:', user);
  }, [user]);
 
  const handleSelectChange = async (e) => {
    const adminId = e.target.value;
    console.log(`Selected Admin ID: ${adminId}`);
    try {
      const response = await axios.get("http://localhost:1202/adm/"+adminId);
      console.log('Admin data fetched:', response.data);
      setUser(prevState => ({
        ...prevState,
        admin: {
          ...prevState.admin,
          ...response.data,
          aid: adminId
        }
      }));
    } catch (err) {
      console.error("Error fetching admin data:", err);
    }
  };
  const naviget = useNavigate();
 
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
      axios
        .post("http://localhost:1202/use", user)
        .then((res) => {
          alert("Data added Successfully");
          console.log(res);
          naviget("/view");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
   
  };
 
 
 
  return (
   
     
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1 role="heading">ADD User DATA</h1>
          <div>
            <label htmlFor="name" role="username">Name :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setUser({ ...user, name: e.target.value }) }
            />
          </div>
          
          <div>
            <lable htmlFor="address" role="address">Address:</lable>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={(e) => setUser({ ...user, address: e.target.value }) }
            />
          </div>
          <div>
            <label htmlFor="scity" role="ship">Shipment-City :</label>
            <input
              type="text"
              name="scity"
              className="form-control"
              onChange={(e) => setUser({ ...user, scity: e.target.value }) }
            />
          </div>
          <div>
            <label htmlFor="ptype"role="ptype">Package-type :</label>
            <input
              type="text"
              name="ptype"
              className="form-control"
              onChange={(e) => setUser({ ...user, ptype: e.target.value }) }
            />
          </div>
   
          <br />
          <div>
            <label role="id"name="id">Select Admin Record:</label>
            <select onChange={handleSelectChange} className="form-control" name="selectId">
              <option value="" role="rec" name="id">Select a record</option>
              {records.map((record) => (
                <option key={record.aid} value={record.aid}>
                  {record.aid}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-info " role="button" name="button">Submit</button>
        </form>
 
       
      </div>
    </div>
   
  );
}
 
export default Add;
