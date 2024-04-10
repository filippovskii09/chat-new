'use client'

import { useContext } from 'react'
import { generateRandomUser } from '../../common/utils/generateRandomUser.util'
import styles from './LoginButton.module.scss'
import { LoginContext } from '../../common/context/loginContext'

const LoginButton = () => {
	const {setIsLogin} = useContext(LoginContext)

	const handleGenerate = () => {
		const randomUser = generateRandomUser()
		sessionStorage.setItem('user', JSON.stringify(randomUser))
		setIsLogin(true)
	}
	
	return <button className={styles.button} onClick={() => handleGenerate()}>Start chating</button>
}

export default LoginButton
