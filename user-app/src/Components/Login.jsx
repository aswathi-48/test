import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginvalues } from './Apicall/Apicall';

const Login = () => {

    const dispatch = useDispatch();
    const [Email,setEmail] =useState('')
    const [Password,setPassword] = useState('')

    const display = () =>{
        console.log({Email,Password});
            try{
                loginvalues({Email,Password},dispatch)
            }catch(err){
                console.log(err);
            }
    }

  return (
    <div className='main_login_container'>
       
        <div className='main_login'>
            <h3>Login</h3>
        </div>
        <div className='login__body'>
            <div>
                <div className='login__inputs'>
                    <input type="text" placeholder='email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='login__inputs'>
                    <input type="text" placeholder='password'value={Password} onChange={(e)=>setPassword(e.target.value)}  />
                </div>
            </div>
            <button onClick={display}>Login</button>
        </div>
      
    </div>
  )
}

export default Login