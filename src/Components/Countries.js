
// **********import*****************


import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 20;
    const [comments, setComments] = useState({});

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
        setCurrentPage(1); //******************** */ Reset the current page to the first page when searching********
    };

    // *****************Calculate the index of the first and last result on the current page********

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;

    // *********************Extract the results for the current page*********************
    const currentResults = filteredCountries.slice(indexOfFirstResult, indexOfLastResult);

    //************************** */ Calculate the total number of pages
    const totalPages = Math.ceil(filteredCountries.length / resultsPerPage);

    // *****************************Handle page change******************
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCommentChange = (country, e) => {
        setComments({
            ...comments,      // ***************** spreadoperator *******************
            [country.country]: e.target.value
        });
    };


    const handleAddComment = (country) => {
        const newComments = {
            ...comments,
            [country.country]: ''
        };
        setComments(newComments);
    };

    const handleDeleteComment = (country) => {
        const newComments = {
            ...comments
        };
        delete newComments[country.country];
        setComments(newComments);
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
                                    <h4>{country.country}</h4>
                                    <p>Cases: {country.cases}</p>
                                    <p>Deaths: {country.deaths}</p>
                                    <p>Recovered: {country.recovered}</p>
                                    <Button variant="primary" onClick={() => handleShowModal(country)}>View Details</Button>

                                </div>

                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="pagination">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} key={i}>
                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                                {i + 1}
                            </button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </li>
                </ul>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCountry && selectedCountry.country}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCountry && (
                        <>
                            <p>Cases: {selectedCountry.cases}</p>
                            <p>Deaths: {selectedCountry.deaths}</p>
                            <p>Recovered: {selectedCountry.recovered}</p>
                            <p>Today's Cases: {selectedCountry.todayCases}</p>
                            <p>Today's Deaths: {selectedCountry.todayDeaths}</p>
                            <p>Active Cases: {selectedCountry.active}</p>
                            <p>Critical Cases: {selectedCountry.critical}</p>
                            <p>Comments: {comments[selectedCountry.country]}</p>
                            <hr />
                            <h5>Comments</h5>
                            <div className="comments">
                                <textarea value={comments[selectedCountry.country] || ''} onChange={(e) => handleCommentChange(selectedCountry, e)} />
                                <Button variant="primary" onClick={() => handleAddComment(selectedCountry)}>Add Comment</Button>
                                {comments[selectedCountry.country] && <Button variant="danger" onClick={() => handleDeleteComment(selectedCountry)}>Delete Comment</Button>}
                            </div>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );


};

export default Countries;


// *********************export**********************************





// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import useFetch from '../hooks/useFetch';

// const Countries = () => {
//     const [countries, setCountries] = useState([]);
//     const [filteredCountries, setFilteredCountries] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedCountry, setSelectedCountry] = useState(null);
//     const [error, setError] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const resultsPerPage = 20;
//     const [comments, setComments] = useState({});

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
//         setCurrentPage(1); //******************** */ Reset the current page to the first page when searching********
//     };

//     // *****************Calculate the index of the first and last result on the current page********

//     const indexOfLastResult = currentPage * resultsPerPage;
//     const indexOfFirstResult = indexOfLastResult - resultsPerPage;

//     // *********************Extract the results for the current page*********************
//     const currentResults = filteredCountries.slice(indexOfFirstResult, indexOfLastResult);

//     //************************** */ Calculate the total number of pages
//     const totalPages = Math.ceil(filteredCountries.length / resultsPerPage);

