import React from 'react'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Signup.css'

function Signup() {
    const[data, setDate]=useState({
        mail:'',
        password:'',
        confirmpassword:''
    });
    const handleChange=({currentTarget:input})=>{
        setDate({...data,[input.mail]:input.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='sign-up-form'>
            <div className=' signup-container'>
                <h1>Logo</h1>
                <p>Create New Account</p>
            </div>
            <div className='form container'>
                <input 
                    className='mail'
                    type='mail'
                    placeholder='Mail ID'
                    name="mail"
                    value={data.mail}
                    required 
                    onChange={handleChange}
                /> <br></br>
                <input 
                    className='pass'
                    type='password'
                    placeholder='Password'
                    name="password"
                    value={data.password}
                    required 
                    onChange={handleChange}
                /> <br></br>
                <input 
                    className='password'
                    type='password'
                    placeholder='Confirm Password'
                    name="confirmpassword"
                    value={data.confirmpassword}
                    required 
                    onChange={handleChange}
                /> <br></br>
            </div>
        </div>
        <div className='signup'>
            
                <button type='submit' className='btn' > Sign Up</button>
        
        </div>
        </form>
    </div>
  )
}

export default Signup