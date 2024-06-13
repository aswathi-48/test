import React, { useState } from 'react'
import './Register.css'
import { registervalues } from './Apicall/Apicall'

const Register = () => {

 const [Name,setName]= useState('')
 const [Email,setEmail] = useState('')
 const [Password,setPassword] = useState('')


//  let formdata = new FormData()
//  formdata.append('Name',Name)
//  formdata.append("Email",Email)
//  formdata.append('Password',Password)

 const display = (e) =>{
    e.preventDefault();
      // registerValue({Name,Email,Password})

    //   console.log("form dtaaaaaa",formdata);
      registervalues({Name,Email,Password})
  }


  return (
    <div className='main-register-container'>
        <form action="" onSubmit={display}>
        <div className='main-register'>
            <div className='Main-head'> 
                <h2>Register</h2>
            </div>
            <div className='register__body'>
                <div>
                <div className='register__inputs'>
                <input type="text" name="" id="" placeholder='name' value={Name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className='register__inputs'>
                    <input type="email" placeholder='email' value={Email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='register__inputs'>
                    <input type="Password" placeholder='password' value={Password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                </div>
                <button type='submit'>Register</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Register