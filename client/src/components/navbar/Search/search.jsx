import React from 'react';
import 'materialize-css';
import "./search.css"
import logo from './logo192.png';


const search = () => {
   

   
   return (
<div>
<input type="text" id="myInput" placeholder="Search for names.." title="Type in a name"/>

<table id="myTable">
  <tr class="header">
    <th >Restaurant</th>
    <th >Name</th>
    <th >Address</th>
    <th >Cuisine</th>
    <th >Shareable Kitchen Space</th>
    <th >Share Price</th>
    <th >Availibility</th>
    <th ></th>
  </tr>
  <tr>
  <td><img src= {logo} alt="BigCo Inc. logo"/></td>
    <td>Brass Work</td>
    <td>123 Main St Suwanee, GA 30024</td>
    <td>Burgers</td>
    <td>500<a> sf</a></td>
    <td>$1000</td>
    <td>Ready To Share</td>
  </tr>
  <tr>
  <td><img src= {logo} alt="BigCo Inc. logo"/></td>
    <td>Chicken Run</td>
    <td>123 Main St Suwanee, GA 30024</td>
    <td>Wings</td>
    <td>1000<a> sf</a></td>
    <td>$2000</td>
    <td>Ready To Share</td>
  </tr>
  <tr>
  <td><img src= {logo} alt="BigCo Inc. logo"/></td>
    <td>Brass Work</td>
    <td>123 Main St Suwanee, GA 30024</td>
    <td>Burgers</td>
    <td>500<a> sf</a></td>
    <td>$1000</td>
    <td>Already Sharing</td>
  </tr>
  <tr>
  <td><img src= {logo} alt="BigCo Inc. logo"/></td>
    <td>Brass Work</td>
    <td>123 Main St Suwanee, GA 30024</td>
    <td>Burgers</td>
    <td>500<a> sf</a></td>
    <td>$1000</td>
    <td>Ready To Share</td>
  </tr>
  <tr>
  <td><img src= {logo} alt="BigCo Inc. logo"/></td>
    <td>Brass Work</td>
    <td>123 Main St Suwanee, GA 30024</td>
    <td>Burgers</td>
    <td>500<a> sf</a></td>
    <td>$1000</td>
    <td>Ready To Share</td>
  </tr>
  <tr>
  <td><img src= {logo} alt="BigCo Inc. logo"/></td>
    <td>Magazzini Alimentari Riuniti</td>
    <td>123 Main St Suwanee, GA 30024</td>
    <td>Italian</td>
    <td>500<a> sf</a></td>
    <td>$1000</td>
    <td>Already Sharing</td>
  </tr>
  <tr>
    <td>Paris specialites</td>
    <td>France</td>
  </tr>
</table>

</div>
    );
};

export default search;