import React from 'react'
import BackpackCard from './backpackCard'
import './backpack.css'


function Home () {
    return(
        <div>
            <h1>
                Welcome to The Best Backpacking! 
            </h1>
            <h2> 
                Here you will find the best backpacking trips around the world.
            </h2>
            <div className = 'backpack-h3-wrapper'>
                <BackpackCard/>
            </div>
        </div>
    )
}

export default Home