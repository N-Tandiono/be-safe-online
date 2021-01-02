import questions from '../../assets/data/quiz1.json'
import './quiz.css'
import React, { useState } from 'react';

function checkAnswer(whats_answered, answer) {
    var id = document.getElementById(whats_answered)
    if (answer === whats_answered && id.className === "option") {
        id.className = "correct-response"
        console.log("Correct!")
        localStorage.setItem('next', true)
    }
    else if (answer !== whats_answered && id.className === "option") {
        id.className = "incorrect-response"
        console.log("Incorrect!")
    }
}

function OptionCreation(props) {
    return (
        <>
            <button id={props.index} class="option" onClick={() => checkAnswer(props.index, parseInt(props.answer))}>{props.info}</button>
        </>
    )
}

function NextButton(props) {
    if (props.show_next) {
        return (
            <>
                <button onClick={() => goNext()}>Next</button>
            </>
        );
    }
    else {
        return (
            <>
            </>
        );
    }
}

function goNext() {
    const running_progress = localStorage.getItem('quiz_1_progress');
    window.location.reload();
    localStorage.removeItem('next')
    if (running_progress < 1) {
        localStorage.setItem('quiz_1_progress', parseInt(running_progress) + parseInt(1));
    }
    else {
        localStorage.setItem('quiz_1_progress', 0);
    }
}

function Quiz1() {
    const data = { questions };
    const quiz_1_progress = localStorage.getItem('quiz_1_progress');

    const should_next = localStorage.getItem('next')
    const [next, setNext] = useState(<NextButton show_next={should_next} />)
    window.addEventListener("click", function (event) {
        if (localStorage.getItem('next') === 'true') {
            setNext(<NextButton show_next={true} />)
        }
    });
    const options = [];
    for (const [index, elements] of data.questions.quiz1_questions[`${quiz_1_progress}`].options.entries()) {
        options.push(
            <>
                <OptionCreation index={index} info={elements} answer={data.questions.quiz1_questions[`${quiz_1_progress}`].answer} />
                <br />
            </>
        )
    }

    return (
        <>
            <div className="play-main-container">
                < div className="play-container" >
                    <div className="image-container">
                        <img className='quiz-image' src={data.questions.quiz1_questions[`${quiz_1_progress}`].image} alt={data.questions.quiz1_questions[`${quiz_1_progress}`].image_alt} height={data.questions.quiz1_questions[`${quiz_1_progress}`].height} width={data.questions.quiz1_questions[`${quiz_1_progress}`].width} />
                    </div>
                    <br />
                    {data.questions.quiz1_questions[`${quiz_1_progress}`].question}
                    < br />
                    <br />
                    {options}
                    {next}
                </div >
            </div >
        </>
    );
}



export default Quiz1;