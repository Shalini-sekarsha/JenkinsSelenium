import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
function Edit() {
    // const { id } = useParams();
    //  const [data, setData] = useState([]);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:1202/use/" + id)
    //         .then((response) => setData(response.data))
    //         .catch((err) => console.log(err));
    // }, []);

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:1202/use", data).then((res) => {
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
                        <h1 role="heading">Update User's Data</h1>
                        <div>
                            <label htmlFor="id" role="id">ID :</label>
                            <input
                                type="text"
                                disabled
                            //     name="id"
                            //     className="form-control"
                            //     value={data.id}
                            // onChange={(e) => setData({ ...data, id: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" role="name">Name :</label>
                            <input
                                type="text"
                                // name="name"
                                // className="form-control"
                                // value={data.name}
                                // onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="address" role="address">Address :</label>
                            <input
                                type="text"
                                // name="address"
                                // className="form-control"
                                // value={data.address}
                                // onChange={(e) => setData({ ...data, address: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="scity" role="shipment">Shipment-city :</label>
                            <input
                                type="text"
                                // name="scity"
                                // className="form-control"
                                // value={data.scity}
                                // onChange={(e) => setData({ ...data, scity: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="ptype" role="packagetype">Package-type :</label>
                            <input
                                type="text"
                                // name="ptype"
                                // className="form-control"
                                // value={data.ptype}
                                // onChange={(e) => setData({ ...data, ptype: e.target.value })}
                            />
                        </div>
                       
                        <br />
                        <button role="butt" name="button"className="btn btn-info ">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Edit;
