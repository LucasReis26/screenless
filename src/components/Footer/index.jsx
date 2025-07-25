import styles from  './Footer.module.css';

function Footer(){
	return (
		<footer className={styles.footer} id="footer">
			<div className={styles.navegacao}>
				<h3>Navegação</h3>
				<nav>
					<a href="#footer">Contato</a>
					<a href="#service1">Serviços</a>
					<a href="#relatos">Relatos</a>
				</nav>
			</div>
			<div className={styles.contato}>
				<h3>Entre em contato</h3>
				<p>contato@screenless.com</p>
				<p>+55 31 6473-1237</p>
			</div>
		</footer>
	)
}

export default Footer
