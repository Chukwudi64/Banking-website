import React from "react";
import Navbar from './Navbar';
import {useState} from 'react'
import axios from 'axios'

function Signup() {
    const initialState=Object.freeze({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        accountnumber:""
        
    })

    const [formData, setFormData] = useState(initialState)
    console.log(formData);

    const HandleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        try{
            axios.post('http://127.0.0.1:8000/api/signup/', formData).then(res => {
                console.log(res.data);
            }) 
            window.location.href = '/Login'
        }catch(err){
                console.log(err);
            }
        }
    
  return (
    <>
         <Navbar/>
        <div className='wrapper'>
        
            <div className="form-wrapper">
                <h1>
                    Create Account
                </h1>
                <form onSubmit={HandleSubmit} noValidate>
                    <div className="firstname">
                        <label htmlFor="firstname">First Name</label>
                        <input className='#' placeholder='First Name' type="text" name='firstname' value={formData.firstname} noValidate onChange={HandleChange} />
                    </div>

                    <div className="lastname">
                        <label htmlFor="lastname">Last Name</label>
                        <input className='#' placeholder='Last Name' type="text" name='lastname' value={formData.lastname} noValidate onChange={HandleChange} />
                    </div>

                    <div className="email">
                        <label htmlFor="Email">Email</label>
                        <input className='#' placeholder='Email' type="email" name='email' value={formData.email} noValidate onChange={HandleChange} />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input className='#' placeholder='password' type="password" name='password' value={formData.password} noValidate onChange={HandleChange} />
                    </div>

                    <div className="accountnumber">
                        <label htmlFor="accountnumber">Account Number</label>
                        <input className='#' placeholder='phone number' type="number" name='accountnumber' value={formData.accountnumber} noValidate onChange={HandleChange} />
                    </div>

                    <div className="createAccount">
                        <button type='submit'>
                            create Account
                        </button>
                        <a href="Signin">Already Have an Account?</a>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
}

export default Signup;