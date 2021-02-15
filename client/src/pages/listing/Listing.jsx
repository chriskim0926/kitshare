import React from 'react';
import SearchList from "../../components/listingTable/SearchList"
import "../listing/listing.css"


const Listing = () => {
   
    const color = {color: "black"}
    
    return (
       <>

<div className ="container">
    <div className = "row"></div>
</div>
<div className= "row"></div>
<div className ="row" >
</div>
<h1 className = "center">Search Restaurants</h1>
        <div className = "row">
         <div className = "col">
             <SearchList style = {color}/>
         </div>

        </div>

     </>
    );
};

export default Listing;