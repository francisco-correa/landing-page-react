import React from "react";

class CardOne extends React.Component {
    render() {
      let card = {
        cardTitle: "Pizza Time",
        image: "https://th.bing.com/th/id/OIP.yyuhZCSa_O8zwT9eVdSfBQHaEy?w=285&h=183&c=7&o=5&dpr=1.25&pid=1.7",
        text: "Felis eget nunc lobortis mattis aliquam faucibus purus in massa",
        cta: "Find Out More!"

      };
      return (
        <div className="card" style={{width: "20.313rem"}}>
          <img src={card.image} class="card-img-top" alt="React Logo"/>
            <div className="card-body">
              <h5 className="card-title text-center">{card.cardTitle}</h5>
              <p className="card-text text-center">{card.text}</p>
              <hr className="my-4"></hr>
              <div className="col text-center">
               <a href="#" className="btn btn-primary">{card.cta}</a>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default CardOne;