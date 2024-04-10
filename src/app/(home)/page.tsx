'use client'

import { useContext, useEffect } from 'react';
import Chat from '../../../components/Chat/Chat';
import LoginButton from '../../../components/LoginButton/LoginButton';
import { LoginContext } from '../../../common/context/loginContext';
import styles from './HomePage.module.scss';

const HomePage = () => {
	const {isLogin, setIsLogin} = useContext(LoginContext)

	useEffect(() => {		
		if(sessionStorage.getItem('user')) {
			setIsLogin(true)
		}
	}, [])
	
	return (
		<main className={`${styles.page} ${isLogin ? styles.chat : styles.login}`}>
			{isLogin ? <Chat /> : <LoginButton/>}
		</main>
	)
}

export default HomePage
