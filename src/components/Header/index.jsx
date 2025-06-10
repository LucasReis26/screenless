import styles from './Header.module.css';

function Header(){
	return(
		<>
			<header className={styles.box}>
				<div>
					<img src="/ScreenlessLogo.png" alt="Logotipo do Screenless" id="logo"/>
					<nav className={styles.navItens}>
						<a href="/sobre-nos">Sobre nós</a>
						<a href="/servicos">Serviços</a>
						<a href="/relatos">Relatos</a>
					</nav>
				</div>
				<button className={styles.btn}>Log In</button>
			</header>
		</>
	)
}

export default Header;
