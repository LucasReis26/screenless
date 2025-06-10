import styles from './LandingPage.module.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Service1 from '../../components/Service1';
import Service2 from '../../components/Service2';

function LandingPage() {

	return (
		<>
			<Header/>
			<Service1/>
			<Service2/>
			<Footer/>
		</>
	);
}

export default LandingPage
