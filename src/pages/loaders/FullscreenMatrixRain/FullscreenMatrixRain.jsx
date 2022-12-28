import React from 'react'
import "./FullscreenMatrixRain.css"
import { useState, useEffect } from 'react';
import MatrixRain from '../../../components/MatrixRain/MatrixRain';
import { useNavigate } from 'react-router-dom';

export const FullscreenMatrixRain = () => {
    const navigate = useNavigate();
    const [rain, setRain] = useState([]);
    useEffect(fullScreenRain,[])
    function fullScreenRain(){
      {
        let arr = [];
        for(let i = 0; i < 100 ;i+=4){
          arr.push(i);
        };
        setRain(rain.concat(arr));
        }
    }
    setTimeout(()=>{navigate("/home")},5000)
    return (
        <div id="rain-test">
            {rain.map((num) => {
                return <MatrixRain position={num} key={num} />
            })}
        </div>
    )
}
