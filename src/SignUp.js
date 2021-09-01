import React, { useRef, useState } from 'react';
import './SignUp.css'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

function SignUp() {
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://cdn.discordapp.com/attachments/869604147291357278/882379338484441118/163044595391699064.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                
                <form >
                    <h5>E-mail</h5>
                    <input type="email" />

                    <h5>Password</h5>
                    <input type='password' />

                    <h5>Confirm Password</h5>
                    <input type='password' />

                    <h5>Delivery Address</h5>
                    <input type='text' />

                    <button type='submit'
                    className='SignUp__createAccountButton'>Create Account</button>
                </form>
                 
                 </div>
                <Link to="/login">
                <button type='submit'
                    className='login__signInButton'>Sign In?</button>
                </Link>
            </div>
    )
    }

export default SignUp