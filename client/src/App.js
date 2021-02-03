import './App.css';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Footer from "./components/navbar/Footer/footer";
import Search from "./components/navbar/Search/search"



function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
          <Search/>   
          <Footer/>  
    </Router>
    
  );
}

export default App;
