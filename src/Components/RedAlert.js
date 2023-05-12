import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../Pages/fbConfig';
import { Button } from 'react-bootstrap';

const RedAlert = () => {
    const [crisisCountries, setCrisisCountries] = useState([]);
    const [timePeriod, setTimePeriod] = useState('all');
    const [currentDateTime, setCurrentDateTime] = useState(new Date());


    // ***********************Time Period****************************
    useEffect(() => {
        const fetchCrisisCountries = async () => {
            let q;
            if (timePeriod === 'all') {
                q = query(collection(db, 'crisis_countries'));
            } else {
                const cutoffTimestamp = Date.now() - (timePeriod * 24 * 60 * 60 * 1000);
                q = query(collection(db, 'crisis_countries'), where('timestamp', '>=', cutoffTimestamp));
            }
            const querySnapshot = await getDocs(q);

            const data = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setCrisisCountries(data);
        };
        fetchCrisisCountries();
    }, [timePeriod]);

    //    ******************CurrentDatetime *****************
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const handleDelete = async (id) => {
        console.log("Deleting country with ID:", id);
        try {
            await deleteDoc(doc(db, 'crisis_countries', id));
            setCrisisCountries(prevState => prevState.filter(country => country.id !== id));
            console.log("Country with ID", id, "deleted successfully.");
        } catch (error) {
            console.log("Error deleting country:", error);
        }
    };


    const handleTimePeriodChange = (event) => {
        setTimePeriod(event.target.value);
    };

    return (
        <div>
            <div>
                <h3>Show countries</h3>
                <p>Current date and time: {currentDateTime.toLocaleString()}</p>
                <hr />
                <select id="time-period-select" value={timePeriod} onChange={handleTimePeriodChange}>
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="7">7 days</option>
                    <option value="14">14 days</option>
                    <option value="30">30 days</option>
                </select>

            </div>
            <div className="cardsContainer">
                {crisisCountries.map((country, index) => (
                    <div className="card" key={index}>
                        <h3>COVID-19 Emergency in:</h3>
                        <h3>{country.country}</h3>
                        <Button onClick={() => handleDelete(country.id)}>Delete</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RedAlert;
