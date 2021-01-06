import './home.css';

function Home() {
	return (
		<>
			<div id="front-page" className="fill-screen-1">
				<div className="home-container">
					<header className="home-title">
						<span>
							<h1>Be Safe Online</h1>
							<p>Learn about <b>staying safe online</b> in a <b>fun</b> and <b>engaging</b> way!</p>
							<p>A <b>gamified solution</b> to teaching kids on the <b>dos and don'ts</b> of using the web</p>
						</span>
						<a href='../play/play.js' id='explore'>Explore</a>
						<a href="#purpose" className="scroll-down"></a>
					</header>
					<div id="purpose"></div>
				</div>
			</div>
			<div className="fill-screen-2">
				<div className="home-container">
					<header className="home-content">
						<span>
							<h1>Purpose</h1>
							<p>There are constant threats on the internet. Sadly, Anti-virus and Firewalls do not always protect the user from these threats.</p>
							<p>Stay Safe Online aims to educate users of these threats, reducing the risk of exposure</p>
						</span>
					</header>
				</div>
			</div>
			<div className="fill-screen-3">
				<div className="home-container">
					<header className="home-content">
						<span>
							<h1>Values</h1>
							<div class='row'>
								<div class='column'>
									<div class='left-column'>
										Effective Learning
								</div>
								</div>
								<div class='column'>
									<div class='right-column'>
										Fun and Engaging
								</div>
								</div>
							</div>
							<div class='row'>
								<div class='column'>
									<div class='left-column'>
										Gamified Solution
								</div>
								</div>
								<div class='column'>
									<div class='right-column'>
										Life-Skills
								</div>
								</div>
							</div>
							<div class='row'>
								<div class='column'>
									<div class='left-column'>
										For all Ages
								</div>
								</div>
								<div class='column'>
									<div class='right-column'>
										Self-Paced
								</div>
								</div>
							</div>
							<div class='row'>
								<div class='column'>
									<div class='left-column'>
										Real-life Experiences
								</div>
								</div>
								<div class='column'>
									<div class='right-column'>
										Basics of Security
								</div>
								</div>
							</div>
						</span>
					</header>
				</div>
			</div>
		</>
	);
}

export default Home;