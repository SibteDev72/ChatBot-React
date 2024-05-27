import React from 'react'
import { useStore } from '../store/utility-store';

function Header() {

  const session_id = useStore((state) => state.session_id )

  return (
    <div className='w-full h-[10vh] flex justify-between items-center bg-black text-gray-300 sm:h-[15vh]'>
        <div className='flex items-start justify-center px-4'>
            <img className='w-[2rem] h-auto sm:w-[3rem]' src='images/chat-bot.png' />
            <p className='text-[0.8rem] mx-1 font-bold py-3 sm:py-4 sm:text-xl'>ChatBot</p>
        </div>
        <p className='text-[0.8rem] font-bold sm:text-xl'>Session ID: {session_id}</p>
        <div className='px-4 flex items-start'>
            <p className='text-[0.8rem] mx-2 font-bold sm:text-xl'>Powered by</p>
            <img className='w-[3rem] h-auto sm:w-[6rem]' src='images/Open-AI-White-Logo-PNG.png' />
        </div>
    </div>
  )
}

export default Header