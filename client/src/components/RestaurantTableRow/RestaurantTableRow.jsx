import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
  availability,
  getProducts,
}) => {
  const deleteProduct = (id) => {
    axios
      .delete(`/api/restaurants/${id}`)
      .then(() => {
        getProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editProduct = (id, featured) => {
    axios
      .put(`/api/restaurants/${id}`, { availability: !availability })
      .then((response) => {
        console.log(response.data);
        getProducts();
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
      <td>{availability}</td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>
      
      <td>
        {/* <FontAwesomeIcon
          icon={featured ? faStar : faStarOutline}
          onClick={() => {
            editProduct(_id, featured);
          }}
        /> */}
      </td>
      <td>
        {/* <Link to={`/admin/${_id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link> */}
      </td>
      <td>
        {/* <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            deleteProduct(_id);
          }}
        /> */}
      </td>
    </tr>
  );
};

// RestaurantTableRow.propTypes = {
//   _id: PropTypes.string.isRequired,
//   restaurant: PropTypes.string.isRequired,
//   cuisine: PropTypes.string,
//   price: PropTypes.number.isRequired,
//   imageURL: PropTypes.string,
//   address: PropTypes.string,
//   sharePrice: PropTypes.number,
//   sf: PropTypes.number,
//   availability: PropTypes.bool,
//   getProducts: PropTypes.func.isRequired,
// };

export default RestaurantTableRow;
