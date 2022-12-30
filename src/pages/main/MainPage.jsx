import React from 'react';
import "./MainPage.css";

const MainPage = () => {
  const [netflixActive, setNetflixActive] = useState(true);
  const [primeActive, setPrimeActive] = useState(true);
  const [disneyActive, setDisneyActive] = useState(true);
  const [hbomaxActive, setHbomaxActive] = useState(true);
  const [huluActive, setHuluActive] = useState(true);
  const [peacockActive, setPeacockActive] = useState(true);
  const [paramountActive, setParamountActive] = useState(true);
  const [starzActive, setStarzActive] = useState(true);
  const [showtimeActive, setShowtimeActive] = useState(true);
  const [appletvActive, setAppletvActive] = useState(true);
  return (
    <div id="main-page">
      <div id="selection-grid">
        <div onClick={()=>{setNetflixActive(!netflixActive)}} className={netflixActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/netflix.jpg' /><h5>Netflix</h5></div>
        <div onClick={()=>{setPrimeActive(!primeActive)}} className={primeActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/amazon-prime.webp' /><h5>Prime Video</h5></div>
        <div onClick={()=>{setDisneyActive(!disneyActive)}} className={disneyActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/disney.png' /><h5>Disney+</h5></div>
        <div onClick={()=>{setHbomaxActive(!hbomaxActive)}} className={hbomaxActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/hbomax.jpg' /><h5>HBO Max</h5></div>
        <div onClick={()=>{setHuluActive(!huluActive)}} className={huluActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/hulu.jpg' /><h5>Hulu</h5></div>
        <div onClick={()=>{setPeacockActive(!peacockActive)}} className={peacockActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/peacock.jpeg' /><h5>Peacock</h5></div>
        <div onClick={()=>{setParamountActive(!paramountActive)}} className={paramountActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/paramountplus.webp' /><h5>Paramount+</h5></div>
        <div onClick={()=>{setStarzActive(!starzActive)}} className={starzActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/starz.webp' /><h5>Starz</h5></div>
        <div onClick={()=>{setShowtimeActive(!showtimeActive)}} className={showtimeActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/showtime.jpeg' /><h5>Showtime</h5></div>
        <div onClick={()=>{setAppletvActive(!appletvActive)}} className={appletvActive ? ".active-thumnail" : ".inactive-thumbnail"}><img src='./assets/appletv.webp' /><h5>Apple TV+</h5></div>
      </div>
    </div>
  )
}

export default MainPage