import React from 'react'
import "./FullscreenMatrixRain.css"
import { useState, useEffect } from 'react';
import MatrixRain from '../MatrixRain/MatrixRain';

export const FullscreenMatrixRain = () => {
    const [rain, setRain] = useState([]);
    useEffect(fullScreenRain,[])
    function fullScreenRain(){
      {
        let arr = [];
        for(let i = 0; i < 100 ;i++){
          arr.push(i);
        };
        setRain(rain.concat(arr));
        }
    }
    return (
        <div id="rain-test">
            {rain.map((num) => {
                return <MatrixRain position={num} key={num} />
            })}
        </div>
    )
}
