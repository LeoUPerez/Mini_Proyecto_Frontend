import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { Toaster, toast } from 'react-hot-toast';
// import LoginImg from '../Images/Login.avif' //!Imagen para login

const Log_in = () => {

  const [body, setbody] = useState({username: "", password: ""});

  function onchange() {
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');
    
    setbody(
      {
        username: user.value,
        password: pass.value
      }
    )  
  }

  const Verify_account = async () => {

    if (body.username === "" && body.password === "" || body.username === "" || body.password === "") {
      toast.error('You must fill in all fields');
    }else{
      axios.post('http://localhost:3000/api/usuarios', body)
      .then(({data})=>{
        if (data.message !== 'user not found' ) {
          location.href='/';
          sessionStorage.setItem('User', body.username) 
        }else{
          toast.error('Incorrect user or password');
        }
      }).catch(({err})=>{
          console.log(err);
      })

    }

  }

  return (
    <section className='w-full h-screen bg-blue-200 flex justify-center items-center'>
      <Toaster toastOptions={{duration:1700}} position='top-right'/>
        <div className='min-w-[28%] h-2/5 bg-gray-200 opacity-80  rounded-2xl p-2 max-md:min-w-[95%]'>
            <form id='formulario' action="" className='h-full w-full'>
                <div className='w-full flex justify-end items-center gap-3'>
                  <strong className='text-black'>Login</strong>
                  <Link className='w-32 p-0.5 flex justify-center items-center border-2 border-blue-300 text-blue-500 rounded-full' to={'/register'}>
                    <strong>Create Account</strong> 
                  </Link>
                </div>
                <div className='flex flex-col gap-3 h-1/2 justify-center items-center relative'>
                  <input onChange={onchange} id='user' className='w-3/5 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' placeholder='User' type="text" />
                  <input onChange={onchange} id='pass' className='w-3/5 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' placeholder='Password' type="password" />
                  <div className='w-full flex justify-end pr-2 absolute bottom-1'>
                  <Link className=' text-blue-900 max-md:text-xs' to={'/Mailverification'}>
                  Forgot your password?
                  </Link>
                </div>
                </div>
                <div className='w-full flex justify-center pt-5'>
                  <button onClick={(e)=>{ e.preventDefault(); Verify_account()}} className='w-28 uppercase border-2 bg-blue-500 rounded-full p-1 font-thin transition-all duration-300 hover:bg-green-300 hover:text-black text-white max-md:w-20'>
                    <strong>Log in</strong>
                  </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Log_in;