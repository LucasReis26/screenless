import styles from './Service1.module.css';

function Service1(){
	return(
		<>
			<div className={styles.service1}>
				<div className={styles.leftSide}>
					<h2>Imagine um mundo <br/> com menos <span>telas!</span></h2>
					<p>Dê a oportunida à seu filho  de viver <br/> o mundo real e veja ele ser mais feliz.</p>
				</div>
				<div className={styles.rightSide}>
					<img src="/kids-image-1.jpeg" alt="Foto de crianças brincando"/>
					<img src="/kids-image-2.jpg" alt="Foto de crianças brincando"/>
					<img src="" alt="Foto de crianças brincando"/>
					<img src="" alt="Foto de crianças brincando"/>
					<img src="" alt="Foto de crianças brincando"/>
					<img src="" alt="Foto de crianças brincando"/>
				</div>
			</div>
		</>
	)
}

export default Service1;
