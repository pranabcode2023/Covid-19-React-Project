import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../fbConfig';

const Covid19Cases = () => {
    const [cases, setCases] = useState([]);
    const currentDate = new Date().toLocaleDateString();

    useEffect(() => {
        const fetchCases = async () => {
            const casesCollection = collection(db, 'cases');
            const casesSnapshot = await getDocs(casesCollection);
            const casesData = casesSnapshot.docs.map(doc => doc.data());
            setCases(casesData);
        };
        fetchCases();
    }, []);

    return (

        <div className="container">
            <h1>Covid_19Cases</h1>
            {cases.map((patient, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{patient.name}</h5>
                        <p className="card-text">Age: {patient.age}</p>
                        <p className="card-text">Gender: {patient.gender}</p>
                        <p className="card-text">Nationality: {patient.nationality}</p>
                        <p className="card-text">Existing Health Conditions: {patient.conditions}</p>
                        <p className="card-text">Medications: {patient.medications}</p>
                        <p className="card-text">Vaccination Status: {patient.vaccinated}</p>
                        <p className="card-text">Recent Travel: {patient.travel}</p>
                        <p className="card-text current-date">Date: {currentDate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Covid19Cases;