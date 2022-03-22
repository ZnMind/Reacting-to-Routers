import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Locations from './pages/Locations';
import FilmDetails from './pages/FilmDetails';
import PeopleDetails from './pages/PeopleDetails';
import LocationDetails from './pages/LocationDetails';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path="/people" element={<People />} />
                <Route path="/films/:filmid" element={<FilmDetails />} />
                <Route path="/people/:peopleid" element={<PeopleDetails />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/locations/:locationsid" element={<LocationDetails />} />
                <Route path="*" element={<h1>404 Not Frowned :(</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;