import CallActionButton from '../CallActionButton';
import styles from './Relatos.module.css'

function Relatos(){
	return (
		<>
			<div className={styles.relatos} id="relatos">
				<h2>Nossos <span>Relatos!</span></h2>
				<div className={styles.relatosContainer}>
					<div className={styles.card}>
						<img src="/profile-pic-fulano.svg" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illum corporis saepe cupiditate molestiae dolores earum? Vel velit debitis labore consequatur neque ratione dolore optio voluptate reiciendis recusandae, officiis quos.</p>
					</div>
					<div className={styles.card}>
						<img src="/profile-pic-fulano.svg" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in soluta officiis sequi, consequuntur hic provident dolor aspernatur atque itaque aperiam commodi minus consectetur, aliquam ducimus molestiae nam accusantium perspiciatis?</p>
					</div>
					<div className={styles.card}>
						<img src="/profile-pic-fulano.svg" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis libero beatae, corrupti asperiores explicabo cumque repellendus ut eligendi a enim officia quis dolores sequi doloremque numquam animi fuga. Omnis!</p>
					</div>
					<div className={styles.card}>
						<img src="/profile-pic-fulano.svg" alt="Foto de Perfil de Fulano"/>
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero sequi itaque illo error velit consequatur recusandae aut cum explicabo, aperiam atque ab. Sequi, expedita? Nemo qui in blanditiis distinctio.</p>
					</div>
				</div>
				<CallActionButton/>
			</div>
		</>
	)
}

export default Relatos;
