'use client'

import React from 'react'
import styles from './ChatMessages.module.scss'
import { MessageType } from '../../common/hooks/useCreateMessage.hook'

const ChatMessages = ({messages, user}: any) => {
	
	return (
		<ul className={styles.list}>
			{messages.map((message: MessageType) => (
				<li key={message.id} className={`${styles.item} ${user?.name === message.sender && styles.senderItem}`}>
					<span className={styles.sender}>{message.sender}</span>
					{message.message}
				</li>
			))}
		</ul>
	)
}

export default ChatMessages
