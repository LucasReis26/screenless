import styles from './Service2.module.css'
import CallActionButton from '../CallActionButton'
function Service2(){
	return(
		<>
			<div className={styles.service2}>
				<div className={styles.leftSide}>
					<h2>Seu filho com novas <br/><span>Amizades!</span></h2>
					<p>Com Screenless, seu filho terá a oportunidade de conhecer as <br/> outras crianças da vizinhança!</p>
					<CallActionButton/>
				</div>
				<div className={styles.rightSide}>
					<img src="/kids-illustration-playing.png" alt="Ilustração de crianças pulando corda"/>
				</div>
			</div>
		</>
	)
}
export default Service2
