import styles from './Header.module.css';

function Header(){
	return(
		<header>
			<figure>
				<img src="" alt="Logotipo do Screenless" id="logo"/>
			</figure>
			<nav className={styles.navItens}>
				<a href="">Sobre nós</a>
				<a href="">Serviços</a>
				<a href="">Recomendações</a>
			</nav>
			<button>Log In</button>
		</header>
	)
}

export default Header;
