import React from "react";
import './contact.css';


const contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="row">
              <h1>Contact us</h1>
            </div>
            <div className="row">
             <div className = "row">
                 <h5><strong>KitShare</strong></h5>
             </div>
             <div className = "row">
                 <p>111 Kitchen Road <br/> Suwanee, GA 30024</p>
             </div>
             <div className = "row">
                 <p>info@kitshare.com <br/> 1-877-777-9999</p>
             </div>
            </div>
          </div>
          <div className="column">
                    <div className="row">
               <div class="row">
        <div class="col m10 offset-m1 s12">
            <h2 class="center-align">Email Us</h2>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col m6 s12">
                            <input id="first_name" type="text" class="validate"/>
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field col m6 s12">
                            <input id="last_name" type="text" class="validate"/>
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col m6 s12">
                            <i class="mdi-content-mail prefix"></i>
                            <input id="email" type="email" class="validate" required/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col m6 s12">
                            <i class="mdi-maps-store-mall-directory prefix"></i>
                            <input id="company" type="text" class="validate"/>
                            <label for="company">Company</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                          <textarea id="message" class="materialize-textarea"></textarea>
                          <label for="message">Message</label>
                        </div>
                    </div>
                  
                    <div class="row">
                        <div class="col m12">
                         <p class="right-align"><button class="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
