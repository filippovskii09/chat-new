'use client'

import { IoSend } from "react-icons/io5";
import React, { FormEvent } from 'react'
import useCreateMessage from "../../common/hooks/useCreateMessage.hook";
import styles from './ChatForm.module.scss'

const ChatForm = ({sentMessage, setMessageText, messageText}: any) => {


	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		sentMessage()
		setMessageText('')
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
			<input placeholder='Enter your message' className={styles.input} value={messageText} type="text" name='messages' onChange={(e) => setMessageText(e.target.value)}/>
			<button disabled={messageText.length === 0} className={`${styles.button} ${messageText.length === 0 && styles.disabled}`} type="submit">
				<IoSend />
			</button>
		</form>
	)
}

export default ChatForm
