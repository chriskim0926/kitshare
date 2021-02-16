import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.css"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

Modal.setAppElement("#root");
const ListingTableRow = ({
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
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }


  return (
    <>
    <tr>
       <td>
        <img src={imageURL} alt={restaurant} style={{ height: "3em" }}></img>
      </td>
      <td>{restaurant}</td>
      <td>{cuisine}</td>
      {/* <td>{contact}</td> */}
      <td>{address}</td>
      <td>$ {sharePrice}</td>
      <td>{sf} sf</td>
      <td>{restaurantComment}</td>
      <td>{availibility}</td>
      <td>
      <div>
      <button  onClick={toggleModal}>Inquire</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        id = "modal"
      >
        <div className = "container"> 
        <div className = "row">
          <div className = "row" style={{marginTop: "100px"}}>
         <h1 className = "centered" style={{color: "black"}}>Contact Resaurant Owner</h1> 
        </div>
        </div>
        </div>
        <div className = "container">
          <div className = "row">
          <form className = "centered" style={{marginTop: "100px"}}>
            <input type="text" placeholder= "Contact Name"/>
            <input type="text" placeholder= "Contact Number"/>
            <input type="text" placeholder= "Email"/>
            <input type="text" placeholder= "Inquiry"/>
          </form>
        </div>

        </div>
   
        <div className = "row">
        <div className= "centered"><button className="waves-effect waves-light btn" onClick={toggleModal}>Send</button></div>

        </div>

  
    
         
      </Modal>
    </div>
      </td>

 
    </tr>
    <div className = "App">
      

      </div>
    </>
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

export default ListingTableRow;
