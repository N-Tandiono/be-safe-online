import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import About from './components/about/about';
import Play from './components/play/play';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchQuizPage from '../src/components/quiz/current_quiz_page';
import questions0 from '../src/assets/data/quiz0.json'
import questions1 from '../src/assets/data/quiz1.json'
import questions2 from '../src/assets/data/quiz2.json'

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/play">
						<Play />
					</Route>
					<Route path="/emails">
						<FetchQuizPage name="Emails" quiz_number={0} questions={questions0} />
					</Route>
					<Route path="/emails v2">
						<FetchQuizPage name="Emails v2" quiz_number={1} questions={questions1} />
					</Route>
					<Route path="/deception">
						<FetchQuizPage name="Deception" quiz_number={2} questions={questions2} />
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
