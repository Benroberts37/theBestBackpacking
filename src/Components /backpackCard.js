import { buildQueries } from '@testing-library/react';
import React from 'react'
import backpackingTrips from '../data'
import './backpack.css'

const backpackingData = backpackingTrips;


function BackpackingTrips() {
    return(
        <div className='backpack-container-wrapper'>
            {backpackingData.map(({nameOfTrail, trailDescription, countryLocation, parkLocation}) => (
                <div className ='backpack-container-wrapper'>
                 <h1>{nameOfTrail}</h1>
                 <h3>Country: {countryLocation}</h3>
                 <h3>Park: {parkLocation}</h3>
                </div>
            ))}
       </div>
    )
}

export default BackpackingTrips

