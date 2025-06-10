import CallActionButton from '../CallActionButton';
import styles from './Relatos.module.css'

function Relatos(){
	return (
		<>
			<div className={styles.relatos}>
				<h2>Nossos <span>Relatos!</span></h2>
				<div className={styles.relatosContainer}>
					<div>
						<img src="" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo perferendis dolores quasi quas cum excepturi velit odio distinctio. Odio quidem deleniti exercitationem delectus magni asperiores, sed quibusdam perspiciatis cum?</p>
					</div>
					<div>
						<img src="" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo perferendis dolores quasi quas cum excepturi velit odio distinctio. Odio quidem deleniti exercitationem delectus magni asperiores, sed quibusdam perspiciatis cum?</p>
					</div>
					<div>
						<img src="" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo perferendis dolores quasi quas cum excepturi velit odio distinctio. Odio quidem deleniti exercitationem delectus magni asperiores, sed quibusdam perspiciatis cum?</p>
					</div>
					<div>
						<img src="" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo perferendis dolores quasi quas cum excepturi velit odio distinctio. Odio quidem deleniti exercitationem delectus magni asperiores, sed quibusdam perspiciatis cum?</p>
					</div>
				</div>
				<CallActionButton/>
			</div>
		</>
	)
}

export default Relatos;
