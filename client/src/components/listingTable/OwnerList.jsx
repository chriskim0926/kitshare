import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantTableRow from "../RestaurantTableRow/RestaurantTableRow";

const OwnerList = () => {
  // 1. hard code the render
  // 2. move the values to this.state
  // 3. make the api call to return the data dynamically.
  // 3a. Import useEffect - when to go get the data.
  // 3b. Import axios
  // 3c. Inside useEffect, make an axios call.
  // 3d. set the response.data on state (setProducts) NEVER DIRECTLY MUTATE STATE

  const [restaurant, setRestaurant] = useState([]);
  const [input, setInput]　= useState('');

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    axios
      .get("/api/restaurants")
      .then((response) => {
        console.log(response.data);
        setRestaurant(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setInput(e.target.value);
  };

 

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align"></h1>
        </div>
      </div>
      <div className="row">
        <input
        placeholder = "Search by Restaurant, Cuisine, or Address"
        value={input}
        onChange={handleChange}
        type="text"
      />
        </div>
      <div className="row">
        <div className="col s12">
          <table id="myTable">
            <thead>
              <tr>
                <th></th>
                <th>Restaurant</th>
                <th>Cusine</th>
                <th>Address</th>
                <th>Availability</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {restaurant.filter((val) => {
              
              if (input ===""){
                return val
              }else if (val.restaurant.toLowerCase().includes(input.toLowerCase())){

                return val

              }else if (val.cuisine.toLowerCase().includes(input.toLowerCase())){
                return val
          
              }else if (val.address.toLowerCase().includes(input.toLowerCase())){
                return val
          
              }

            }).map((restaurant) => (
                <RestaurantTableRow
                  key={restaurant._id}
                  {...restaurant}
                  getRestaurant={getRestaurant}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerList;