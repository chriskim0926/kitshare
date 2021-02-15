import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

const AddListingForm = ({ buttonText, handleFormSubmit }) => {
  const [restaurant, setRestaurant] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [sharePrice, setSharePrice] = useState("");
  const [sf, setSf] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [restaurantComment, setRestaurantComment] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [availability, setAvailability] = useState(false);

  
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/restaurants/${id}`)
        .then((response) => {
          console.log(response.data);
          const {
            _id,
            restaurant,
            contact,
            address,
            sharePrice,
            sf,
            cuisine,
            restaurantComment,
            imageURL,
            availibility,
      
          } = response.data;
          setRestaurant(restaurant);
          setContact(contact);
          setAddress(address);
          setImageURL(imageURL);
          setSharePrice(sharePrice);
          setSf(sf);
          setCuisine(cuisine);
          setRestaurantComment(restaurantComment);
          setAvailability(availibility);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

const testSubmit = (e) => {
  e.preventDefault()
  console.log("click submit button")
}

  return (
    <>
      <form
        className="col s12"
        onSubmit= {testSubmit}
        
        // {(e) => {
        //   handleFormSubmit(e, {
        //     restaurant,
        //     contact,
        //     address,
        //     sharePrice,
        //     sf,
        //     cuisine,
        //     restaurantComment,
        //     imageURL,
        //     availability,
        //   }, id);
        // }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              id="restaurant"
              type="text"
              name="restaurant"
              value={restaurant}
              onChange={(e) => {
                setRestaurant(e.target.value);
              }}
            />
            <label htmlFor="Restaurant Name">Restaurant Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="contact_name"
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <label htmlFor="Contact Name">Contact Name</label>
          </div>
        </div>
        <div className= "row">
        <div className="input-field col s6">
          <input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <label htmlFor="Address>Address">Address</label>
        </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="sharePrice"
              type="number"
              name="sharePrice"
              value={sharePrice}
              onChange={(e) => {
                setSharePrice(e.target.value);
              }}
            />
            <label htmlFor="Share Price">Share Price</label>
          </div>
          <div className="input-field col s6">
            <input
              id="sf"
              type="number"
              name="sf"
              value={sf}
              onChange={(e) => {
                setSf(e.target.value);
              }}
            />
            <label htmlFor="SF">Shareable Space Size</label>
          </div>
        </div>
        <div className = "row">
        <div className="input-field col s6">
          <input
            id="cuisine"
            type="text"
            name="cuisine"
            value={cuisine}
            onChange={(e) => {
              setCuisine(e.target.value);
            }}
          />
          <label htmlFor="Cuisine">Cuisine Currently Being Offered</label>
        </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="imageURL">Restaurant imageURL</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="restaurantComment"
              type="text"
              name="restaurantComment"
              value={restaurantComment}
              onChange={(e) => {
                setRestaurantComment(e.target.value);
              }}
            />
            <label htmlFor="Restaurant Comment">Restaurant Comment</label>
          </div>
        </div>
        <div className="row">
        <p>
      <label>
        <input 
        type="checkbox"
        name="availability"
        value={availability}
        className= "filled-in"
        onChange={() => {
          setAvailability(!availability);
        }}
        />
        <span>This space is available</span>
      </label>
    </p>
      
        </div>

        <div className="row">
          <button
            className="btn waves-effect waves-light"
                     >
            Create New Listing
          </button>
        </div>
      </form>
    </>
  );
};

export default AddListingForm;
