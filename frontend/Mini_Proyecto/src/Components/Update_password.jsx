import axios from 'axios';
import React, { useState } from 'react'
import  { Toaster, toast } from 'react-hot-toast';

const Update_password = () => {

  const [password, setpassword] = useState({password: ""});

  function onchange() {
    let pass = document.getElementById('password');

    setpassword({
      password: pass.value
    })
    // console.log(password);
  }

  function Updatepass() {
    let passconfirm = document.getElementById('confirmPass');
    if (password.password !== "") {
      if (password.password !== passconfirm.value) {
        toast.error('Passwords must match');
      }else{
        // !Peticion hacia el backend
      }
    } else {
      toast.error('You must fill in all fields');
    }
  }

  return (
    <section className='w-full h-screen bg-blue-200 flex justify-center items-center'>
      <Toaster toastOptions={{duration:1700}} position='top-right'/>
        <form className='min-w-[25%] min-h-[45%] flex flex-col items-center justify-center gap-3 bg-gray-200 rounded-2xl max-md:min-w-[95%] max-md:min-h-[40%]'>
            <p className='text-red-600 text-base'>¡Enter the new password!</p>
            <input onChange={onchange} id='password' type="email" name="" autoComplete='off' placeholder='Password' className='w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' />
            {/* <h6 className='text-xs w-2/3'>Seguridad de la contraseña:</h6> */}
            {/* <p className='text-xs'>Utiliza al menos 8 caracteres. No uses una contraseña de otro sitio ni un <br /> nombre demasiado obvio, como el de tu mascota.</p> */}
            <input  id='confirmPass' type="email" name="" autoComplete='off' placeholder='Confirm password' className='w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' />
            <button onClick={(e)=>{ e.preventDefault(); Updatepass()}} className='w-28 uppercase border-2 bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-300 hover:bg-green-300 hover:text-black max-md:w-20'>
               Save
            </button>
        </form>
    </section>
  )
}

export default Update_password