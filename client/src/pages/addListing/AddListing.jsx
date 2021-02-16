import React, { useContext } from "react";
import axios from "axios"
import AddListingForm from "../../components/addListingForm/AddListingForm"
import AlertContext from "../../utils/alertContext";


const AddListing = () => {
  const alert = useContext(AlertContext);
  
  const handleFormSubmit = 
  (e, listingInfo) => {
    e.preventDefault();
    console.log(listingInfo)
    axios
      .post("/api/restaurants", listingInfo)
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((err) => {
        console.log(err);

      });
  };
  // (e) => {
  //   e.preventDefault()
  //   console.log("click submit hello")
  // }



  return (
    <div className="container">
      <div className = "row"></div>
      <div className = "row">
      <h1>Add New Restaurant</h1>
      </div>
      <div className = "row">
      <AddListingForm
          handleFormSubmit={handleFormSubmit}
          buttonText="Create New Product"
        />
        </div>
    </div>
  );
};

export default AddListing;
