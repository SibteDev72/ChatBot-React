import { create } from "zustand";

export const useStore = create((set) => ({
    session_id: Math.floor(Math.random() * 9999),
    userMessage: [],
    chatbotResponse: [],
    loading: false,

    addUserMessage: (userMessage) => set((state) => ({
        userMessage: [...state.userMessage, userMessage]
    })),
    addChatbotResponse: (chatbotResponse) => set((state) => ({
        chatbotResponse: [...state.chatbotResponse, chatbotResponse]
    })),
    setLoading: (value) => set(() => ({
        loading: value
    }))
}));