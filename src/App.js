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
				Hello
			</div>
			<div className="fill-screen-3">
				Hello
			</div>
			<div className="fill-screen-4">
				Hello
			</div>
			<footer>
				Okay this is the bottom, thanks
			</footer>
		</>
	);
}

export default App;
