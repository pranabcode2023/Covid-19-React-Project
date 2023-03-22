// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Countries = () => {
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//         fetch('https://disease.sh/v3/covid-19/countries')
//             .then((response) => response.json())
//             .then((data) => setCountries(data));
//         console.log(countries)
//     }, []);

//     return (
//         <div>
//             <h1>Countries</h1>
//             <ul>
//                 {countries.map((country) => (
//                     <li key={country.country}>
//                         <Link to={`/countries/${country.country}`}>{country.country}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Countries;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Countries = () => {
//     const [countries, setCountries] = useState([]);
//     console.log(countries);

//     useEffect(() => {
//         fetch('https://disease.sh/v3/covid-19/countries')
//             .then((response) => response.json())
//             .then((data) => setCountries(data));

//     }, []);

//     return (
//         <div>
//             <h1>Countries</h1>
//             <div className="cardsContainer">
//                 {countries.map((country) => (
//                     <div key={country.countryInfo.iso3} className="flip-card">
//                         <div className="flip-card-inner">
//                             <div className="flip-card-front">
//                                 <img src={country.countryInfo.flag} alt={`${country.country} flag`} className="image-fluid" />

//                             </div>
//                             <div className="flip-card-back">
//                                 <div className="fs-4 fw-bold mb-4">{country.country}</div>
//                                 <div className="fs-6 fw-bold mb-6">Population:{country.population}</div>
//                                 <Link to={`/countries/${country.country}`} className="btn btn-primary">More</Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Countries;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const perPage = 20;

    useEffect(() => {
        try {
            fetch('https://disease.sh/v3/covid-19/countries')
                .then((response) => response.json())
                .then((data) => setCountries(data));
        } catch (error) {
            console.log("Something went wrong with your request:", error);
        }
    }, []);

    useEffect(() => {
        const filtered = countries.filter((country) => {
            return country.country.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredCountries(filtered);
    }, [countries, query]);




    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageCount = Math.ceil(filteredCountries.length / perPage);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentCountries = filteredCountries.slice(startIndex, endIndex);

    return (
        <div>
            <h1>Countries</h1>
            <Form >
                <FormControl
                    type="text"
                    placeholder="Search by country name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant="primary" onClick={() => setQuery('')}>Search</Button>
            </Form>

            <div className="cardsContainer">
                {currentCountries.map((country) => (
                    <div key={country.countryInfo.iso3} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={country.countryInfo.flag} alt={`${country.country} flag`} className="image-fluid" />
                            </div>
                            <div className="flip-card-back">
                                <div className="fs-4 fw-bold mb-4">{country.country}</div>
                                <div className="fs-6 fw-bold mb-6">Population: {country.population}</div>
                                <div className="fs-6 fw-bold mb-6">Total Cases: {country.cases}</div>
                                <div className="fs-6 fw-bold mb-6">Total Deaths: {country.deaths}</div>
                                <div className="fs-6 fw-bold mb-6">Total Recovered: {country.recovered}</div>
                                <Link to={`/country/${country.countryInfo.iso3}`} className="btn btn-primary">More Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {pages.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={currentPage === pageNumber ? "active" : ""}>
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default Countries;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, FormControl, Button, FormCheck } from 'react-bootstrap';

// const Countries = () => {
//     const [countries, setCountries] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [query, setQuery] = useState('');
//     const [filteredCountries, setFilteredCountries] = useState([]);
//     const [filters, setFilters] = useState({
//         showAll: true,
//         showCases: false,
//         showDeaths: false,
//         showRecovered: false
//     });
//     const perPage = 20;

//     useEffect(() => {
//         fetch('https://disease.sh/v3/covid-19/countries')
//             .then((response) => response.json())
//             .then((data) => setCountries(data));
//     }, []);

//     useEffect(() => {
//         const filtered = countries.filter((country) => {
//             if (filters.showAll) {
//                 return true;
//             }
//             if (filters.showCases && country.cases > 0) {
//                 return true;
//             }
//             if (filters.showDeaths && country.deaths > 0) {
//                 return true;
//             }
//             if (filters.showRecovered && country.recovered > 0) {
//                 return true;
//             }
//             return false;
//         }).filter((country) => {
//             return country.country.toLowerCase().includes(query.toLowerCase());
//         });
//         setFilteredCountries(filtered);
//     }, [countries, filters, query]);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//         const filtered = countries.filter((country) => {
//             if (filters.showAll) {
//                 return true;
//             }
//             if (filters.showCases && country.cases > 0) {
//                 return true;
//             }
//             if (filters.showDeaths && country.deaths > 0) {
//                 return true;
//             }
//             if (filters.showRecovered && country.recovered > 0) {
//                 return true;
//             }
//             return false;
//         }).filter((country) => {
//             return country.country.toLowerCase().includes(query.toLowerCase());
//         });
//         setFilteredCountries(filtered);
//     };

//     const pageCount = Math.ceil(filteredCountries.length / perPage);
//     const pages = [];
//     for (let i = 1; i <= pageCount; i++) {
//         pages.push(i);
//     }

//     const startIndex = (currentPage - 1) * perPage;
//     const endIndex = startIndex + perPage;
//     const currentCountries = filteredCountries.slice(startIndex, endIndex);

//     return (
//         <div>
//             <h1>Countries</h1>
//             <Form>
//                 <FormControl
//                     type="text"
//                     placeholder="Search by country name"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <Button variant="primary" onClick={() => setQuery('')}>
//                     Search
//                 </Button>
//             </Form>
//             <Form>
//                 <FormCheck
//                     inline
//                     label="Show All"
//                     type="checkbox"
//                     checked={filters.showAll}
//                     onChange={() =>
//                         setFilters({ ...filters, showAll: !filters.showAll })
//                     }
//                 />
//                 <FormCheck
//                     inline
//                     label="Show Cases"
//                     type="checkbox"
//                     checked={filters.showCases}
//                     onChange={() =>
//                         setFilters({ ...filters, showCases: !filters.showCases })
//                     }
//                 />
//                 <FormCheck
//                     inline
//                     label="Show Deaths"
//                     type="checkbox"
//                     checked={filters.showDeaths}
//                     onChange={() =>
//                         setFilters({ ...filters, showDeaths: !filters.showDeaths })
//                     }
//                 />
//                 <FormCheck
//                     inline
//                     label="Show Recovered"
//                     type="checkbox"
//                     checked={filters.showRecovered}
//                     onChange={() =>
//                         setFilters({ ...filters, showRecovered: !filters.showRecovered })
//                     }
//                 />

//             </Form>
//             <ul>
//                 {currentCountries.map((country) => (
//                     <li key={country.countryInfo._id}>
//                         <Link to={`/countries/${country.country}`}>{country.country}</Link>{' '}
//                         - Cases: {country.cases}, Deaths: {country.deaths}, Recovered:{' '}
//                         {country.recovered}
//                     </li>
//                 ))}
//             </ul>
//             <div>
//                 {pages.map((page) => (
//                     <Button
//                         key={page}
//                         variant={page === currentPage ? 'primary' : 'light'}
//                         onClick={() => handlePageChange(page)}
//                     >
//                         {page}
//                     </Button>
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default Countries;