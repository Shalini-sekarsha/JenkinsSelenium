import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./App2.css";
function Edit() {
    // const { aid } = useParams();
    // const [data, setData] = useState([]);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:1202/adm/" + aid)
    //         .then((response) => setData(response.data))
    //         .catch((err) => console.log(err));
    // }, []);

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:1202/adm", data).then((res) => {
            alert("User Updated Successfully");
            navigate("/");
        });
    };

    return (
        <div>
            <div
                id="edit2"
                className="d-flex w-100 vh-100 justify-content-center align-items-center "
            >
                <div className="w-50 border bg-light p-5">
                    <form onSubmit={handleSubmit}> 
                        <h1 role="heading">Update Admin Data</h1>
                        <div>
                            <label htmlFor="aid" role="a">AID :</label>
                            <input
                                type="number"
                                disabled
                            //     name="aid"
                            //     className="form-control"
                            //     value={data.aid}
                            // onChange={(e) => setData({ ...data, aid: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="servicename" role="servicename">Servicename :</label>
                            <input
                                type="text"
                                // name="servicename"
                                // className="form-control"
                                // value={data.servicename}
                                // onChange={(e) => setData({ ...data, servicename: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="serviceaddress"role="serviceaddress">Serviceaddress :</label>
                            <input
                                type="text"
                                // name="serviceaddress"
                                // className="form-control"
                                // value={data.serviceaddress}
                                // onChange={(e) => setData({ ...data, serviceaddress: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="contact"role="contact">Contact :</label>
                            <input
                                type="number"
                                // name="contact"
                                // className="form-control"
                                // value={data.contact}
                                // onChange={(e) => setData({ ...data,contact: e.target.value })}
                            />
                        </div>
                    
                       
                        <br />
                        <button role="butn" name="button" className="btn btn-info ">Update</button>
                    </form> 
                </div>
            </div>
        </div>
    );
}
export default Edit;
