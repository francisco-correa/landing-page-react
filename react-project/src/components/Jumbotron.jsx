import React from "react"
 
const Jumbotron = (props) =>{
    return  (
       <div className="jumbotron">
        <h1 className="display-4">{props.texto}</h1>
        <p className="lead">{props.lorem}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">{props.cta}</a>
      </div>
    )
  }
 
  export default Jumbotron;