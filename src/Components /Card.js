import React from "react";

function showTrail() {
  alert('Coming Soon!')
}

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((props) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={props.id}
              >
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    <h1>{props.nameOfTrail}</h1>
                    <h2>{props.country}</h2>
                  </div>
                  <div className="card-text">{props.trailDescription}</div>
                </div>
                <button onClick={showTrail}>Explore This Trail</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;



