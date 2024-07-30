import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from 'axios';
 
import React from 'react'
 
function AddAdmin() {
    const [inputData, setInputData] = useState({ 
           aid:"",
            servicename:"",   
            serviceaddress: "",
            contact:""
           
           
        }
      );
     
      const nav = useNavigate();
   
      let handleAdd = (e) => {
        e.preventDefault();
        let ans = validate(inputData);
        if (ans === true) {
          axios
            .post("http://localhost:1202/adm", inputData)
            .then((response) => {
              alert("Data added Successfully");
              nav("/");
              console.log(response.data);
            })
            .catch((err) => console.log(err));
        } else {
          alert("valid data needed");
        }
      };
   
      const validate = (inputData) => {
        // if (inputData.id === 0) {
        //     alert("Enter the correct id ");
        //     return false;
        //   }
        // else
         if (inputData.servicename.length === 0) {
          alert("Enter the servicename ");
          return false;
        }else if (inputData.serviceaddress.length === 0) {
            alert("Enter the serviceaddress");
            return false;
          } 
        else if (inputData.contact.length === 0) {
          alert("Enter contact");
          return false;
        } 
        else {
          return true;
        }
      };
   
      return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center"
        >
          <div className="w-50 border bg-light p-5">
            <form onSubmit={handleAdd}>
              <h1 role="heading">ADD ADMIN </h1>
               <div>
                <label role="service">Servicename</label>
                <input type="text"
                 name="servicename"
                  className="form-control" 
                  onChange={(e) => setInputData({ ...inputData, servicename: e.target.value }) } />
              </div> 
              <div>
                <label role="sadd">Serviceaddress :</label>
                <input type="text" name="serviceaddress" className="form-control" onChange={(e) =>setInputData({ ...inputData, serviceaddress: e.target.value })}/>
              </div>
   
              <div>
                <label role="cont">Contact :</label>
                <input type="number"  name="contact" className="form-control" onChange={(e) =>setInputData({ ...inputData, contact: e.target.value })}/>
              </div>
   
              <br />
 
              <br />
              <button role="but" name="button"className="btn btn-info ">Submit</button>
            </form>
   
           
          </div>
        </div>
      );
    }
 
export default AddAdmin