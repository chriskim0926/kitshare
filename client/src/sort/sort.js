import React from "react";
import { MDBDataTable } from "mdbreact";

const RestaurantData = (props) => {
  const data = {
    columns: [
      {
        label: "",
        field: "image",
        sort: "asc",
        width: 500,
      },
      {
        label: "Cuisine",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Restaurant",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Address",
        field: "phone",
        sort: "asc",
        width: 300,
      },
      {
        label: "Shareable Space Size",
        field: "",
        sort: "asc",
        width: 250,
      },
      {
        label: "Share Price",
        field: "",
        sort: "asc",
        width: 250,
      },
      {
        label: "Availablility",
        field: "",
        sort: "asc",
        width: 250,
      },
      {
        label: "Lets Share",
        field: "",
        sort: "asc",
        width: 250,
      }
    ],
    rows:props.restaurants
  };
  console.log("Props", props);
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default RestaurantData;