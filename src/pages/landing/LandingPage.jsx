import React, { StrictMode } from 'react';
import { useEffect } from 'react';
import "./LandingPage.css";
import MatrixRain from '../../components/MatrixRain/MatrixRain';
import { useState } from 'react';
import { FullscreenMatrixRain } from '../../components/FullscreenMatrixRain/FullscreenMatrixRain';

const LandingPage = () => {
  // function transition(){
  //   document.getElementById("LandingPage").style.display = none;
  //   let ele = document.createElement(FullscreenMatrixRain);
  //   document.getElementById("app").append(ele);

  // }
  return (
    <div id="LandingPage">
      <MatrixRain postion={-1}/>
      <div>
        <h1>The Movie App</h1>
        <h4>The website design to help you find shows and movie you want to watch</h4>
        <div>
          <button className='left'><Link to="home">CREATE AN ACCOUNT/ LOGIN</Link></button>
          <button className='right'><Link to="home">CONTINUE AS GUEST</Link></button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage