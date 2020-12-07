import './App.css';
import Navigation from './components/navigation/navigation';

function App() {
	return (
		<>
			<div className="fill-screen-1">
				<Navigation />
				<header className="home-title">
					<span>
						<h1>Be Safe Online</h1>
						<p>Learn about <b>staying safe online</b> in a <b>fun</b> and <b>engaging</b> way!</p>
						<p>A <b>gamified solution</b> to teaching kids on the <b>dos and don'ts</b> of using the web</p>
					</span>
					<button>Explore</button>
				</header>
			</div>
			<div className="fill-screen-2">
				<header className="home-title">
					<span>
						<h1>Purpose</h1>
						<p>There are constant threats on the internet. Sadly, Anti-virus and Firewalls do not always protect the user from these threats.</p>
						<p>Stay Safe Online aims to educate users of these threats, reducing the risk exposure</p>
					</span>
				</header>
			</div>
			<div className="fill-screen-3">
				<span>
					<h1>Values</h1>
					<ul>
						<li>Effective Learning</li>
						<li>Fun and Engaging</li>
						<li>Gamified Solution</li>
						<li>Life-Skills</li>
						<li>For all Ages</li>
						<li>Self-Paced</li>
						<li>Real-life Experiences</li>
						<li>Basics of Security</li>
					</ul>
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
