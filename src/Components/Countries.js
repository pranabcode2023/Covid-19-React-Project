import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 20;

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

    const handleShowModal = (country) => {
        setSelectedCountry(country);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedCountry(null);
        setShowModal(false);
    };

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filtered = countries.filter((country) => {
            return country.country.toLowerCase().includes(searchQuery);
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

    return (
        <div className="container">
            <div className="Search">
                <div className="col-md-12">
                    <div className="search">
                        <input type="text" placeholder="Search countries" onChange={handleSearch} />
                    </div>
                </div>
            </div>
            <div className="cardsContainer">
                {currentResults && currentResults.map((country) => (
                    <div className="col-md-4" key={country.country}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={country.countryInfo.flag} alt="" className="image-fluid" />
                                    <div className="mt-3 mb-3">
                                        <h3>{country.country}</h3>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="fs-4 fw-bold mb-4">{country.country}</div>
                                    <div><strong>Total cases:</strong> {country.cases}</div>
                                    <div><strong>Recovered:</strong> {country.recovered}</div>
                                    <div><strong>Deaths:</strong> {country.deaths}</div>
                                    <Button onClick={() => handleShowModal(country)}>Read More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {totalPages > 1 && (
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} key={i}>
                                    <Button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCountry && selectedCountry.country}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>Total Cases: {selectedCountry && selectedCountry.cases}</p>
                    <p>Total Deaths: {selectedCountry && selectedCountry.deaths}</p>
                    <p>Total Recovered: {selectedCountry && selectedCountry.recovered}</p>
                    <p>Today's Cases: {selectedCountry && selectedCountry.todayCases}</p>
                    <p>Today's Deaths: {selectedCountry && selectedCountry.todayDeaths}</p>
                    <p>Active Cases: {selectedCountry && selectedCountry.active}</p>
                    <p>Critical Cases: {selectedCountry && selectedCountry.critical}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default Countries;






// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// const Countries = () => {
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

// export default Countries;



