import React from "react"
 
const Footer = (props) =>{
    return  (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-4" style={{backgroundColor: "rgba(1, 24, 19, 0.85)"}}>
                <a className="text-light" href={props.link}>{props.copyright}</a>
            </div>
        </footer>
    )
  }
 
  export default Footer;