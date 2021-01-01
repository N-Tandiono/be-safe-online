import './about.css';
import mascot from '../../assets/img/Mascot.png'

function About() {
	return (
		<>
			<div className="about-main-container">
				<div className="about-container">
					<div className="about-title">
						<h1>About Us</h1>
					</div>
					<div class='row'>
						<div class='column'>
							<div class='left-column'>
								<br />
								<br />
								*TODO*
							</div>
						</div>
						<div class='column'>
							<div class='right-column'>
								<img src={mascot} alt="mascot" width="300px" height="300px" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;