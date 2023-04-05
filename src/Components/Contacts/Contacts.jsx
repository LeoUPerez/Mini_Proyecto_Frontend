import React, { useEffect, useState } from 'react'
import Header from '../Header/Header.jsx'
import NavBar from '../NavBar/NavBar.jsx';
import NavOptions from '../../utils/functions/NavOpen-Close.js'
import '../../App.css'
import axios from 'axios';
import Swal from 'sweetalert2'

const Contacts = () => {

  const [DataMessage, setDataMessage] = useState({name: '', lastname: '', mail: '', message: ''})
  
  function onchange() {
    
    setDataMessage({
      name: nameuser.value,
      lastname: lastnameuser.value,
      mail: mailuser.value,
      message: messageuser.value
    })

  }

  function SendData(params) {
    let inputs = document.querySelectorAll('input');
    let textare = document.querySelector('textarea');
    let verify = 0;
    for (let index = 0; index < inputs.length; index++) {
       if (inputs[index].value !== '') {
        verify++;
       }
    }
    if (textare.value !== '') {
      verify++;
    }
    
    if (verify !== inputs.length + 1){
      Swal.fire({
        icon: 'error',
        title: 'Opss!',
        text: 'You must fill in all fields!'
      })   
    }else{
      axios.post('http://localhost:3000/api/realestate', DataMessage)
      .then(({data})=>{
        Swal.fire({
          icon: 'success',
          title: 'Real Estate Info',
          text: 'Message sent successfully'
        })
        
        let textarea = document.querySelector('textarea');
        for (let index = 0; index < inputs.length; index++) {
          inputs[index].value = '';
          textarea.value = '';
        }
  
      }).catch(({err})=>{
        console.log(err);
      })
    }
  }

  return (
    <section className="h-screen w-full flex flex-col">
        <div>
           <div className='w-full h-16 border-b-2 border-gray-200 max-md:border-gray-200 flex fixed items-center max-md:w-full' id='header'>
                  <Header/>
                  <div className='h-3/4 w-0.5 mt-2 ml-2 bg-black max-md:opacity-0'></div>
                  <NavBar
                    Onclick={NavOptions.CloseBlack}
                    classNav = 'h-full w-full flex pt-2 gap-4 text-black items-center font-light rounded-xl pb-2 relative max-md:opacity-0 max-md:w-36 max-md:gap-1.5 max-md:flex-wrap'
                  />
                <button id='btns-Open' onClick={NavOptions.Open} className=" w-8 h-8 text-base text-black opacity-0 max-md:opacity-100"><i className="fa-solid fa-bars"></i></button>
            </div> 
        </div>
        <div className='w-full h-20 flex justify-center items-center mt-20 '>
            <h1 className='text-5xl text-blue-300 '><strong>Contact Us</strong></h1> 
        </div>
    <div id='form' className='w-full h-full flex justify-center items-center pb-8 max-2xl:flex-col max-[400px]:mt-16'>
      <div className='min-w-[20%] h-full flex flex-col gap-3 justify-center text-justify max-2xl:text-sm max-xl:text-xs max-[400px]:p-7 max-[376px]:mt-44 max-md:mt-14'>
        <h4 className='text-lg text-blue-300'><strong>Office Hours:</strong></h4> 
        <p>Monday through Friday from 9:00 am - 6:00 pm and <br />
          Saturdays from 9:00 am through 1:00 pm</p>
        <p>(All times eastern standard) If you need to contact us out of 
          these <br /> office hours, please see the list below.</p>
        <p>If you want more information about a 
          specific property, please include <br /> the listing number in your message.</p>
      </div>
      
      <div className='w-2/3 h-full p-4 flex bg-white bg-opacity-80 rounded-2xl max-[1300px]:flex-col max-[1300px]:min-w-[95%]'>
        <form action="" className='min-w-[70%] h-full text-sm rounded-lg bg-gray-200 bg-opacity-40 flex flex-col p-4 max-md:h-3/5'>
          <div className='w-full flex max-md:flex-col'>
          <div className='flex flex-col w-full h-16'>
          <span><strong>Name:</strong></span> 
          <input type="text" onChange={onchange} id='nameuser' className='w-3/4 h-10 border-2 p-1 rounded-md outline-blue-200' placeholder='Enter your name' />
          </div>
          <div className='flex flex-col h-16 w-full '>
          <span><strong>Last Name:</strong></span> 
          <input type="text" onChange={onchange} id='lastnameuser' className='w-3/4 h-10 border-2 p-1 rounded-md outline-blue-200' placeholder='Enter your last name' />
          </div>
          </div>
          <div className='flex flex-col w-full'>
          <span><strong>Mail:</strong></span> 
          <input type="text" onChange={onchange} id='mailuser' className=' h-10 border-2 w-3/4 p-1 rounded-md outline-blue-200' placeholder='Enter your mail' />
          </div>
          <span className='mt-4 '><strong>Message:</strong></span> 
          <textarea id="messageuser" onChange={onchange} className='w-full h-1/2 outline-blue-200 p-2 max-md:h-1/3 rounded-md resize-none' placeholder='Message' name=""  cols="30" rows="10"></textarea>
          <div className='w-full mt-4 flex justify-center items-center'>
           <button onClick={(e)=>{e.preventDefault(); SendData()}} className='h-10 text-white w-28 bg-blue-500 rounded-lg transition-all duration-200 hover:bg-green-400'>Send message</button>
          </div>
        </form>
        <div className='min-w-[30%] h-full flex justify-center items-center max-[1300px]:h-1/3 max-[1300px]:p-4'>
          <div className='bg-gray-200 bg-opacity-40 min-w-[90%] p-5 rounded-md flex flex-col gap-2 '>
            <h4>Contact Us:</h4>
            <div className='flex items-center gap-2'>
            <i className="fa-solid fa-phone"></i>
            <p>+1 849 343 5016</p>
            </div>
            <div className='flex items-center gap-2'>
            <i className="fa-solid fa-comment-sms"></i>
            <p>+1 849 343 5016</p>
            </div>
            <div className='flex items-center gap-2'>
            <i className="fa-solid fa-envelope"></i>
            <p className='text-blue-500 cursor-pointer'>state.real.inf@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contacts