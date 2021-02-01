import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
const Contenido = (props) => {
  return <span style={{fontSize:24}}>{props.texto}</span>
}

function App() {
  return (
<div className="container-fluid">
  <nav className="navbar navbar-expand-md navbar-light bg-dark">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
           aria-expanded="false" aria-label="Toggle navigation">
            <span clasName="navbar-toggler-icon"></span>
          </button>
        </div>
        </div>
        <div className="col-md-4"> 
          <button type="button" data-target="#collapseNavbar" data-toggle="collapse" class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="collapseNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="">Services</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link text-secondary" href="">Contact</a>
              </li> 
            </ul>
          </div>
      </div>
    </div>
  </nav>
<br></br>
  <div className="jumbotron">
    <h1 className="display-4">A Warm Welcome!</h1>
    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
  </div>
  
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <div className="card" style={{width: "20rem"}}>
          <img src={logo} class="card-img-top" alt="React Logo"/>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <hr class="my-4"></hr>
                <div class="col text-center">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{width: "20rem"}}>
          <img src={logo} class="card-img-top" alt="React Logo"/>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr class="my-4"></hr>
                <div class="col text-center">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
          </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{width: "20rem"}}>
          <img src={logo} class="card-img-top" alt="React Logo"/>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <hr class="my-4"></hr>
                <div class="col text-center">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{width: "20rem"}}>
          <img src={logo} class="card-img-top" alt="React Logo"/>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <hr class="my-4"></hr>
                <div class="col text-center">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <footer className="bg-light text-center text-lg-start">
    <div className="text-center p-4" style={{backgroundColor: "rgba(1, 24, 19, 0.85)"}}>
      <a className="text-light" href="https://github.com/francisco-correa">Copyright © your website 2008</a>
    </div>
  </footer>
</div>  
  );
}

export default App;
