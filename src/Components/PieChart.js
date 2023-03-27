import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';


const PieChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const totalCases = data?.cases;
  const totalDeaths = data?.deaths;
  const totalRecovered = data?.recovered;

  const percentages = {
    cases: ((totalCases / (totalCases + totalDeaths + totalRecovered)) * 100).toFixed(2),
    deaths: ((totalDeaths / (totalCases + totalDeaths + totalRecovered)) * 100).toFixed(2),
    recovered: ((totalRecovered / (totalCases + totalDeaths + totalRecovered)) * 100).toFixed(2)
  };

  const chartData = {
    labels: ['Cases', 'Deaths', 'Recovered'],
    datasets: [{
      data: [percentages.cases, percentages.deaths, percentages.recovered],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  return (
    <div className="PieChart-container"> {/* add a class name to the container div */}
      <h1 className="PieChart-title">Covid-19 Worldwide Pie Chart </h1> {/* add a class name to the title */}
      <Doughnut data={chartData} />
    </div>
  );
};

export default PieChart;

