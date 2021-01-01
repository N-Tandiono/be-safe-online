import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/about">

					</Route>
					<Route path="/contact">

					</Route>
					<Route path="/play">

					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

{/* <div className="fill-screen-4">
	<div className="home-container">
		<span>
			<h1>Statistics</h1>
			<p>Pie chart image</p>
			<p>Talk about statistics</p>
		</span>
	</div>
</div> */}

export default App;