//     // *****************************Handle page change******************
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const handleCommentChange = (country, e) => {
//         setComments({
//             ...comments,      // ***************** spreadoperator *******************
//             [country.country]: e.target.value
//         });
//     };


//     const handleAddComment = (country) => {
//         const newComments = {
//             ...comments,
//             [country.country]: ''
//         };
//         setComments(newComments);
//     };

//     const handleDeleteComment = (country) => {
//         const newComments = {
//             ...comments
//         };
//         delete newComments[country.country];
//         setComments(newComments);
//     };

//     return (
//         <div className="container">
//             <div className="Search">
//                 <div className="col-md-12">
//                     <div className="search">
//                         <input type="text" placeholder="Search countries" onChange={handleSearch} />
//                     </div>
//                 </div>
//             </div>
//             <div className="cardsContainer">
//                 {currentResults && currentResults.map((country) => (
//                     <div className="col-md-4" key={country.country}>
//                         <div className="flip-card">
//                             <div className="flip-card-inner">
//                                 <div className="flip-card-front">
//                                     <img src={country.countryInfo.flag} alt="" className="image-fluid" />
//                                     <div className="mt-3 mb-3">
//                                         <h3>{country.country}</h3>
//                                     </div>
//                                 </div>
//                                 <div className="flip-card-back">
//                                     <h4>{country.country}</h4>
//                                     <p>Cases: {country.cases}</p>
//                                     <p>Deaths: {country.deaths}</p>
//                                     <p>Recovered: {country.recovered}</p>
//                                     <div>
//                                         <textarea
//                                             className="form-control"
//                                             rows="3"
//                                             placeholder="Add a comment..."
//                                             value={comments[country.country] || ''}
//                                             onChange={(e) => handleCommentChange(country, e)}
//                                         />
//                                         <button
//                                             className="btn btn-danger mt-2"
//                                             onClick={() => handleDeleteComment(country)}
//                                             disabled={!comments[country.country]}
//                                         >
//                                             Delete Comment
//                                         </button>
//                                         <button
//                                             className="btn btn-primary mt-2"
//                                             onClick={() => handleAddComment(country)}
//                                             disabled={!comments[country.country]}
//                                         >
//                                             Add Comment
//                                         </button>
//                                     </div>
//                                     <Button variant="primary" onClick={() => handleShowModal(country)}>View Details</Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//             <div className="pagination">
//                 <ul className="pagination">
//                     <li className="page-item">
//                         <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//                             Previous
//                         </button>
//                     </li>
//                     {Array.from({ length: totalPages }, (_, i) => (
//                         <li className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} key={i}>
//                             <button className="page-link" onClick={() => handlePageChange(i + 1)}>
//                                 {i + 1}
//                             </button>
//                         </li>
//                     ))}
//                     <li className="page-item">
//                         <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </div>

//             <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{selectedCountry && selectedCountry.country}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {selectedCountry && (
//                         <>
//                             <p>Cases: {selectedCountry.cases}</p>
//                             <p>Deaths: {selectedCountry.deaths}</p>
//                             <p>Recovered: {selectedCountry.recovered}</p>
//                             <p>Today's Cases: {selectedCountry.todayCases}</p>
//                             <p>Today's Deaths: {selectedCountry.todayDeaths}</p>
//                             <p>Active Cases: {selectedCountry.active}</p>
//                             <p>Critical Cases: {selectedCountry.critical}</p>
//                             <p>Comments: {comments[selectedCountry.country]}</p>
//                             <hr />
//                             {/* <h5>Comments</h5> */}
//                             <div className="comments">
//                                 <textarea value={comments[selectedCountry.country] || ''} onChange={(e) => handleCommentChange(selectedCountry, e)} />
//                                 <Button variant="primary" onClick={() => handleAddComment(selectedCountry)}>Add Comment</Button>
//                                 {comments[selectedCountry.country] && <Button variant="danger" onClick={() => handleDeleteComment(selectedCountry)}>Delete Comment</Button>}
//                             </div>
//                         </>
//                     )}
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );


// };

// export default Countries;

     





// ********************************with fabourite button *****************************


// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import useFetch from '../hooks/useFetch';

// const Countries = () => {
//     const [countries, setCountries] = useState([]);
//     const [filteredCountries, setFilteredCountries] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedCountry, setSelectedCountry] = useState(null);
//     const [error, setError] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const resultsPerPage = 20;
//     const [comments, setComments] = useState({});
//     const [favorites, setFavorites] = useState([]);


//     const handleAddToFavorites = (country) => {
//         if (!favorites.includes(country)) {
//             setFavorites([...favorites, country]);
//         }
//     };



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
//         setCurrentPage(1); //******************** */ Reset the current page to the first page when searching********
//     };

//     // *****************Calculate the index of the first and last result on the current page********

//     const indexOfLastResult = currentPage * resultsPerPage;
//     const indexOfFirstResult = indexOfLastResult - resultsPerPage;

