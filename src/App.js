import './App.css';
import Navigation from './components/navigation/navigation';

function App() {
	return (
		<>
			<Navigation />
			<div className="fill-screen-1">
				<header className="home-title">
					<span>
						<h1>Be Safe Online</h1>
						<p>Learn about <b>staying safe online</b> in a <b>fun</b> and <b>engaging</b> way!</p>
						<p>A <b>gamified solution</b> to teaching kids on the <b>dos and don'ts</b> of using the web</p>
					</span>
					<button>Explore</button>
					<a href="#about">
						<div className="scroll-down"></div>
					</a>
				</header>
			</div>
			<section id='about'>
				<div className="fill-screen-2">
					<header className="home-title">
						<span>
							<h1>Purpose</h1>
							<p>There are constant threats on the internet. Sadly, Anti-virus and Firewalls do not always protect the user from these threats.</p>
							<p>Stay Safe Online aims to educate users of these threats, reducing the risk exposure</p>
						</span>
					</header>
				</div>
			</section>
			<div className="fill-screen-3">
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
			</div>
			<div className="fill-screen-4">
				<span>
					<h1>Statistics</h1>
					<p>Pie chart image</p>
					<p>Talk about statistics</p>
				</span>
			</div>
			<footer>
				Okay this is the bottom, thanks :)
				<br/>
				More for the Footer in the future
			</footer>
		</>
	);
}

export default App;
