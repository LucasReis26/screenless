import styles from './Header.module.css';

function Header(){
	return(
		<header>
			<img src="" alt="Logotipo do Screenless" id="logo"/>
			<nav>
				<a href="">Sobre nós</a>
				<a href="">Serviços</a>
				<a href="">Recomendações</a>
			</nav>
			<button>Log In</button>
		</header>
	)
}

export default Header;
