import './navigation.css';

function Navigation() {
	return (
		<>
			<div className="navigation">
				<ul>
					<li><a href="/" id="logo"><h3><b>Be Safe Online</b></h3></a></li>
					<br />
					<li><a href="/about" id="about">About Us</a></li>
					<li><a href="/contact" id="contact">Contant Us</a></li>
					<li><a href="/play" id="play">Play</a></li>
				</ul>
			</div>
		</>
	);
}

export default Navigation;