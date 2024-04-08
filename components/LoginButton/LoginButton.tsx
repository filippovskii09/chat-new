'use client'

import { generateRandomUser } from '../../common/utils/loginUtils'
import styles from './LoginButton.module.scss'

const LoginButton = () => {
	
	const handleGenerate = () => {
		const randomUser = generateRandomUser()
		localStorage.setItem('user', JSON.stringify(randomUser))
	}
	
	return (
		<button className={styles.button} onClick={() => handleGenerate()}>Start chating</button>
	)
}

export default LoginButton
