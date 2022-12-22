import React from 'react';
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div id="LandingPage">
        <h1>The Movie App</h1>
        <h4>The website design to help you find shows and movie you want to watch</h4>
        <div>
            <button className='left'>CREATE AN ACCOUNT/ LOGIN</button>
            <button className='right'>CONTINUE AS GUEST</button>
        </div>
    </div>
  )
}

export default LandingPage