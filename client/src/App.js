import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Listings from "./pages/listing/Listing";
import Listinginfo from "./pages/listingInfo/listingInfo";
import AddListing from "./pages/addListing/AddListing";
import Owner from "./pages/owner/Owner";
import NavBar from "./components/navbar/navbar/navbar";
import Signup from "./components/signup/signup";
import Footer from "./components/navbar/Footer/footer";
import EditRestaurant from "./pages/editRestaurant/EditRestaurant";
import Signin from "./components/signin/signin";
import React, { useState } from "react";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/listing/:id" component={Listinginfo} />
        <Route exact path="/owner" component={Owner} />
        <Route exact path="/owner/add" component={AddListing} />
        <Route exact path="/signup" component={Signup} />
        <Route
          exact
          path="/signin"
          component={(props) => <Signin {...props} setToken={setToken} />}
        />
        <Route exact path="/owner/:id" component={EditRestaurant} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
