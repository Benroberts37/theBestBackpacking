import React from "react";

const TrailCard = ({ item }) => {
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
                    <h2>Location Information</h2>
                    <h4>{props.country}</h4>
                    <h4>{props.parkLocation}</h4>
                    <h4>{props.stateOrProvince}</h4>
                    <h2>Trail Details</h2>
                    <h4>{props.trailDescription}</h4>
                    <h4>{props.lengthInMiles}</h4>
                    <h4>{props.routeType}</h4>
                    <h4>{props.elevationGainFt}</h4>
                    <h4>{props.elevationLossFt}</h4>
                    <h4>{props.recommendedTimeSpent}</h4>
                    <h4>{props.recommendedStartingSpot}</h4>
                    <h4>{props.recommendedFinishingSpot}</h4>
                    <h4>{props.stateOrProvince}</h4>
                    <h2>Permit Information and Cost</h2>
                    <h4>{props.permitRequired}</h4>
                    <h4>{props.hikingPermitCost}</h4>
                    <h4>{props.PermitRequiredToEnterPark}</h4>
                    <h4>{props.ParkPermitCost}</h4>
                    <h4>{props.PermitGatheringInstructions}</h4>
                    <h4>{props.permitWebsite}</h4>
                    <h4>{props.howFastDoPermitsSellOut}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrailCard;