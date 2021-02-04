import React from 'react';
import './home.css';
import Search from "../components/navbar/Search/search";
import Employee from "../pages/restrauants";


const home = () => {
    return (
        <div>
        <div id="bannerimage"></div>
        <Employee/>
        </div>
    );
};

export default home;