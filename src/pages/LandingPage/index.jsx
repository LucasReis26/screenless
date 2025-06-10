import styles from './LandingPage.module.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Service1 from '../../components/Service1'
import Service2 from '../../components/Service2'
import Service3 from '../../components/Service3'
import Service4 from '../../components/Service4'

function LandingPage() {

	return (
		<>
			<Header/>
			<Service1/>
			<Service2/>
			<Service3/>
			<Service4/>
			<Footer/>
		</>
	);
}

export default LandingPage
