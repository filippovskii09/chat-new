'use client'

import React, { FC } from 'react'
import styles from './ChatMessages.module.scss'
import { MessageType, UserType } from '../../common/hooks/useCreateMessage.hook'

interface Props {
	messages: MessageType[],
	user: UserType
}

const ChatMessages: FC<Props> = ({ messages, user }) => {
	
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
