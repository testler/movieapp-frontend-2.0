import React, { StrictMode } from 'react';
import { useEffect } from 'react';
import "./LandingPage.css";
import MatrixRain from '../components/MatrixRain/MatrixRain';
import { useState } from 'react';
import { FullscreenMatrixRain } from '../components/FullscreenMatrixRain/FullscreenMatrixRain';

const LandingPage = () => {
  return (
    // <div id="LandingPage">
    //   <MatrixRain postion={-1}/>
    //   <div>
    //     <h1>The Movie App</h1>
    //     <h4>The website design to help you find shows and movie you want to watch</h4>
    //     <div>
    //       <button className='left'>CREATE AN ACCOUNT/ LOGIN</button>
    //       <button className='right'>CONTINUE AS GUEST</button>
    //     </div>
    //   </div>
    // </div>
    <FullscreenMatrixRain></FullscreenMatrixRain>
  )
}

export default LandingPage