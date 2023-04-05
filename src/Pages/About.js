import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'





function About() {
    const location = useLocation();
    // console.log("location: ", location);
    const linkStyle = {
        color: "darkblue",
        fontSize: "25px",
        textDecoration: "bold",
    };
    return (
        <div>
            {location.pathname.includes("LoginForm") ||
                location.pathname.includes("PieChart") ||
                location.pathname.includes("Map") ||
                location.pathname.includes("Country") ||
                location.pathname.includes("Covid19Cases")
                ? <Outlet /> :
                <>
                    <h1>About</h1>
                    <hr />

                    {location.pathname.includes("about") ?
                        <>
                            {/* <NavLink to='/About/LoginForm' style={({ isActive }) => isActive ? linkStyle : null}>LoginForm</NavLink> */}
                            <NavLink to='/About/Country' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 Data</NavLink>
                            <hr />
                            <NavLink to='/About/Covid19Cases' style={({ isActive }) => isActive ? linkStyle : null}>Covid_19 Cases</NavLink>
                            <hr />
                            <NavLink to='/About/PieChart' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 PieChart</NavLink>
                            <hr />
                            <NavLink to='/About/Map' style={({ isActive }) => isActive ? linkStyle : null}>Covid-19 Vaccine Map</NavLink>
                        </>
                        : null}

                </>
            }
        </div>
    )
}

export default About;