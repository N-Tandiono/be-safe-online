import questions from '../../assets/data/quiz0.json'
import Quiz1 from '../../components/quiz/quiz0';
import Congrats from '../../components/congrats/congrats';

function FetchQuizPage() {
    const data = { questions }
    const quiz_0_progress = localStorage.getItem('quiz_0_progress');
    console.log(parseInt(quiz_0_progress))
    console.log(parseInt(data.questions.quiz0_questions.length))
    if (parseInt(quiz_0_progress) + 1 > parseInt(data.questions.quiz0_questions.length)) {
        return (
            <>
                <Congrats />
            </>
        );
    }
    else {
        return (
            <>
                <div className="play-main-container">
                    <div className="play-container">
                        <div className="play-title">
                            <h1>Thing One {parseInt(quiz_0_progress) + 1}/{data.questions.quiz0_questions.length}</h1>
                        </div>
                        <Quiz1 />
                    </div>
                </div>
            </>
        );
    }
}

export default FetchQuizPage;