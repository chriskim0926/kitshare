import React from 'react';
import SearchList from "../../components/listingTable/SearchList"

const Listing = () => {
    return (
        <div className = "container">

        <div className = "row">
         <div className = "col">
             <h1 className = "center-align">Search Restaurants</h1>
             <SearchList/>
         </div>

        </div>
     </div>
    );
};

export default Listing;