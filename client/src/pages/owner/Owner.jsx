import React from 'react';
import OwnerList from "../../components/listingTable/OwnerList"
import { NavLink } from "react-router-dom";

const Owner = () => {
    return (
        <div className = "container">
        <div className = "row">
            <h2>Edit Restaurant</h2>
        </div>
        <div className = "row"> <NavLink to="/owner/add" class="waves-effect waves-light btn">Add New Restaurant</NavLink></div>
        <div className = "row">
         <div className = "col">
             <OwnerList/>
         </div>

        </div>
     </div>
    );
};

export default Owner;