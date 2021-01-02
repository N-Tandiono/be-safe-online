import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Play from './components/play/play';
import Quiz1 from './components/quiz/quiz1';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/play">
						<Play />
					</Route>
					<Route path="/Thing One">
						<div className="play-main-container">
							<div className="play-container">
								<div className="play-title">
									<h1>Thing One</h1>
								</div>
								<Quiz1 />
							</div>
						</div>
					</Route>
					<Route path="/Thing Two">
						<div className="play-main-container">
							<div className="play-container">
								<div className="play-title">
									<h1>Thing Two</h1>
								</div>
							</div>
						</div>
					</Route>
					<Route path="/Deception">
						<div className="play-main-container">
							<div className="play-container">
								<div className="play-title">
									<h1>Deception</h1>
								</div>
							</div>
						</div>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
