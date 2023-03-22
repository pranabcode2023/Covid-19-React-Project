import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Error404 from './Pages/Error404'
import Navbar from './Components/Navbar'
import Countries from './Components/Countries'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/about' element={<About />} />
        <Route path='/countries' element={<Countries />} />

      </Routes>
    </>
  );
}

export default App;
