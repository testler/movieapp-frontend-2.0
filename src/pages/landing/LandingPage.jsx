import React, { StrictMode } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";
import MatrixRain from '../../components/MatrixRain/MatrixRain';
import { useState } from 'react';
import { FullscreenMatrixRain } from '../loaders/FullscreenMatrixRain/FullscreenMatrixRain';

const LandingPage = () => {
  return (
    <div id="LandingPage">
      <MatrixRain/>
      <div>
        <h1>The Movie App</h1>
        <h4>The website design to help you find shows and movie you want to watch</h4>
        <div>
          <Link to="/creditions"><button className='left'>CREATE AN ACCOUNT/ LOGIN</button></Link>
          <Link to="/homeLoader"><button className='right'>CONTINUE AS GUEST</button></Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage