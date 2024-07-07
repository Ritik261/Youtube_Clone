import React from 'react'
import { MdSlowMotionVideo ,MdSubscriptions ,MdVideoLibrary ,MdOutlineHistory ,MdWatchLater   } from "react-icons/md"
import {IoMdHome} from 'react-icons/io'
import { FiThumbsUp } from 'react-icons/fi'


const Sidebar = () => {

    const mainLinks = [
        {
            icon: <IoMdHome className='text-xl'/>,
            name: "Home"

        },
        {
            icon: <MdSlowMotionVideo className='text-xl'/>,
            name: "Shorts"

        },
        {
            icon: <MdSubscriptions className='text-xl'/>,
            name: "Subscription"

        }
   
        
    ]

    const otherLinks = [
        {
            icon: <MdVideoLibrary className='text-xl'/>,
            name: "Library"

        },
        {
            icon: <MdOutlineHistory className='text-xl'/>,
            name: "History"

        },
        {
            icon: <MdWatchLater className='text-xl'/>,
            name: "Watch Later"

        },
        {
            icon: <FiThumbsUp className='text-xl'/>,
            name: "Liked Video"

        }
    ]
  return (
    <>


        <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
            <ul className='flex flex-col border-b-2 border-gray-700'>
                {mainLinks.map(
                    ({icon,name})=>{
                        return (
                            <li key= {name} className={`${name === "Home" ? "bg-zinc-700" : ""} py-3 pl-6 hover:bg-zinc-700 rounded-xl`}>


                                <a href='#' className='flex items-center gap-5  '>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </a>

                            </li>
                        )
                    }
                )}
            </ul>
            <ul className='flex flex-col border-b-1 border-gray-800'>
                {otherLinks.map(
                    ({icon,name})=>{
                        return (
                            <li key= {name} className={`${name === "Home" ? "bg-zinc-700" : ""} py-3 pl-6 hover:bg-zinc-700 rounded-xl`}>

                                <a href='#' className='flex items-center gap-5  '>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </a>

                            </li>
                        )
                    }
                )}
            </ul>
        </div>
      
        
    </>

  )
}

export default Sidebar