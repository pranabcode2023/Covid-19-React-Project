import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import UserProfileForm from './UserProfileForm';
import { useNavigate } from 'react-router-dom';
import PersonalizedProfile from './PersonalizedProfile';
// import { collection, addDoc } from "firebase/firestore";
// import { db } from '../fbConfig';

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 20;
    const [userProfile, setUserProfile] = useState(null);
    const navigate = useNavigate();
    const numberFormat = new Intl.NumberFormat("en-US");
    // const bigNum = 1000000000000000110000n;
    // console.log(numberFormat.format(bigNum));


    const goBack = () =>
        navigate(-1);


    useEffect(() => {
        console.log("%cuseEffect run in Coutnry", "color:red")
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
        // <UserProfileForm country={selectedCountry} onSubmit={handleUserProfileSubmit} />

        setUserProfile(profile);
        // console.log(profile)
    };




    return (
      <div className="countryPageContainer">
        <div className='headerButton'>
          <h1>COVID-19 Statistics by Country</h1>

          <>
            <Button
              variant="primary"
              onClick={goBack}
            >
              Back to Show More
            </Button>
          </>
        </div>

        <input
          type="text"
          placeholder="Search by country name"
          onChange={handleSearch}
        />
        {error && <p>{error}</p>}
        {userProfile && selectedCountry && (
          <PersonalizedProfile
            country={selectedCountry}
            userProfile={userProfile}
          />
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
                <td>{numberFormat.format(country.cases)}</td>
                <td>{numberFormat.format(country.deaths)}</td>
                <td>{numberFormat.format(country.recovered)}</td>
                <td>{numberFormat.format(country.active)}</td>
                <td>
                  <Button
                    variant="secondary"
                    onClick={() => handleShowModal(country)}
                  >
                    Add New Case
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <ul className="pagination">
            <li className="page-item">
              <Button
                variant="primary"
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
                key={i}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <Button
                variant="primary"
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </li>
          </ul>
        </div>

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
              <PersonalizedProfile
                country={selectedCountry}
                userProfile={userProfile}
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
};

export default Country;

