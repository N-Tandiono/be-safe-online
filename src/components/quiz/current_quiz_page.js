import questions from '../../assets/data/quiz0.json'
import Quiz from '../../components/quiz/quiz0';
import Congrats from '../../components/congrats/congrats';

function FetchQuizPage(props) {
    const data = { questions }
    const quiz_progress = localStorage.getItem('quiz_' + props.quiz_number + '_progress');
    if (parseInt(quiz_progress) + 1 > parseInt(data.questions.questions.length)) {
        return (
            <>
                <Congrats quiz_number={props.quiz_number} />
            </>
        );
    }
    else {
        return (
            <>
                <div className="play-main-container">
                    <div className="play-container">
                        <div className="play-title">
                            <h1>{props.name} ({parseInt(quiz_progress) + 1}/{data.questions.questions.length})</h1>
                        </div>
                        <Quiz quiz_number={props.quiz_number} />
                    </div>
                </div>
            </>
        );
    }
}

export default FetchQuizPage;