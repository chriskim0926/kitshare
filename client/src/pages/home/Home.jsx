import React from 'react';
import './home.css';
import image from "../../img/main.jpg"

const Home = () => {
    return (
        
    //     <header className="w3-display-container w3-content w3-wide" style={{maxWidth:"1600px;min-width:500px"}} id="home">
    //     <div className = "container">
    //     <img src={image} alt="kitchen" style = {{width:"1600", height:"800"}}/>
    //     <div className="center" id = "text">
    //      <h1 id = "text">Kitchen Share</h1>
            
    //       {/* <h1 className="w3-xxlarge" style = {{color:"white"}}>Kitchen Share</h1> */}
    //     </div>
    //     </div>
    //   </header>
    <>
    
      <div class="container">
      <img src={image} alt="Kitchen" style={{width:"100%"}}/>
      <em className = "centered"> <a href="/listings" style= {{color: "white", fontSize: 30 , background:"black" , opacity: .6}}>Take Me To My Dream Kitchen</a></em>
      <div class="neons col-12" id= "text">
         <h1><em>KitShare</em></h1>
      </div>
    </div>
    </>
    );
};



export default Home;