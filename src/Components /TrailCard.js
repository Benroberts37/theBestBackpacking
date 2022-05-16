import React from "react";

const TrailCard = ({ item }) => {
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
                    <h2>Location Information</h2>
                    <h4>{Val.country}</h4>
                    <h4>{Val.parkLocation}</h4>
                    <h4>{Val.stateOrProvince}</h4>
                    <h2>Trail Details</h2>
                    <h4>{Val.trailDescription}</h4>
                    <h4>{Val.lengthInMiles}</h4>
                    <h4>{Val.routeType}</h4>
                    <h4>{Val.elevationGainFt}</h4>
                    <h4>{Val.elevationLossFt}</h4>
                    <h4>{Val.recommendedTimeSpent}</h4>
                    <h4>{Val.recommendedStartingSpot}</h4>
                    <h4>{Val.recommendedFinishingSpot}</h4>
                    <h4>{Val.stateOrProvince}</h4>
                    <h2>Permit Information and Cost</h2>
                    <h4>{Val.permitRequired}</h4>
                    <h4>{Val.hikingPermitCost}</h4>
                    <h4>{Val.PermitRequiredToEnterPark}</h4>
                    <h4>{Val.ParkPermitCost}</h4>
                    <h4>{Val.PermitGatheringInstructions}</h4>
                    <h4>{Val.permitWebsite}</h4>
                    <h4>{Val.howFastDoPermitsSellOut}</h4>
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