import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup, login } from '../../config/firebase'

const Login = () => {

    const [currState, setCurrState] = useState('Sign up');
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState === "Sign up") {
            signup(userName, email, password)
        } else {
            login(email, password)
        }
    }

    return (
        <div className='login'>
            <img src={assets.logo_big} alt="" className="logo" />
            <form onSubmit={onSubmitHandler} className="login-form">
                <h2>{currState}</h2>
                {currState === 'Sign up' ? <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='username' className="form-input" required /> : null}
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email address' className="form-input" required />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='password' className="form-input" required />
                <button type='submit'>{currState === 'Sign up' ? 'Create account' : 'Login now'}</button>
                <div className="login-term">
                    <input type="checkbox" />
                    <p>Agree to the terms of use and privacy policy.</p>
                </div>
                <div className="login-forgot">
                    {
                        currState === 'Sign up'
                            ? <p className="login-toggle">Already have an account <span onClick={() => setCurrState("Login")}>click here</span></p>
                            : <p className="login-toggle">Create an account <span onClick={() => setCurrState("Sign up")}>click here</span></p>
                    }


                </div>
            </form>
        </div>
    )
}

export default Login