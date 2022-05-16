import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    <h1>{Val.nameOfTrail}</h1>
                    <h2>{Val.country}</h2>
                  </div>
                  <div className="card-text">{Val.trailDescription}</div>
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



