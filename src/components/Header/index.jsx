import styles from './Header.module.css';

function Header(){
	return(
		<header className={styles.box}>
			<div>
				<a href="/">
					<img src="/ScreenlessLogo.png" alt="Logotipo do Screenless" id="logo"/>
				</a>
				<nav className={styles.navItens}>
					<a href="#footer">Contato</a>
					<a href="#service1">Serviços</a>
					<a href="#relatos">Relatos</a>
				</nav>
			</div>
			<button className={styles.btn}>Log In</button>
		</header>
	)
}

export default Header;
