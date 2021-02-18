import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Signin = () => {
    const history = useHistory();
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios
        .post("/api/signin", {email, password})
        .then((response) =>{
            console.log(response.data)
            alert("You have sucessfully login as " + email)
            history.push("/owner")
        })
    }
    
    


    return (
        
        <>
        <Card>
          <Card.Body>
    
        <div className = "container"> 
        <div className = "row" style = {{marginBottom: "100px"}}></div>
    
        <div className = "row"> 
        <h2 className="centered" style = {{color: "black"}}>Sign In</h2>
        </div>
        </div>
        <div className = "container">
            <Form  onSubmit={handleFormSubmit} >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <input 
                   type="email" required 
                   id="email"
                   name="email"
                   value={email}
                   onChange={(e) => {
                    setEmail(e.target.value);
                   }}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <input 
                   type="password" required 
                   id="password"
                   name="password"
                   value={password}
                   onChange={(e) => {
                    setPassword(e.target.value);
                   }}
                />
              </Form.Group>
               <Button className="w-100" type="submit">
                Sign In
              </Button>
            </Form>
            </div>
          </Card.Body>
        </Card>
    
      </>
    );
};

export default Signin;