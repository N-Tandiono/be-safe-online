import Quiz from './quiz';
import Congrats from '../../components/congrats/congrats';

function FetchQuizPage(props) {
    const data = props.questions
    const quiz_progress = localStorage.getItem('quiz_' + props.quiz_number + '_progress');
    if (parseInt(quiz_progress) + 1 > parseInt(data.questions.length)) {
        return (
            <>
                <Congrats title={props.name} quiz_number={props.quiz_number} />
            </>
        );
    }
    else {
        return (
            <>
                <Quiz title={props.name} quiz_number={props.quiz_number} question={props.questions} />
            </>
        );
    }
}

export default FetchQuizPage;