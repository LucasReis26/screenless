import styles from './Header.module.css';

function Header(){
	return(
		<div>
			<img src="" alt="Logotipo do Screenless" id="logo"/>
			<ul>
				<li><a href="">Sobre nós</a></li>
				<li><a href="">Serviços</a></li>
				<li><a href="">Recomendações</a></li>
			</ul>
			<button>Log In</button>
		</div>
	)
}

export default Header;
