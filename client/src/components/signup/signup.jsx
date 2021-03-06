import React from 'react';
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useAuth } from "../../context/AuthContext"
import { useRef, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

const Signup = () => {
    
    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfirmRef = useRef();
    // const {signup} = useAuth();
    // const [error, setError] = useState('')
    // const [loading, setLoading] = useState(false)

    
    // async function handleSubmit (e){
    //     e.preventDefault()
    //     if (passwordRef.current.value !== passwordConfirmRef.current.value){
    //         return setError('Password do not match')
    //     }

    //     try {

    //         setError('')
    //         setLoading(true)

    //        await signup(emailRef.current.value, passwordRef.current.value)
    //     } catch {
    //         setError('Failed to create an account')
    //     }

    //     setLoading(false)

    // }

//     return (
//         <>
//         <Card>
//           <Card.Body>
//             <h2 className="text-center mb-4">Sign Up</h2>
//             {error && <Alert cariant="danger">{error}</Alert>}
//             <Form onSubmit={handleSubmit}>
//               <Form.Group id="email">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" ref={emailRef} required />
//               </Form.Group>
//               <Form.Group id="password">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" ref={passwordRef} required />
//               </Form.Group>
//               <Form.Group id="password-confirm">
//                 <Form.Label>Password Confirmation</Form.Label>
//                 <Form.Control type="password" ref={passwordConfirmRef} required />
//               </Form.Group>
//               <Button disableed= {loading} className="w-100" type="submit">
//                 Sign Up
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//         <div className="w-100 text-center mt-2">
//           Already have an account? <Link to="/">Log In</Link>
//         </div>
//       </>
//     );
// };

// export default Signup;

console.log ()

return (
    <>
    <Card>
      <Card.Body>
        
      <div className = "container"> 
        <div className = "row" style = {{marginBottom: "100px"}}></div>
    
        <div className = "row"> 
        <h2 className="centered" style = {{color: "black"}}>Sign Up</h2>
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
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password"  required />
          </Form.Group>
          <Button className="w-100" type="submit">
            Sign Up
          </Button>
        </Form>
        </div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account? <Link to="/signin">Log In</Link>
    </div>
  </>
);
};

export default Signup;


// const Signup = () => {
    
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmRef = useRef();

    
//     return (
//         <>
//      <div>hello</div>
//         </>
//     );
// };

// export default Signup;