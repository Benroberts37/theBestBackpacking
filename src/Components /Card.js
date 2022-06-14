import React from "react";
import './Card.css'

function showTrail() {
  alert('Coming Soon!')
}

const Card = ({ item }) => {
  return (
    <>
      <div>
        <div className = 'big-container'>
          {item.map((props) => {
            return (
            <div key={props.id} className = "card-container">
              <div>
                  <h1>{props.nameOfTrail}</h1>
                  <h2>{props.country}</h2>
                  <p>{props.trailDescription}</p>
                  <button onClick={showTrail}>Explore This Trail!</button>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;



