import React from 'react'

function Signin() {
    const[data, setDate]=useState({
        mail:'',
        password:'',
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
                <p>Enter your credentials to access your account</p>
            </div>
            <div className='form container'>
                <input 
                    type='mail'
                    placeholder='User ID'
                    name="mail"
                    value={data.mail}
                    required 
                    onChange={handleChange}
                /> 
                <input 
                    type='password'
                    placeholder='Password'
                    name="password"
                    value={data.password}
                    required 
                    onChange={handleChange}
                /> 
                
            </div>
        </div>
        <div className='signup'>
                <button type='submit' > Sign In</button>        
                <button type='submit' > Sign Up</button>
        
        </div>
        </form>
        <p>Don't have account?<Link to='/Signup'>SignUp</Link> </p>
    </div>
  )
}

export default Signin