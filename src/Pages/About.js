import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'


function About() {
    const location = useLocation();
    console.log("location: ", location);

    return (
        <div>
            {location.pathname.includes("Country") || location.pathname.includes("Vaccines") ? <Outlet /> :
                <>
                    <h1>About Page</h1>
                    <p>This page blah blah</p>
                </>
            }
        </div>
    )
}

export default About