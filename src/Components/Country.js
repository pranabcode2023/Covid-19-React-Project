// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';


// const Country = () => {
//     const [countries, setCountries] = useState([]);
//     const [filteredCountries, setFilteredCountries] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedCountry, setSelectedCountry] = useState(null);
//     const [error, setError] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const resultsPerPage = 20;
//     const [userProfile, setUserProfile] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://disease.sh/v3/covid-19/countries');
//                 const data = await response.json();
//                 setCountries(data);
//                 setFilteredCountries(data);
//                 if (data) {
//                     setError(false);
//                 }
//                 console.log(data);
//             } catch {
//                 setError('Something went wrong');
//             }
//         };
//         fetchData();
//     }, []);

//     const handleShowModal = (country) => {
//         setSelectedCountry(country);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setSelectedCountry(null);
//         setShowModal(false);
//     };

//     const handleSearch = (e) => {
//         const searchQuery = e.target.value.toLowerCase();
//         const filtered = countries.filter((country) => {
//             return country.country.toLowerCase().includes(searchQuery);
//         });
//         setFilteredCountries(filtered);
//         setCurrentPage(1); // Reset the current page to the first page when searching
//     };

//     // Calculate the index of the first and last result on the current page
//     const indexOfLastResult = currentPage * resultsPerPage;
//     const indexOfFirstResult = indexOfLastResult - resultsPerPage;

//     // Extract the results for the current page
//     const currentResults = filteredCountries.slice(indexOfFirstResult, indexOfLastResult);

//     // Calculate the total number of pages
//     const totalPages = Math.ceil(filteredCountries.length / resultsPerPage);

//     // Handle page change
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const handleUserProfileSubmit = (profile) => {
//         setUserProfile(profile);
//     };

//     const PersonalizedProfile = ({ country }) => {
//         // Use userProfile and other data to create a personalized disease profile
//         return (
//             <div>
//                 <h3>Personalized Disease Profile for {country.country}</h3>
//                 {/* Display customized information and recommendations */}

//                 {userProfile ? (
//                     <div>
//                         <p>Age: {userProfile.age}</p>
//                         <p>Gender: {userProfile.gender}</p>
//                         <p>Health conditions: {userProfile.conditions}</p>
//                         <p>Medications: {userProfile.medications}</p>
//                         <p>Vaccination status: {userProfile.vaccinated}</p>
//                         <p>Recent travel: {userProfile.travel}</p>
//                     </div>
//                 ) : (
//                     <p>Please fill out your profile to see personalized information.</p>
//                 )}
//             </div>
//         );
//     };

//     return (
//         <div className="container">
//             <h1>Countries and COVID-19 Data</h1>
//             <input type="text" placeholder="Search countries" onChange={handleSearch} />
//             {error && <p>{error}</p>}
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Country</th>
//                         <th>Total Cases</th>
//                         <th>Total Deaths</th>
//                         <th>Total Recovered</th>
//                         <th>Active Cases</th>
//                         <th>View Profile</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentResults.map((country, index) => (
//                         <tr key={index}>
//                             <td>{country.country}</td>
//                             <td>{country.cases}</td>
//                             <td>{country.deaths}</td>
//                             <td>{country.recovered}</td>
//                             <td>{country.active}</td>
//                             <td>
//                                 <Button variant="primary" onClick={() => handleShowModal(country)}>
//                                     View
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <nav>
//                 <ul className="pagination">
//                     {Array.from({ length: totalPages }, (_, index) => (
//                         <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
//                             <Button variant="link" onClick={() => handlePageChange(index + 1)}>
//                                 {index + 1}
//                             </Button>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//             <Modal show={showModal} onHide={handleCloseModal}>
//                 {selectedCountry && (
//                     <>
//                         <Modal.Header closeButton>
//                             <Modal.Title>{selectedCountry.country}</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             <PersonalizedProfile country={selectedCountry} />
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleCloseModal}>
//                                 Close
//                             </Button>
//                         </Modal.Footer>
//                     </>
//                 )}
//             </Modal>
//         </div >
//     );
// };

// export default Country;


import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import UserProfileForm from './UserProfileForm';

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 20;
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://disease.sh/v3/covid-19/countries');
                const data = await response.json();
                setCountries(data);
                setFilteredCountries(data);
                if (data) {
                    setError(false);
                }
                console.log(data);
            } catch {
                setError('Something went wrong');
            }
        };
        fetchData();
    }, []);

    // const handleShowModal = (country) => {
    //     setSelectedCountry(country);
    //     setShowModal(true);
    // };
    const handleShowModal = (country) => {
        if (country) {
            setSelectedCountry(country);
            setShowModal(true);
        }
    };


    const handleCloseModal = () => {
        setSelectedCountry(null);
        setShowModal(false);
    };


    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filtered = countries.filter((country) => {
            return country.country && country.country.toLowerCase().includes(searchQuery);
        });
        setFilteredCountries(filtered);
        setCurrentPage(1); // Reset the current page to the first page when searching
    };


    // Calculate the index of the first and last result on the current page
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;

    // Extract the results for the current page
    const currentResults = filteredCountries.slice(indexOfFirstResult, indexOfLastResult);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredCountries.length / resultsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // const handleUserProfileSubmit = (profile) => {
    //     <UserProfileForm country={selectedCountry} onSubmit={handleUserProfileSubmit} />

    //     setUserProfile(profile);
    // };

    const handleUserProfileSubmit = (profile) => {
        <UserProfileForm country={selectedCountry} onSubmit={handleUserProfileSubmit} />

        setUserProfile(profile);
    };


    const PersonalizedProfile = ({ country, userProfile }) => {
        if (!selectedCountry) {
            return null;
        }

        // Use userProfile and other data to create a personalized disease profile
        return (
            <div>
                <h1>Personalized Disease Profile</h1>
                {/* <h3>{country.country}</h3>
                 <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p> */}
                {userProfile && (
                    <>
                        <p>Age: {userProfile.age}</p>
                        <p>Gender: {userProfile.gender}</p>
                        <p>Existing Health Conditions: {userProfile.conditions}</p>
                        <p>Medications: {userProfile.medications}</p>
                        <p>Vaccination Status: {userProfile.vaccinated}</p>
                        <p>Recent Travel: {userProfile.travel}</p>
                    </>
                )}
            </div>
        );
    };

    return (
        <div>

            <h1>COVID-19 Statistics by Country</h1>
            <input type="text" placeholder="Search by country name" onChange={handleSearch} />
            {error && <p>{error}</p>}
            {userProfile && selectedCountry && (
                <PersonalizedProfile country={selectedCountry} userProfile={userProfile} />
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>Total Deaths</th>
                        <th>Total Recovered</th>
                        <th>Active Cases</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {currentResults.map((country, index) => (
                        <tr key={index}>
                            <td>{country.country}</td>
                            <td>{country.cases}</td>
                            <td>{country.deaths}</td>
                            <td>{country.recovered}</td>
                            <td>{country.active}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleShowModal(country)}>
                                    Add
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                            <Button variant="link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Disease Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCountry && (
                        <UserProfileForm
                            country={selectedCountry}
                            onSubmit={handleUserProfileSubmit}
                        />
                    )}
                    {userProfile && selectedCountry && (
                        <PersonalizedProfile country={selectedCountry} userProfile={userProfile} />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Country;

