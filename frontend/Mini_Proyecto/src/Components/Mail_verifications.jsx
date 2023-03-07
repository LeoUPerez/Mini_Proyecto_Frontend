import axios from 'axios';
import React, { useState } from 'react'
import  { Toaster, toast } from 'react-hot-toast';

const Mail_verifications = () => {

const [mail, setmail] = useState({correo: ""})

function onchange(params) {
    let correo = document.getElementById('mail');

    setmail({
        correo: correo.value
    })
    // console.log(mail);
}

  // !Peticion hacia  el backend
  function SendData() {
    if (mail.correo !== "") {
      axios.patch('http://localhost:3000/api/usuarios/', mail)
      .then(({data})=>{
        if (data.message !== 'Usuario no encontrado' ) {
          location.href='/CodeVerification';
        }else{
          toast.error('Mail not found');
        }
      }).catch(({err})=>{
        console.log(err);
      })
    }else{
      toast.error('You must fill in all fields');
    }
  }
  // !Peticion hacia el backend

function check_mail() {
    if (mail.correo !== "") {
        SendData();
    }else{
      toast.error('You must fill in all fields');
    }
 }

  return (
    <section className='w-full h-screen bg-blue-200 flex justify-center items-center'>
      <Toaster toastOptions={{duration:1700}} position='top-right'/>
        <form className='min-w-[25%] min-h-[45%] flex flex-col items-center justify-center gap-3 bg-gray-200 rounded-2xl max-md:min-w-[95%] max-md:min-h-[40%]'>
            <p className='text-red-600 text-xs'>¡Enter the email you registered with!</p>
            <input onChange={onchange} id='mail' type="email" name="" autoComplete='off' placeholder='Enter your mail' className='w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' />
            <button onClick={(e)=>{ e.preventDefault(); check_mail()} } className='w-28 uppercase border-2 bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-300 hover:bg-green-300 hover:text-black max-md:w-20'>
               Consult
            </button>
        </form>
    </section>
  )
}

export default Mail_verifications