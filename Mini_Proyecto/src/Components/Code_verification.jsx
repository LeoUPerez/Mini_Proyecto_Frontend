import axios from 'axios';
import React, { useState } from 'react'
import  { Toaster, toast } from 'react-hot-toast';

const Code_verification = () => {

  const [code, setcode] = useState({code: ""});

  function onchange() {
    let codeuser = document.getElementById('code');

    setcode({
      code: codeuser.value
    })
    // console.log(code);
  }

  // !Peticion hacia el backend
  function check_code() {
    if (code.code !== "") {
      axios.patch('http://localhost:3000/api/usuarios/'+'14d5ds', code)
      .then(({data})=>{
        console.log(data);
        if (data.message !== 'Incorrect verification code' ) {
          location.href='/Update_password';
        }else{
          toast.error('Incorrect code');
        }
      }).catch(({err})=>{
        console.log(err);
      })
    }else{
      toast.error('You must fill in all fields');
    }
  }
  // !Peticion hacia el backend

  return (
    <section className='w-full h-screen bg-blue-200 flex justify-center items-center'>
      <Toaster toastOptions={{duration:1700}} position='top-right'/>
        <form className='min-w-[25%] min-h-[45%] flex flex-col items-center justify-center gap-3 bg-gray-200 rounded-2xl max-md:min-w-[95%] max-md:min-h-[40%]'>
            <p className='text-red-600 text-xs'>¡Enter the code sent to your email!</p>
            <input onChange={onchange} id='code' type="email" name="" autoComplete='off' placeholder='Enter your code' className='w-8/12 h-9 outline-blue-200 p-2 rounded-lg max-md:w-2/3' />
            <button onClick={(e)=>{ e.preventDefault(); check_code()}} className='w-28 uppercase border-2 bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-300 hover:bg-green-300 hover:text-black max-md:w-20'>
              Verify
            </button>
        </form>
    </section>
  )
}

export default Code_verification;