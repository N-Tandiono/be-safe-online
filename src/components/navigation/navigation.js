import './navigation.css';

function Navigation() {
	return (
		<>
			<div className="navigation">
				<ul>
					<li>
						<a href="/be-safe-online/" id="logo">
							<div className="nav-title-heading">
								<b>Be Safe Online</b>
							</div>
						</a>
					</li>
					<br />
					<li><a href="/be-safe-online/#/about" id="about">About Us</a></li>
					<li><a href="/be-safe-online/#/play" id="play">Play</a></li>
				</ul>
			</div>
		</>
	);
}

export default Navigation;