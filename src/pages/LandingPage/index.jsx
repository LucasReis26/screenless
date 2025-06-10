import styles from './LandingPage.module.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Service1 from '../../components/Service1'
import Service2 from '../../components/Service2'
import Service3 from '../../components/Service3'
import Relatos from '../../components/Relatos'
import CallActionButton from '../../components/CallActionButton'

function LandingPage() {

	return (
		<>
			<Header/>
			<div className={styles.home}>
				<div className={styles.leftSide}>
					<h2>Imagine um mundo <br/> com menos <span>telas!</span></h2>
					<p>Dê a oportunida à seu filho  de viver <br/> o mundo real e veja ele ser mais feliz.</p>
					<CallActionButton/>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.imgLeft}>
						<img src="/kids-image-1.jpeg" alt="Foto de crianças brincando"/>
						<img src="/kids-image-4.jpg" alt="Foto de crianças brincando"/>
						<img src="/kids-image-6.jpg" alt="Foto de crianças brincando"/>
					</div>
					<div className={styles.imgRight}>
						<img src="/kids-image-2.jpg" alt="Foto de crianças brincando"/>
						<img src="/kids-image-3.jpg" alt="Foto de crianças brincando"/>
						<img src="/kids-image-5.jpg" alt="Foto de crianças brincando"/>
					</div>
				</div>
			</div>
			<Service1/>
			<Service2/>
			<Service3/>
			<Relatos/>
			<Footer/>
		</>
	);
}

export default LandingPage
