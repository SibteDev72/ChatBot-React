import React, { useState } from 'react'
import Thread from './Thread'
import { useStore } from '../store/utility-store';
import { postApiChatBot } from '../Api/chatbot';

function Content() {

  const [message, setMessage] = useState();
  const { session_id, addUserMessage, addChatbotResponse, setLoading, loading } = useStore((state) => ({
    session_id: state.session_id,
    addUserMessage: state.addUserMessage,
    addChatbotResponse: state.addChatbotResponse,
    setLoading: state.setLoading,
    loading: state.loading,
  }))
 
  async function submitHandler(e){
    e.preventDefault();
    addUserMessage(message);
    setLoading(true);
    setMessage('')
    const postAPI = await postApiChatBot(session_id, message);
    addChatbotResponse(postAPI.data)
    setLoading(false)
  }

  return (
    <div className='w-full h-[90vh] bg-[#222222] flex justify-center sm:h-[85vh]'>
        <Thread />
        <form onSubmit={(e) => submitHandler(e)} 
        className='fixed bottom-6 flex justify-between items-center w-[22rem] h-[3rem] bg-[#222222] text-gray-300 border border-gray-300 rounded-lg sm:w-[50rem] sm:bottom-4'>
          <input 
          className='w-[18rem] bg-[#222222] h-[2.87rem] mx-2 text-gray-300 outline-0 sm:w-[46rem]'  
          placeholder='Type Message...'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading === true ? true : false}
          />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor"
            className="size-[2.5rem] px-2 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" 
            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
            </svg>
          </button>
        </form>

    </div>
  )
}

export default Content