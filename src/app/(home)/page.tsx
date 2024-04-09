import '@/app/globals.scss';
import LoginButton from '../../../components/LoginButton/LoginButton';
import styles from './HomePage.module.scss';

const HomePage = () => {
	return (
		<main className={styles.page}>
				<LoginButton/>
		</main>
	)
}

export default HomePage
