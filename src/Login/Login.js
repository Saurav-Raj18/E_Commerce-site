import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {

  return (
      <>
       <section className='login-wrapper py-5'>
         <div className='container mt-5 mb-5'>
            <div className='row justify-content-center rowch'>
                <div className='col-12'>
                    <div className='auth d-flex justify-content-center'>
                        <form className='form-auth '>
                            <h2 className='text-center'>Login</h2>
                            <div className='d-flex flex-column'>
                              <label htmlFor='email'>Email</label>  
                              <input placeholder='Enter Email' name="email"></input>
                            </div>
                            <div className='d-flex flex-column'>
                              <label htmlFor='password'>password</label>  
                              <input placeholder='Enter password' name="password"></input>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary'>login</button>
                            </div>
                            <Link to="/register" className='btn1'>Didn't have an account? Register here</Link>
                        </form>
                    </div>
                </div>
            </div>
         </div>
       </section>
      </>
  )
}

export default Login