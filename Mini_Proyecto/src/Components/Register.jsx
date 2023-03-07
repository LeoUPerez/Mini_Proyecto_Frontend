import axios from 'axios';
import React, { useState } from 'react'
import Img from '../Images/RealSinName.png'
import  { Toaster, toast } from 'react-hot-toast';

const Register = () => {

  const [body, setbody] = useState({username: "", last_name: "", password: "",
                                    phone: "", mail: ""});

  function onchange() {
    let user = document.getElementById('Name');
    let lastname = document.getElementById('Last_name');
    let password = document.getElementById('Password');
    let phone_user = document.getElementById('Phone_Number');
    let mail_user = document.getElementById('Mail');
    
    setbody(
      {
        username: user.value,
        last_name: lastname.value,
        password: password.value,
        phone: phone_user.value,
        mail: mail_user.value
      }
    )  
    // console.log(body);
  }

  // !Peticion hacia  el backend
  function SendData() {
    if (body.username === "" || body.last_name === "" || body.password === "" ||
        body.phone === "" || body.mail === "" || body.username === "" && body.last_name === "" &&
        body.password === "" && body.phone === "" && body.mail === "") {
          toast.error('You must fill in all fields');
    }else{
      axios.post('http://localhost:3000/api/usuarios/'+'14d5ds', body)
      .then(({data})=>{
        console.log(data);
      }).catch(({err})=>{
        console.log(err);
      })
      toast.success('User saved successfully');
      // *Temporizador para redireccionar
      setTimeout(() => {
        location.href='/login'; 
      }, 1000 * 3);//! 1000 * 3 es igual a 3 segundos
      // *Temporizador para redireccionar
    }
  }
  // !Peticion hacia el backend



  // !Funcion para vizualizar contraseña
  function VizualizarPass() {
    let password = document.getElementById('Password');
    let icon = document.getElementById('icon');

    if (password.type === "text") {
      password.type = "password";
      icon.className = 'fa-regular fa-eye-slash cursor-pointer';
    } else {
      password.type = "text";
      icon.className = 'fa-solid fa-eye cursor-pointer';
    }
  }
  // !Funcion para vizualizar contraseña

  return (
    <section className='w-full h-screen bg-blue-200 flex justify-center items-center'>
         <Toaster toastOptions={{duration:1700}} position='top-right'/>
        <div className='min-w-[26%] min-h-[60%] bg-gray-200 opacity-80  rounded-2xl p-2 max-md:min-w-[95%] max-md:min-h-[65%]'>
            <div className='w-full flex justify-center'>
              <img className='h-28 max-md:h-20' src={Img} alt="" />
            </div>
            <form id='formulario' action="" className='flex flex-col gap-3 h-1/2s pt-6 justify-center items-center'>
                <input onChange={onchange} autoComplete='off' type="text" name="" id="Name" placeholder='Name' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5' />
                <input onChange={onchange} autoComplete='off' type="text" name="" id="Last_name" placeholder='Last name' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
                <div className='w-full ml-5 flex items-center justify-center gap-1'>
                  <input onChange={onchange} autoComplete='off' type="password" name="" id="Password" placeholder='Password' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
                  <div className=''>
                    <i onClick={VizualizarPass} id='icon' className="fa-regular fa-eye-slash cursor-pointer"></i>
                  </div>
                </div>
                <input onChange={onchange} autoComplete='off' type="tel" name="" id="Phone_Number" placeholder='Phone Number' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
                <input onChange={onchange} autoComplete='off' type="email" name="" id="Mail" placeholder='Mail' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
            </form>
            <div className='w-full flex justify-center pt-5'>
              <button onClick={SendData} className='w-44 uppercase border-2 bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-200 hover:bg-green-300 hover:text-black max-md:w-44'>
                  Create Account
              </button>
            </div>
            
        </div>
    </section>
  )
}

export default Register;