'use client'

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

type User = {
	id: string,
	name: string
}

export type MessageType = {
	id: string,
	message: string,
	sender: string
}

const useCreateMessage = () => {
	const [messageText, setMessageText] = useState<string>("")
	const [messages, setMessages] = useState<MessageType[]>([])

	let user: User | null = null
	const userString = sessionStorage.getItem('user')
	if(userString) {
		user = JSON.parse(userString)
	}

	const sentMessage = () => {
		const userName = user ? user.name : 'Anonymus'

		const newMessage: MessageType = {
			id: uuid(),
			message: messageText,
			sender: userName
		}

		const updatedMessages = [...messages, newMessage]
		setMessages(updatedMessages)

		localStorage.setItem('messages', JSON.stringify(updatedMessages));
	}
	
	return { sentMessage, setMessages, messages, user, setMessageText, messageText }
}

export default useCreateMessage
