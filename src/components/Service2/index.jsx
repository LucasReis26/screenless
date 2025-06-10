import CallActionButton from '../CallActionButton';
import styles from './Service2.module.css'

function Service2(){
	return(
		<div className={styles.service2} id='service1'>
			<div className={styles.leftSide}>
				<img src="/CelularGPS.png" alt="Exemplo de Celular com GPS"/>
			</div>
			<div className={styles.rightSide}>
				<h2>Descubra eventos na <br/> sua <span>vizinhança!</span></h2>
				<p>Com o Screenless, você pode encontrar e criar eventos perto <br/>de casa para o seu filho!</p>
				<CallActionButton/>
			</div>
		</div>
	)
}

export default Service2;
