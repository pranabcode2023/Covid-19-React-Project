// import React from 'react';

// const RedAlert = () => {
//     return (
//         <div className="card">
//             <img src="https://via.placeholder.com/150" alt="placeholder" />
//             <div className="card-body">
//                 <h5 className="card-title">Card Title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="http://localhost:3000/" className="btn btn-primary">HomePage</a>
//             </div>
//         </div>
//     );
// };

// export default RedAlert;

// import React from 'react'

// const RedAlert = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default RedAlert

import { useState, useEffect } from 'react';
import { collection, getDocs, } from 'firebase/firestore';
import { db } from '../fbConfig';



const RedAlert = () => {
    const [crisisCountries, setCrisisCountries] = useState([]);

    useEffect(() => {
        const fetchCrisisCountries = async () => {
            const querySnapshot = await getDocs(collection(db, 'crisis_countries'));

            const data = querySnapshot.docs.map((doc) => doc.data());
            setCrisisCountries(data);
        };
        fetchCrisisCountries();
    }, []);




    return (
        <div className="cardsContainer">

            {crisisCountries.map((country, index) => (
                <div className="card" key={index}>
                    <h3>COVID-19 Emergency in:</h3>
                    <h3>{country.country}</h3>

                </div>
            ))}
        </div>
    );
};


export default RedAlert;
