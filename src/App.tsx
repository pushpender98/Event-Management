import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Event/Landing Page/LandingPage';
import CreateEvent from './Event/Create New Event/CreateEvent';
import EventPage from './Event/Event Page/EventPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/create' element={<CreateEvent />} />
          <Route path='/event' element={<EventPage />} />
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
