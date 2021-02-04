import React from "react";
import axios from "axios";
import RestaurantData  from "../sort/sort";


class Employee extends React.Component {
  state = {
    RestaurantRecords: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=500&nat=us")
      .then((records) => {
        let restdata = records.data.results;
        let RestaurantRecordsemp = [];
        console.log(restdata)
        for (let i = 0; i < restdata.length; i++) {
          let erecord = {
            name: restdata[i].name.first + " " + restdata[i].name.last,
            email: restdata[i].email,
            image: restdata[i].picture.thumbnail,
            phone: restdata[i].cell,
            dob: restdata[i].dob.date,
          };
          RestaurantRecordsemp.push(erecord);
        }
        console.log(RestaurantRecordsemp);
        this.setState({ RestaurantRecords: RestaurantRecordsemp });
      });
  };

  render() {
    return (
      <div>
        <h2></h2>
        <RestaurantData restaurants={this.state.RestaurantRecords} />
      </div>
    );
  }
}

export default Employee;