import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validate from './Validate'
import './Register.css'
const Register = () => {
    const [values,setvalues]=useState({
        name:"",
        email:"",
        password:"",
        confpassword:"",
    })

    const [error,seterror]=useState({});
    const handleSubmit=(e)=>{
        e.preventDefault();
        seterror(Validate(values))
        values.name=""
        values.email=""
        values.password=""
        values.confpassword=""

    }
    const handleOnchange=(e)=>{
        setvalues({...values,[e.target.name]:e.target.value})
    }
  return (
    <section className='register-page py-5'>
     <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='register-form'>
                    <form className='register-form-content' onSubmit={handleSubmit}>

                        <div className='d-flex flex-column'>
                            <label>Name</label>
                            <input placeholder='Name' name="name" value={values.name} onChange={handleOnchange}></input>
                            {error.name && <p className="mb-0 mt-1"style={{color:"red"}}>{error.name}</p>}
                        </div>
                        
                        <div className='d-flex flex-column'>
                            <label>Email</label>
                            <input placeholder='Email' name="email" value={values.email} onChange={handleOnchange}></input>
                            {error.email && <p className="mb-0 mt-1" style={{color:'red'}}>{error.email}</p>}                     
                        </div>
                       
                        <div  className='d-flex flex-column'>
                            <label>password</label>
                            <input placeholder='Password' type="password"name="password" value={values.password} onChange={handleOnchange}></input>
                            {error.password && <p className='mb-0 mt-1' style={{color:"red"}}>{error.password}</p>}
                        </div>
                     
                        <div className='d-flex flex-column'>
                            <label>confirm password</label>
                            <input placeholder='confirm password' type="password"name="confpassword" value={values.confpassword} onChange={handleOnchange}></input>
                            {error.confpassword && <p className='mb-0 mt-1' style={{color:"red"}}>{error.confpassword}</p>}
                        </div>
                        
                        <div className=''>
                        <button className='btn btn-primary' type='submit'>Register</button>
                        </div>
                       
                        <Link to="/login" className='redirect-login'>Already have an account? Login</Link>
                    </form>
                </div>
            </div>
        </div>
     </div>
     </section>
  )
}

export default Register