//     // *********************Extract the results for the current page*********************
//     const currentResults = filteredCountries.slice(indexOfFirstResult, indexOfLastResult);

//     //************************** */ Calculate the total number of pages
//     const totalPages = Math.ceil(filteredCountries.length / resultsPerPage);

//     // *****************************Handle page change******************
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const handleCommentChange = (country, e) => {
//         setComments({
//             ...comments,      // ***************** spreadoperator *******************
//             [country.country]: e.target.value
//         });
//     };


//     const handleAddComment = (country) => {
//         const newComments = {
//             ...comments,
//             [country.country]: ''
//         };
//         setComments(newComments);
//     };

//     // const handleDeleteComment = (country) => {
//     //     const newComments = {
//     //         ...comments
//     //     };
//     //     delete newComments[country.country];
//     //     setComments(newComments);
//     // };

//     const handleDeleteComment = (country) => {
//         const newComments = { ...comments };
//         delete newComments[country.country];
//         if (favorites.includes(country)) {
//             setFavorites(favorites.filter((c) => c !== country));
//         }
//         setComments(newComments);
//     };

//     return (
//         <div className="container">
//             <div className="Search">
//                 <div className="col-md-12">
//                     <div className="search">
//                         <input type="text" placeholder="Search countries" onChange={handleSearch} />
//                     </div>
//                 </div>
//             </div>

//             <div className="cardsContainer">
//                 {currentResults && currentResults.map((country) => (
//                     <div className="col-md-4" key={country.country}>
//                         <div className="flip-card">
//                             <div className="flip-card-inner">
//                                 <div className="flip-card-front">
//                                     <img src={country.countryInfo.flag} alt="" className="image-fluid" />
//                                     <div className="mt-3 mb-3">
//                                         <h3>{country.country}</h3>
//                                     </div>
//                                 </div>
//                                 <div className="flip-card-back">
//                                     <h4>{country.country}</h4>
//                                     <p>Cases: {country.cases}</p>
//                                     <p>Deaths: {country.deaths}</p>
//                                     <p>Recovered: {country.recovered}</p>
//                                     <div className="favorites">
//                                         <h3>Favorite Countries</h3>
//                                         <ul>
//                                             {favorites.map((country) => (
//                                                 <li key={country.country}>{country.country}</li>
//                                             ))}
//                                         </ul>
//                                     </div>


//                                     <Button variant="primary" onClick={() => handleShowModal(country)}>View Details</Button>
//                                     <Button variant="outline-secondary" onClick={() => handleAddToFavorites(country)}>Add to Favorites</Button>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                 ))}
//             </div>
//             <div className="pagination">
//                 <ul className="pagination">
//                     <li className="page-item">
//                         <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//                             Previous
//                         </button>
//                     </li>
//                     {Array.from({ length: totalPages }, (_, i) => (
//                         <li className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} key={i}>
//                             <button className="page-link" onClick={() => handlePageChange(i + 1)}>
//                                 {i + 1}
//                             </button>
//                         </li>
//                     ))}
//                     <li className="page-item">
//                         <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </div>

//             <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{selectedCountry && selectedCountry.country}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {selectedCountry && (
//                         <>
//                             <p>Cases: {selectedCountry.cases}</p>
//                             <p>Deaths: {selectedCountry.deaths}</p>
//                             <p>Recovered: {selectedCountry.recovered}</p>
//                             <p>Today's Cases: {selectedCountry.todayCases}</p>
//                             <p>Today's Deaths: {selectedCountry.todayDeaths}</p>
//                             <p>Active Cases: {selectedCountry.active}</p>
//                             <p>Critical Cases: {selectedCountry.critical}</p>
//                             <p>Comments: {comments[selectedCountry.country]}</p>
//                             <hr />
//                             <h5>Comments</h5>
//                             <div className="comments">
//                                 <textarea value={comments[selectedCountry.country] || ''} onChange={(e) => handleCommentChange(selectedCountry, e)} />
//                                 <Button variant="primary" onClick={() => handleAddComment(selectedCountry)}>Add Comment</Button>
//                                 {comments[selectedCountry.country] && <Button variant="danger" onClick={() => handleDeleteComment(selectedCountry)}>Delete Comment</Button>}
//                             </div>
//                         </>
//                     )}
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );


// };

// export default Countries;



