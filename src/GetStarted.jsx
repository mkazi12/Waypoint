import React from 'react';
import Navbar from './NavBar';
const GetStarted = () => {
    return (
        <>
        <Navbar/>
        <div style={pageStyle}>
            <h1>Get Started</h1>
            <p>This is the get started page.</p>
        </div>
        </>
    );
};

const pageStyle = {
    padding: "20px",
    minHeight: "200vh",
    backgroundColor: "#DADED4",
    color: "#39603D",
  };

export default GetStarted; 