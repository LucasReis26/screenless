import CallActionButton from '../CallActionButton'
import styles from './Service3.module.css'

function Service3(){
	return(
		<>
			<div className={styles.service3}>
				<div className={styles.leftSide}>
					<img src="/father-playing-with-kid.png" alt="Pai brincando com o filho de skate"/>
				</div>
				<div className={styles.rightSide}>
					<h2>Crie memórias <span>incríveis!</span></h2>
					<p>Com Screenless, seu filho lembrará de seus momentos juntos <br/> quando crescer!</p>
					<CallActionButton/>
				</div>
			</div>
		</>
	)
}

export default Service3
