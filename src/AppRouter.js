import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import View from "./View";
import Add from "./Add";
import ViewPayroll from "./ViewAdmin";
import EditPayroll from "./EditAdmin";
import AddAdmin from "./AddAdmin";
import Edit from "./Edit";

function AppRouter() {
    return (
        <Router>
            <Routes>
               <Route path="/" element={<Home/>}/>
                <Route path="/View" element={<View />} />
                <Route path="/create" element={<Add />} />
                <Route path="/update/:id" element={<Edit />} />
                <Route path="/ViewP"element={<ViewPayroll />}/>
                <Route path="/update1/:aid" element={<EditPayroll />} />
                <Route path="/create1" element={<AddAdmin />} />
               
               
            </Routes>
        </Router>
    );
}
export default AppRouter;