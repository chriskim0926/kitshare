import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";


const RestaurantTableRow = ({
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
  getProducts,
}) => {
  const deleteRestaurant = (id) => {
    axios
      .delete(`/api/restaurants/${id}`)
      .then(() => {
        return window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editRestaurant = (id) => {
    axios
      .put(`/api/restaurants/${id}`, { availibility: !availibility })
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
       <td>
        <img src={imageURL} alt={restaurant} style={{ height: "3em" }}></img>
      </td>
      <td>{restaurant}</td>
      <td>{cuisine}</td>
      {/* <td>{contact}</td> */}
      <td>{address}</td>
      {/* <td>{sharePrice}</td> */}
      {/* <td>{sf}</td> */}
      {/* <td>{restaurantComment}</td> */}
      <td>{availibility}</td>
      <td><Link to={`/owner/${_id}`} className="waves-effect waves-light btn" onClick={() => {
            editRestaurant(_id);
          }}>Edit</Link>
          
          </td>
      <td><a class="waves-effect waves-light btn" onClick={() => {
            deleteRestaurant(_id);
          }}>Delete</a></td>
    </tr>
  );
};


export default RestaurantTableRow;
