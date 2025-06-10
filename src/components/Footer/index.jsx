import styles from  './Footer.module.css';

function Footer(){
	return (
		<footer className={styles.footer}>
			<div>
				<h3>Navegação</h3>
				<nav>
					<a href="">Sobre nós</a>
					<a href="">Sobre nós</a>
					<a href="">Sobre nós</a>
				</nav>
			</div>
			<div>
				<h3>Entre em contato</h3>
				<p>dev@screenless.com</p>
				<p>+55 31 6473-1237</p>
			</div>
		</footer>
	)
}

export default Footer
