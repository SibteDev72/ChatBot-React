import axios from "axios"

let postAPI = 'https://chatbot.verticalsols.com/chat'

export async function postApiChatBot(session_id, message){
    try {
        const response = await axios.post(`${postAPI}/${session_id}?text=${message}`)
        console.log("Response From API :>> ", response)
        return response
    } catch (error) {
        console.log('Error :>> ', error);
    }
}
