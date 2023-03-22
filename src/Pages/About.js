import React from 'react'
import { useLocation } from 'react-router-dom'
import Country from '../Components/Country'
import Graph from '../Components/Graph';


function About() {
    const location = useLocation();
    console.log("location: ", location);

    return (
        <div>
            <h1>About Page</h1>
            <Country />
            <Graph />
        </div>
    )
}

export default About