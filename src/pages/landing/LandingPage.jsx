import React, { StrictMode } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";
import MatrixRain from '../../components/MatrixRain/MatrixRain';
import { FullscreenMatrixRain } from '../loaders/FullscreenMatrixRain/FullscreenMatrixRain';

const LandingPage = () => {
  const [matrixDrop, setMatrixDrop] = useState(<div />);
  useEffect(()=>{
  setInterval(()=>{
    setMatrixDrop(<MatrixRain />);
  },5000)
  setInterval(() => 
  {
    setMatrixDrop(<div />);
  }, 10000);}, []);
  return (
    <div id="LandingPage">
      {matrixDrop}
      <div>
        <h1>The Movie App</h1>
        <h4>The website design to help you find shows and movie you want to watch</h4>
        <div className='button-selection'>
          <Link to="/credentials"><button className='left'>CREATE AN ACCOUNT/ LOGIN</button></Link>
          <Link to="/homeLoader"><button className='right'>CONTINUE AS GUEST</button></Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage