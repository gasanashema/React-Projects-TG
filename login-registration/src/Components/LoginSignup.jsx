import React, { memo, useState } from 'react'
import '../index.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignup = () => {

    const [action,setAction] = useState('Sign Up')


  return (
   <>
    <div className="min-h-screen bg-gradient-to-r from-[#2a00b7] to-[#42006c] flex items-center justify-center">
        <div className='flex flex-col items-center justify-center bg-white pb-7 w-[600px]'>
            <div className="flex flex-col items-center mt-7 gap-2 w-full ">
                <div className="text-[#3c009d] text-3xl font-bold">{action}</div>
                <div className="w-16 h-1 bg-[#3c009d] rounded-lg"></div>
            </div>
            <div className="mt-14 flex flex-col gap-6">
                {action=='Login'?<div></div>:(<div className="flex items-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded-md">
                    <img src={user_icon} alt="" className='my-0 mx-7'/>
                    <input type="text" placeholder='Name' className='h-12 w-[400px] bg-transparent border-none outline-none color-[#797979] text-xl'/>
                </div>)}
                
                <div className="flex items-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded-md">
                    <img src={email_icon} alt="" className='my-0 mx-7'/>
                    <input type="email" placeholder='Email' className='h-12 w-[400px] bg-transparent border-none outline-none color-[#797979] text-xl'/>
                </div>
                <div className="flex items-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded-md">
                    <img src={password_icon} alt="" className='my-0 mx-7'/>
                    <input type="password" placeholder='Password' className='h-12 w-[400px] bg-transparent border-none outline-none color-[#797979] text-xl'/>
                </div>
            </div>
            {action == 'Sign Up'?<div></div>:(<div className="mt-27 text-[#797979] text-xl">Lost Password? <span className='text-[#3c009d] cursor-pointer'>Click Here</span></div>)}
            
            <div className="flex gap-7 my-12 mx-auto">
                <div className={`flex justify-center items-center w-[220px] h-[59px] color-white rounded-[50px] text-lg font-bold cursor-pointer ${action == 'Login'?'text-[#676767] bg-[#eaeaea]':'bg-[#3c009d] text-white'}`} onClick={()=>setAction('Sign Up')}>Sign Up</div>
                <div className={`flex justify-center items-center w-[220px] h-[59px] color-white rounded-[50px] text-lg font-bold cursor-pointer ${action == 'Sign Up'?'text-[#676767] bg-[#eaeaea]':'bg-[#3c009d] text-white'}`} onClick={()=>setAction('Login')}>Login</div>
            </div>
        </div>
    </div>
   </>
  )
}

export default memo(LoginSignup);