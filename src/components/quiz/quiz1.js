import questions from '../../assets/data/quiz1.json'

function checkAnswer(whats_answered, answer) {
    var id = document.getElementById(whats_answered)
    if (answer === whats_answered) {
        id.className = "correct-response"
        console.log("Correct!")
    }
    else {
        id.className = "incorrect-response"
        console.log("Incorrect!")
    }
}

function OptionCreation(props) {
    return (
        <>
            <button id={props.index} class="option" onClick={() => checkAnswer(props.index, parseInt(props.answer))}>{props.index} {props.info}</button>
        </>
    )
}

function NextButton(props) {
    if (props.valid) {
        return (
            <>
                <button>Next</button>
            </>
        );
    }
    else {
        return (
            <>
                No Button
            </>
        );
    }
}

function Quiz1() {
    const data = { questions };
    const quiz_1_progress = localStorage.getItem('quiz_1_progress');
    const options = [];
    for (const [index, elements] of data.questions.quiz1_questions[`${quiz_1_progress}`].options.entries()) {
        options.push(
            <>
                <OptionCreation index={index} info={elements} answer={data.questions.quiz1_questions[0].answer} />
                <br />
            </>
        )
    }

    return (
        <>
            <div className="contact-main-container">
                <div className="contact-container">
                    <img src={data.questions.quiz1_questions[`${quiz_1_progress}`].image} alt={data.questions.quiz1_questions[`${quiz_1_progress}`].image} />
                    <br />
                    {data.questions.quiz1_questions[`${quiz_1_progress}`].question}
                    <br />
                    <br />
                    {options}
                </div>
            </div>
        </>
    );
}



export default Quiz1;