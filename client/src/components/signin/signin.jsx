import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, Alert  } from 'react-bootstrap'


const signin = () => {
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
            <Form >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
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

export default signin;