import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react'
import "./App2.css";
import { Link  } from "react-router-dom";
function Home() {
    return (
        <div>


            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/create" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Admin Crud         </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li>
                                    <a class="dropdown-item" href="/create1">Add</a></li><li>
                                        {/* <a class="dropdown-item" href="/update1/:id">Update</a></li><li> */}
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/ViewP">View</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/create" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  User Crud         </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li>
                                    <a class="dropdown-item" href="/create">Add</a></li><li>
                                        {/* <a class="dropdown-item" href="/update/:id">Update</a></li><li> */}
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/view">View</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                </li></ul>
                        <form class="d-flex">
                           {/* // <input class="form-control me-2" /> */}
                           <Link to="/log" className="btn btn-outline-primary first-button">
                    Login
                  </Link>
                  <Link to="/reg" className="btn btn-outline-primary first-button">
                    Register
                  </Link>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Home