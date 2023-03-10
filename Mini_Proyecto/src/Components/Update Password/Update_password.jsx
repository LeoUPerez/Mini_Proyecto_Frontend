import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Update_password = () => {

  const [password, setpassword] = useState({password: ""});
  const [required_pass, setRe_Pass] = useState(true);
  const [required_pass_confirm, setRe_Pass_Con] = useState(true);


  function onchange() {
    let pass = document.getElementById('password');
    let passconfirm = document.getElementById('confirmPass');

    setpassword({
      password: pass.value
    })

    if (pass.value !== "") {
      setRe_Pass(false)
    } else {
      setRe_Pass(true)
    }
    if (passconfirm.value !== "") {
      setRe_Pass_Con(false)
    } else {
      setRe_Pass_Con(true)
    }
  }

  function Updatepass() {
    let passconfirm = document.getElementById('confirmPass');
    if (password.password !== "") {
      if (password.password !== passconfirm.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Passwords must match!'
          // footer: '<a href="">Why do I have this issue?</a>'
        })        
      }else{
        // !Peticion hacia el backend
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must fill in all fields!'
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

  return (
    <section className='w-full h-screen bg-blue-200 flex justify-center items-center'>
        <form className='min-w-[25%] min-h-[45%] flex flex-col items-center justify-center bg-gray-200 rounded-2xl max-md:min-w-[95%] max-md:min-h-[40%]'>
            <p className='text-red-600 text-base pb-2'>¡Enter the new password!</p>
            <input onChange={onchange} id='password' type="text" name="" autoComplete='off' placeholder='Password' className='w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' />
            <div className={required_pass ? 'text-xs min-w-[65%] p-0.5 text-red-600 opacity-100 max-md:min-w-[65%]' : 'text-xs min-w-[65%] p-0.5 text-red-600 opacity-0 max-md:min-w-[65%]'}>Required field</div>
            {/* <h6 className='text-xs w-2/3'>Seguridad de la contraseña:</h6> */}
            {/* <p className='text-xs'>Utiliza al menos 8 caracteres. No uses una contraseña de otro sitio ni un <br /> nombre demasiado obvio, como el de tu mascota.</p> */}
            <input onChange={onchange}  id='confirmPass' type="text" name="" autoComplete='off' placeholder='Confirm password' className='w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' />
            <div className={required_pass_confirm ? 'text-xs min-w-[65%] p-0.5 text-red-600 opacity-100 max-md:min-w-[65%]' : 'text-xs min-w-[65%] p-0.5 text-red-600 opacity-0 max-md:min-w-[65%]'}>Required field</div>
            <button onClick={(e)=>{ e.preventDefault(); Updatepass()}} id='btn' className='w-28 uppercase border-2 bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-300 max-md:w-20'>
               Save
            </button>
        </form>
    </section>
  )
}

export default Update_password