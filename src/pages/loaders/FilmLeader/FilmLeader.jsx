import React from 'react';
import "./FilmLeader.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FilmLeader = () => {
    
    const navigate = useNavigate();
    const [counter, setCounter] = useState(3);

    useEffect(startCountDown, [counter]);
    function nextPage() 
    {
        navigate("/landingPage");
    }
    function startCountDown() {
        setInterval(() => {
            setCounter(counter - 1);
        }, 1000);

    }
    return (
        <div className="loader">
            <div className="screen"></div>
            <div className="lines"></div>
            <div className="number">{counter > 0 ? counter : nextPage()}</div>
        </div>
    )
}

export default FilmLeader