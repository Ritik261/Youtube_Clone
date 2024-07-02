import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { BiSolidVideoPlus } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";






const Navbar = () => {
  return (
    
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky text-white'>

      <div className='flex gap-8 items-center text-2xl '>

        <div>
        <GiHamburgerMenu />  
        </div>

        <div className='flex gap-2 items-center justify-center'>
        <FaYoutube className='text-3xl text-red-600'/>
        <span className='text-2xl font-roboto'>Youtube</span>
        </div>
      </div>
        <div className='flex justify-center items-center gap-5'>
          <form action="">
            <div className='flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-3xl'>
              <div className='flex gap-4 items-center pr-5'>
                <input type="text" placeholder='search' className='w-96 bg-zinc-900 focus:outline-none border-none'/>
              </div>
              <button className='flex h-10 w-16 items-center justify-center bg-zinc-800 rounded-r-3xl '>
              <IoSearchOutline className='text-xl '/>
              </button>
            </div>
          </form>
          
          <div className='flex p-3 text-xl bg-zinc-800 rounded-3xl'>
          <FaMicrophone />
          </div>
          </div>
          <div className='flex gap-5 items-center justify-center text-xl'>
          <BiSolidVideoPlus />
          <div className='relative'>
          <BsFillBellFill />
          <span className='absolute bottom-2 left-2 bg-red-600 text-xs rounded-full px-1'>9+</span>


          </div>
          <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="cat king" className='w-10 rounded-full '/>
          </div>

       
        
        
      
    </div>


    


  )
}

export default Navbar