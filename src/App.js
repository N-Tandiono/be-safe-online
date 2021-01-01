import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Play from './components/play/play';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuestionRoutes from './components/routes/routes';

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
					<QuestionRoutes />
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
