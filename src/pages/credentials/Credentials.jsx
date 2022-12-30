import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Credentials.css"

const Credentials = () => {
    const [showPassword, setShowPassword] = useState(true);
    const emailInput = useRef();
    const passwordInput = useRef();
    const [showLogin, setShowLogin] = useState(true);
    const [fullExitButon, setFullExitButton] = useState(false);

    function handleLoginSubmit(e) {
        e.preventDefault();
    }
    function handleSignUpSubmit(e) {
        e.preventDefault();
    }
    function handleToLogin(e){
        e.preventDefault();
        setShowLogin(true);
    }
    function handleToSignUp(e){
        e.preventDefault();
        setShowLogin(false);
    }
    function onExitHover(){
        setFullExitButton(true);
    }
    function offExitHover(){
        setFullExitButton(false);
    }
    const login = (
        <form onSubmit={handleLoginSubmit}>
            <p>
                $ whoami <Link id="exit-button" to="/landingPage" onMouseEnter={onExitHover} onMouseLeave={offExitHover}>{fullExitButon? "Exit to LandingPage" : "X"}</Link> <br />
                flynn <br />
                $ uname -a <br />
                SolarOS 4.0.1 Generic_50203-02 sun4m i386 <br />
                Unknown.Unknown <br />
                <label htmlFor="email">$ login email: <input className='email' type='text' name="email" ref={emailInput} autoFocus={true}></input></label>
            </p>
            <p className={showPassword ? "active" : "inactive"}>
                <label htmlFor="password">$ password: <input className='password' type='password' name="password" ref={passwordInput}></input></label>
            </p>
            <div className="button-box">
                <button className="credbtn" onClick={handleToSignUp}>Sign Up</button>
                <input className='credbtn' type="submit" value="Enter" />
            </div>
        </form>
    );
    const signup = (
        <form onSubmit={handleSignUpSubmit}>
            <p>
                $ whoami <Link id="exit-button" to="-1" onMouseEnter={onExitHover} onMouseLeave={offExitHover} >{fullExitButon? "Exit to LandingPage" : "X"}</Link><br />
                <label htmlFor="first name"></label><input autoFocus={true} type="text" name="first name" id="signup-name" className='termial-inputs' placeholder='Type your new username here' /> <br />
                $ Type email <br />
                <label htmlFor="email"></label><input type="email" name="email" id="signup-email" className='termial-inputs' placeholder='Email here' /> <br />
                Type password: <br />
                <label htmlFor="password">$ password: <input className='termial-inputs' type='password' name="password" placeholder="password here" ref={passwordInput}></input></label> <br />
                Confirm password: <br />
                <label htmlFor="password">$ password: <input className='termial-inputs' type='password' name="password" placeholder="password again here" ref={passwordInput}></input></label> <br />
            </p>
            <div className="button-box" id='submit-button-box'>
                <input className='credbtn' type="submit" value="Create profile" />
                <button className="credbtn" onClick={handleToLogin}>back to Login</button>
            </div>
        </form>
    );
    return (
        <div id='credentials'>
            <div className='outer-window'>
                <div className='inner-window'>
                    <div className='encom-linux-console'></div>
                    <div className='presentation-data'></div>
                    <div className='termial'>
                        {showLogin ? login : signup}
                    </div>
                    <div className='keyboard'></div>
                    <div className='logos'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credentials