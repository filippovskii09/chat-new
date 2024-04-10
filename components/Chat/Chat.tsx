'use client'

import { useEffect } from 'react';
import styles from './Chat.module.scss';
import useCreateMessage from '../../common/hooks/useCreateMessage.hook';
import ChatForm from '../ChatForm/ChatForm';
import ChatMessages from '../ChatMessages/ChatMessages';

const Chat = () => {
	const {setMessages, messages, user, setMessageText, messageText, sentMessage} = useCreateMessage()

	useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

	useEffect(() => {
		const handleStorageChange = (e: StorageEvent) => {
			if(e.key === 'messages' && e.newValue !== null) {
				const storedMessages = JSON.parse(e.newValue)
				setMessages(storedMessages)
			}
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	return (
		<section className={styles.chat}>
			<div className={styles.container}>
				<ChatMessages messages={messages} user={user}/>
				<ChatForm sentMessage={sentMessage} setMessageText={setMessageText} messageText={messageText}/>
			</div>
		</section>
	)
}

export default Chat
