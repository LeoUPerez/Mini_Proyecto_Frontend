import React from 'react'
import Header from '../Header/Header.jsx'
import NavBar from '../NavBar/NavBar.jsx';


const Home = () => {

    function OpenNav() {
        let nv = document.getElementById('navbar');
        let hd = document.getElementById('header');
        let btns = document.getElementById('btns-Open');

        hd.className = 'w-full h-56 flex items-start ';
        nv.className= 'opacity-100 bg-gray-200 relative gap-2 mt-4 max-md:text-base max-md:w-36 max-md:h-48 max-md:pb-1.5 max-md:flex max-md:justify-center max-md:flex-col max-md:items-center max-md:rounded-lg  ';
        btns.className = 'w-8 h-8 text-xs opacity-0 max-md:opacity-0';
    }
    function CloseNav() {
        let nv = document.getElementById('navbar');
        let hd = document.getElementById('header');
        let btns = document.getElementById('btns-Open');

        hd.className = 'w-full h-14 flex items-center';
        nv.className= 'h-full pt-4 flex justify-center max-md:opacity-0 items-center gap-4 font-light rounded-xl pb-2 relative max-md:w-36 max-md:gap-1.5 max-md:flex-wrap';
        btns.className = 'w-8 h-8 text-base opacity-0 max-md:opacity-100';
    }
  return (
    <section>
        <div className='w-full h-screen '>
           <div className='w-full h-16 border-b-2 border-gray-200 max-md:border-gray-50 flex items-center  max-md:w-full' id='header'>
                  <Header/>
                  <div className='h-3/4 w-0.5 mt-2 ml-2 bg-black max-md:bg-white'></div>
                  <NavBar
                    Onclick={CloseNav}
                  />
                <button id='btns-Open' onClick={OpenNav} className=" w-8 h-8 text-base opacity-0 max-md:opacity-100"><i className="fa-solid fa-bars"></i></button>
            </div> 
        </div>
    </section>
  )
}

export default Home