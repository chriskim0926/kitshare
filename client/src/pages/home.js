import React from 'react';
import './home.css';
import Search from "../components/navbar/Search/search";


const home = () => {
    return (
        <div>
        <div id="bannerimage">this is home page</div>
        <Search/>
        </div>
    );
};

export default home;