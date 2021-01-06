import questions from '../../assets/data/quiz0.json'
import './quiz.css'
import React, { useState } from 'react';

var explainations = []
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
                <button className="next-button" onClick={() => goNext(props.quiz_number)}>Next&gt;&gt;</button>
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

function goNext(quiz_number) {
    const running_progress = localStorage.getItem('quiz_' + quiz_number + '_progress');
    window.location.reload();
    localStorage.removeItem('next')

    localStorage.setItem('quiz_' + quiz_number + '_progress', parseInt(running_progress) + parseInt(1));
}

function ShowImage(props) {
    if (props.image != 'None') {
        return (
            <>
                <div className="image-container">
                    <img className='quiz-image' src={props.image} alt={props.alt} height={props.height} width={props.width} />
                </div>
            </>
        )
    }
    return (
        <>
        </>
    )
}

function Quiz(props) {
    const data = props.question;

    const quiz_progress = localStorage.getItem('quiz_' + props.quiz_number + '_progress');
    const should_next = localStorage.getItem('next')
    const [next, setNext] = useState(<NextButton show_next={should_next} />)
    window.addEventListener("click", function (event) {
        if (localStorage.getItem('next') === 'true') {
            setNext(<NextButton show_next={true} quiz_number={props.quiz_number} />)
        }
    });
    const options = [];

    for (const [index, elements] of data.questions[`${quiz_progress}`].options.entries()) {
        options.push(
            <>
                <OptionCreation index={index} info={elements} answer={data.questions[`${quiz_progress}`].answer} height={data.questions[`${quiz_progress}`].height} width={data.questions[`${quiz_progress}`].width} />
                <br />
            </>
        )
    }
    return (
        <>
            <div className="play-main-container">
                <div className="play-container">
                    <div className="play-title">
                        <div className="question-next-button">
                            {next}
                        </div>
                        <h1>
                            <div className="question-title">
                                {props.title} ({parseInt(quiz_progress) + 1}/{data.questions.length})
                            </div>
                        </h1>
                    </div>
                    <div className="play-section">
                        {explainations}
                        <b>{data.questions[`${quiz_progress}`].question}</b>
                        <div className="play-image">
                            <ShowImage image={data.questions[`${quiz_progress}`].image} alt={data.questions[`${quiz_progress}`].image_alt} />
                            {options}
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}




export default Quiz;