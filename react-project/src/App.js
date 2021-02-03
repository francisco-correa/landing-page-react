import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import CardOne from "./components/CardOne";
import CardTwo from './components/CardTwo';
import Footer from './components/Footer';

function App() {
  return (
<div className="container-fluid">
    <NavBar
       brand = "Start Bootstrap"
       link_1 = "Home"
       link_2 = "About"
       link_3 = "Services"
       link_4 = "Contact"
    />
    <br></br>
    <Jumbotron
      texto = "A Warm Welcome!"
      lorem = "Et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel"
      cta = "Call to action!"
         />
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
         <CardOne/>
      </div>
      <div className="col-md-3">
         <CardTwo/>
      </div>
      <div className="col-md-3">
        <CardOne/>
      </div>
      <div className="col-md-3">
        <CardTwo/>
      </div>
    </div>
  </div>
  <br></br>
    <Footer
       link = "https://github.com/francisco-correa"
       copyright = "Copyright © Your website 2021"
    />
</div>  
  );
}

export default App;




