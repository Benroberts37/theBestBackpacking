import React from 'react'
import BackpackCard from './backpackCard'

function Home () {
    return(
        <div>
            <h1>
                Welcome to The Best Backpacking! 
            </h1>
            <h2> 
                Here you will find the best backpacking trips around the world.
            </h2>
            <h3>
                <BackpackCard/>
            </h3>
        </div>
    )
}

export default Home