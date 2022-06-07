import React from "react";
import './TrailCard.css'

const TrailCard = ({ item }) => {
  return (
    <>
      <div>
        <div className="row justify-content-center">
          {item.map((props) => {
            return (
              <div key={props.id}>
                <div>
                    <div className="containers">
                    <h1>{props.nameOfTrail}</h1>
                     <div className= "small-containers">
                        <h2 className = "titles"><u>Location Information</u></h2>
                        <h4><strong>Country: </strong>{props.country}</h4>
                        <h4><strong>Park: </strong>{props.parkLocation}</h4>
                        <h4><strong>State/Province: </strong>{props.stateOrProvince}</h4>
                    </div>
                    <div className= "small-containers">
                        <h2 className = "titles"><u>Trail Details</u></h2>
                        <h4><strong>Trail Description: </strong>{props.trailDescription}</h4>
                        <h4><strong>Trail Length: </strong>{props.lengthInMiles}</h4>
                        <h4><strong>Route Type: </strong>{props.routeType}</h4>
                        <h4><strong>Elevation Gain: </strong>{props.elevationGainFt}</h4>
                        <h4><strong>Elevation Loss: </strong>{props.elevationLossFt}</h4>
                        <h4><strong>Recommended Time: </strong>{props.recommendedTimeSpent}</h4>
                        <h4><strong>Recommended Starting Location: </strong>{props.recommendStartingSpot}</h4>
                        <h4><strong>Recommended Finishing Location: </strong>{props.recommendedFinishingSpot}</h4>
                    </div>
                    <div className= "small-containers"> 
                        <h2 className = "titles"><u>Permits and Cost</u></h2>
                        <h4><strong>Do you need a permit to backpack? </strong>{props.permitRequired}</h4>
                        <h4><strong>Hiking Permit Cost: </strong>{props.hikingPermitCost}</h4>
                        <h4><strong>Do you need a pass/permit to enter the park? </strong>{props.PermitRequiredToEnterPark}</h4>
                        <h4><strong>Park Permit Cost: </strong>{props.ParkPermitCost}</h4>
                        <h4><strong>Tips on getting a permit: </strong>{props.PermitGatheringInstructions}</h4>
                        <h4><strong>permit website: </strong><a>{props.permitWebsite}</a></h4>
                        <h4><strong>How fast do permits sell out? </strong>{props.howFastDoPermitsSellOut}</h4>
                    </div>
                    <div> 
                      
                    </div>
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