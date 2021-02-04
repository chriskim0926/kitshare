import './App.css';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Footer from "./components/navbar/Footer/footer";
import Owner from "./pages/owner";
import SignupPage from "./pages/signupPage"
import { AuthProvider } from './context/AuthContext';




function App() {
  return (

   <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/owner" component={Owner} />
          <Route exact path="/signup" component={SignupPage} />
          </Switch>
          <Footer/>  
    </Router>

    
  );
}

export default App;
