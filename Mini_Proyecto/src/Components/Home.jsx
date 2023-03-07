import React from 'react'
import Header from './Header'
import NavBar from './NavBar';


const Home = () => {

    function OpenNav() {
        let nv = document.getElementById('navbar');
        let hd = document.getElementById('header');
        let btns = document.getElementById('btns-Open');

        hd.className = 'w-full h-10 flex items-center pt-4';
        nv.className= 'opacity-100 max-md:text-base max-md:pt-32';
        btns.className = 'w-8 h-8 text-xs opacity-0 max-md:opacity-0';
    }
    function CloseNav() {
        let nv = document.getElementById('navbar');
        let hd = document.getElementById('header');
        let btns = document.getElementById('btns-Open');

        hd.className = 'w-full h-14 flex items-center';
        nv.className= 'relative opacity-100 h-12 w-full text-base max-md:opacity-0 max-md:text-xs max-md:w-2/5';
        btns.className = 'w-8 h-8 text-base opacity-0 max-md:opacity-100';
    }
  return (
    <section>
        <div className='w-full h-screen'>
           <div className='w-full h-14 flex items-center' id='header'>
                <Header/>
                <div className='h-12 relative w-full max-md:w-2/5 max-md:opacity-0 max-md:h-full max-md:text-xs' id='navbar'>
                  <NavBar/>
                 <button onClick={CloseNav} className="absolute top-1 p-1 bg-red-500 flex justify-center items-center rounded-full text-sm w-6 h-6 opacity-0 max-md:opacity-100 max-md:ml-1 max-md:mt-1">X</button>
                </div>
                <button id='btns-Open' onClick={OpenNav} className=" w-8 h-8 text-base opacity-0 max-md:opacity-100"><i className="fa-solid fa-bars"></i></button>
            </div> 
        </div>
    </section>
  )
}

export default Home