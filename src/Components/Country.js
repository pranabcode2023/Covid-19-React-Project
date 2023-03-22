import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormCheck } from 'react-bootstrap';

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [filters, setFilters] = useState({
        showAll: true,
        showCases: false,
        showDeaths: false,
        showRecovered: false
    });
    const perPage = 20;

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    useEffect(() => {
        const filtered = countries.filter((country) => {
            if (filters.showAll) {
                return true;
            }
            if (filters.showCases && country.cases > 0) {
                return true;
            }
            if (filters.showDeaths && country.deaths > 0) {
                return true;
            }
            if (filters.showRecovered && country.recovered > 0) {
                return true;
            }
            return false;
        });
        setFilteredCountries(filtered);
    }, [countries, filters]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const filtered = countries.filter((country) => {
            if (filters.showAll) {
                return true;
            }
            if (filters.showCases && country.cases > 0) {
                return true;
            }
            if (filters.showDeaths && country.deaths > 0) {
                return true;
            }
            if (filters.showRecovered && country.recovered > 0) {
                return true;
            }
            return false;
        });
        setFilteredCountries(filtered);
    };

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //     const filtered = countries.filter((country) => {
    //         if (filters.showAll) {
    //             return true;
    //         }
    //         if (filters.showCases && country.cases > 0) {
    //             return true;
    //         }
    //         if (filters.showDeaths && country.deaths > 0) {
    //             return true;
    //         }
    //         if (filters.showRecovered && country.recovered > 0) {
    //             return true;
    //         }
    //         return false;
    //     });
    //     setFilteredCountries(filtered.slice(startIndex, endIndex));
    // };


    const pageCount = Math.ceil(filteredCountries.length / perPage);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentCountries = filteredCountries.slice(startIndex, endIndex);

    return (
        <div className="country-container">
            <h1 className="country-header">Countries</h1>
            <FormCheck
                inline
                label="Show All"
                type="checkbox"
                checked={filters.showAll}
                onChange={() =>
                    setFilters({ ...filters, showAll: !filters.showAll })
                }
            />
            <FormCheck
                inline
                label="Show Cases"
                type="checkbox"
                checked={filters.showCases}
                onChange={() =>
                    setFilters({ ...filters, showCases: !filters.showCases })
                }
            />
            <FormCheck
                inline
                label="Show Deaths"
                type="checkbox"
                checked={filters.showDeaths}
                onChange={() =>
                    setFilters({ ...filters, showDeaths: !filters.showDeaths })
                }
            />
            <FormCheck
                inline
                label="Show Recovered"
                type="checkbox"
                checked={filters.showRecovered}
                onChange={() =>
                    setFilters({ ...filters, showRecovered: !filters.showRecovered })
                }
            />
            <ul>
                {currentCountries.map((country) => (
                    <li key={country.countryInfo._id}>
                        <Link to={`/countries/${country.country}`}>{country.country}</Link>{''}
                        <p>
                            {/* Cases: {country.cases}, Deaths: {country.deaths}, Recovered: {country.recovered} */}
                            {filters.showCases && <p>Cases: {country.cases}</p>}
                            {filters.showDeaths && <p>Deaths: {country.deaths}</p>}
                            {filters.showRecovered && <p>Recovered: {country.recovered}</p>}

                        </p>
                    </li>
                ))}
            </ul>
            <nav>
                <ul className="pagination">
                    {pages.map((page) => (
                        <li
                            key={page}
                            className={`page - item${currentPage === page ? ' active' : ''}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div >
    );
};

export default Country;
