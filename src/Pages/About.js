import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch';


function About() {
    const location = useLocation();
    // console.log("location: ", location);

    return (
        <div>
            {location.pathname.includes("LoginForm") ||
                location.pathname.includes("PieChart") ||
                location.pathname.includes("Map") ||
                location.pathname.includes("Country")
                ? <Outlet /> :
                <>
                    <h1>About</h1>

                </>
            }
        </div>
    )
}

export default About;