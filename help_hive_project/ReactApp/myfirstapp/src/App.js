import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Marquee from './components/Marquee';
import MainContent from './components/Maincontent';
import SignIn from './components/Signin';
import Registration from './components/Registration';
import Donation_Details from './components/Donation_Details';
import ProdDesc from './components/ProdDesc';
import After_Post from './components/After_Post';

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/about-us" element={<div><Header /><Marquee />About Us Page</div>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/donation_details" element={<Donation_Details />} />
          <Route path="/After_Post" element={<After_Post />} />
          <Route path="/ProdDesc" element={<ProdDesc />} />
          <Route
            path="/*"
            element={
              <div>
                <Marquee />
                <MainContent />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

