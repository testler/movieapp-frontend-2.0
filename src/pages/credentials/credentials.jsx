import React from 'react'
import { useState } from 'react'
import "./credentials.css"

const credentials = () => {
    const [showPassword, setShowPassword] = useState(true);

    function handleSubmit(){

    }
  return (
    <div id='credentials' className='outer-window'>
        <div className='inner-window'>
            <div className='encom-linux-console'></div>
            <div className='presentation-data'></div>
            <div className='termial'>
                <form action={handleSubmit}>
                <p>
                    $ whoami <br />
                    flynn <br />
                    $ uname -a <br/>
                    SolarOS 4.0.1 Generic_50203-02 sun4m i386 <br />
                    Unknown.Unknown
                    <label htmlFor="email">$ login email: <input type='text'name="email" ref={handleInput}></input></label>
                </p>
                <p className={showPassword ? "active" : "inactive"}>
                    <label htmlFor="password">$ password: <input type='text'name="password" ref={handleInput}></input></label>
                </p>
                </form>
            </div>
            <div className='keyboard'></div>
            <div className='logos'>

            </div>
        </div>
    </div>
  )
}

export default credentials