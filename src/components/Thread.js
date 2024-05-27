import React, { useEffect, useState, useRef } from 'react'
import { useStore } from '../store/utility-store';
import { Typewriter } from 'react-simple-typewriter'

function Thread() {

  const { userMessage, loading, chatbotResponse } = useStore((state) => ({
    userMessage: state.userMessage,
    loading: state.loading,
    chatbotResponse: state.chatbotResponse,
  }))
  const [thread, setThread] = useState([])
  const lastDivRef = useRef(null);

  useEffect(() => {
      if(lastDivRef.current !== null){
        lastDivRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [thread]);

  useEffect(() => {
    setThread([...thread, { actor: 'user', message: userMessage[userMessage.length - 1]}]) 
  }, [userMessage])

  useEffect(() => {
    setThread([...thread, { actor: 'bot', message: chatbotResponse[chatbotResponse.length - 1]}]) 
  }, [chatbotResponse])

  return (
    <div className='w-[90vw] h-[72vh] my-8 overflow-y-auto bg-[#222222] text-gray-300 border border-gray-300 rounded-lg sm:w-[90vw] sm:h-[65vh]'>
        {
          thread.map((th, index) => (
              <div key={index}
              className='flex flex-col my-4'>
                <div ref={lastDivRef}
                className={th.actor === 'user' && th.message !== undefined ? 'self-end flex items-start mx-4 my-2 max-w-[18rem] h-fit sm:max-w-[50rem]' : 'hidden'}>
                  <p
                  className='py-2 px-3 rounded-lg bg-black shadow-sm shadow-gray-300'>
                    { th.message }
                  </p>
                  <img src='images/user.png' className='w-[2.3rem] h-[2.3rem] ml-2' alt='insert_img' />
                </div>
                <div 
                className={th.actor === 'bot' && th.message !== undefined ? 'self-start flex items-start mx-4 my-2 w-[18rem] h-fit sm:w-[50rem]' : 'hidden'}>
                  <img src='images/bot.png' className='w-[2.3rem] h-[2.3rem] mr-2' alt='insert_img' />
                  <p
                  className='py-2 px-3 rounded-lg bg-black shadow-sm shadow-gray-300'>
                <Typewriter
                words={[th.message]}
                loop={1}
                cursor
                cursorStyle=''
                typeSpeed={15}
                />
                  </p>
                </div>
              </div>
          ))
        }
        <div className='flex justify-center w-full'>
          <div
          className={ loading === false ? 'hidden' :
          'flex items-center justify-center my-2 w-[15rem] h-[3rem] rounded-lg bg-black shadow-sm shadow-gray-300'}>
            <p className='text-1xl mr-2'>Looking for Response</p>
            <div className='w-[0.6rem] h-[0.6rem] bg-gray-300 rounded-full mx-[0.1rem] animate-bounce'></div>
            <div className='w-[0.6rem] h-[0.6rem] bg-gray-300 rounded-full mx-[0.1rem] animate-bounce'></div>
            <div className='w-[0.6rem] h-[0.6rem] bg-gray-300 rounded-full mx-[0.1rem] animate-bounce'></div>
          </div>
        </div>          
      </div>
  )
}

export default Thread