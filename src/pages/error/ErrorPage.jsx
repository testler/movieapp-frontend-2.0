import React from 'react';
import { useEffect } from 'react';
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    useEffect(() => {
        const error = useRouteError();
        console.error(error);
    },[])
    return (
        <div>
            <h1>404 Error</h1>
            <h4>Hello? Who are you?! How in the world did you get here? Something is not right...</h4>
            <button><Link to="/home">take me home!</Link></button>
        </div>
    )
}

export default ErrorPage