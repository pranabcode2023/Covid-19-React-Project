// ********************************with Alert  button *****************************

import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../fbConfig";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20;
  // const [alert, setAlert] = useState([]);
  const navigate = useNavigate();
  const numberFormat = new Intl.NumberFormat("en-US");
  // const bigNum = 1000000000000000110000n;
  // console.log(numberFormat.format(bigNum));


//   const goBack = () => navigate(-1);

  const handleAddToAlert = async (country) => {
    try {
      const alertData = {
        country: country.country,
        timestamp: Timestamp.now(),
      };
      const docRef = await addDoc(
        collection(db, "crisis_countries"),
        alertData
      );
      console.log("Alert document written with ID: ", docRef.id);
      navigate("/RedAlert"); // Redirect to the covid19Cases page
    } catch (e) {
      console.error("Error adding alert document: ", e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        if (data) {
          setError(false);
        }
        console.log(data);
      } catch {
        setError("Something went wrong");
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
  const currentResults = filteredCountries.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  //************************** */ Calculate the total number of pages
  const totalPages = Math.ceil(filteredCountries.length / resultsPerPage);

  // *****************************Handle page change******************
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="homePageContainer">

      <div className="homePageheaderButton">
      <h1>Covid-19 Worldwide</h1>

        {/* <>
          <Button variant="primary" onClick={goBack}>
           Homepage
          </Button>
        </> */}
      </div>


      <input
        type="text"
        placeholder="Search countries"
        onChange={handleSearch}
      />

      <div className="cardsContainer">
        {currentResults &&
          currentResults.map((country) => (
            <div className="flip-card" key={country.country}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={country.countryInfo.flag}
                    alt=""
                    className="image-fluid"
                  />
                  <div className="mt-3 mb-3">
                    <h3>{country.country}</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>{country.country}</h4>
                  <hr />
                  <p>Cases: {numberFormat.format(country.cases)}</p>
                  <p>Deaths: {numberFormat.format(country.deaths)}</p>
                  <p>Recovered: {numberFormat.format(country.recovered)}</p>

                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(country)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <RedAlert /> */}

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
          <Modal.Title>
            {selectedCountry && selectedCountry.country}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCountry && (
            <>
              <p>Cases: {numberFormat.format(selectedCountry.cases)}</p>
              <p>Deaths: {numberFormat.format(selectedCountry.deaths)}</p>
              <p>Recovered: {numberFormat.format(selectedCountry.recovered)}</p>
              <p>
                Today's Cases: {numberFormat.format(selectedCountry.todayCases)}
              </p>
              <p>
                Today's Deaths:{" "}
                {numberFormat.format(selectedCountry.todayDeaths)}
              </p>
              <p>Active Cases: {numberFormat.format(selectedCountry.active)}</p>
              <p>
                Critical Cases: {numberFormat.format(selectedCountry.critical)}
              </p>
              <div className="alert">
                {/* <h3>Covid_19 Crisis</h3>
                                <ul>
                                    {alert.map((country) => (
                                        <li key={country.country}>{country.country}</li>

                                    ))}
                                </ul> */}
              </div>
              {/* <Button variant="danger" onClick={() => handleAddToAlert(selectedCountry)}>Add to in Alert</Button> */}
              <Button
                variant="primary"
                onClick={() => handleAddToAlert(selectedCountry)}
              >
                Add to Alert List
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Countries;
