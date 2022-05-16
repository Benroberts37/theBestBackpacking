import React from 'react'
import backpackingTrips from '../data'

const backpackingData = backpackingTrips;

function BackpackingTrips() {
    return(
        <div>
            {backpackingData.map(({nameOfTrail, trailDescription, countryLocation}) => (
                <div className ='backpack-container-wrapper'>
                 <h1>{nameOfTrail}</h1>
                 <h2>Trail Description: {trailDescription}</h2>
                 <h3>Country: {countryLocation}</h3>
                </div>
            ))}
       </div>
    )
}

export default BackpackingTrips

