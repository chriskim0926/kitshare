import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ListingForm from "../../components/addListingForm/AddListingForm";

const EditRestaurant = () => {
  const history = useHistory();

  const handleFormSubmit = (e, restaurantData, id) => {
    e.preventDefault();
    axios
      .put(`/api/restaurants/${id}`, restaurantData)
      .then((response) => {
        console.log(response.data);
        history.push("/owner");
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Edit My Restaurant</h1>
        </div>
      </div>
      <div className="row">
        <ListingForm
          handleFormSubmit={handleFormSubmit}
          buttonText="Update"
        />
      </div>
    </div>
  );
};

export default EditRestaurant;
