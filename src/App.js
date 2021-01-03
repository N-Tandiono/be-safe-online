import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Play from './components/play/play';
import Quiz1 from './components/quiz/quiz0';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import questions from '../src/assets/data/quiz0.json';
import FetchQuizPage from '../src/components/quiz/current_quiz_page';

function App() {
	const data = { questions }
	// { data.questions.quiz0_questions[0].progress }
	const quiz_0_progress = localStorage.getItem('quiz_0_progress');
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
						<FetchQuizPage name="Emails" quiz_number={0} />
					</Route>
					<Route path="/Thing Two">
						<FetchQuizPage name="Thing Two" quiz_number={1} />
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
