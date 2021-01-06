import './play.css';
import categories from '../../assets/data/categories.json'
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.css';
import questions0 from '../../assets/data/quiz0.json'
import questions1 from '../../assets/data/quiz1.json'
import questions2 from '../../assets/data/quiz2.json'


function ShowImage(props) {
    console.log(props.image)

    if (props.image != 'None') {
        return (
            <>
                <img className='quiz-image' alt={props.alt} height={props.height} width={props.width} src={props.image} />
            </>
        )
    }
    return (
        <>
        </>
    )
}


function CategoryBlock(props) {
    var current_location = 'quiz_' + props.index + '_progress'

    let data;

    // How can I do this better?
    if (props.index == 0) {
        data = questions0
    }
    else if (props.index == 1) {
        data = questions1
    }
    else if (props.index == 2) {
        data = questions2
    }


    const quiz_progress = localStorage.getItem(current_location);

    return (
        <>
            <a href={props.link} className="category-box">
                <div className="category-box-title">
                    <h4>{props.category}</h4>
                </div>
                <div className="category-box-image">
                    <ShowImage image={props.image} />
                </div>
                <div className="category-box-description">
                    <p>{props.description}</p>
                </div>
                <div className="category-box-progress">
                    {(100 / data.questions.length * (parseInt(quiz_progress))).toFixed(2)}%
                    <ProgressBar variant="bg-success" now={100 / data.questions.length * (parseInt(quiz_progress))} />
                </div>
            </a>
        </>
    );
}

function Play() {
    const elements = { categories };
    const category_choices = [];

    // Check empty
    if (localStorage.getItem('quiz_0_progress') == undefined) {
        let number_progress = elements.categories.items.length;
        for (var i = 0; i < number_progress; i++) {
            var current_reset = 'quiz_' + i + '_progress'
            localStorage.setItem(current_reset, 0)
        };
    }

    localStorage.setItem('next', "")

    for (const [index, data] of elements.categories.items.entries()) {
        category_choices.push(
            <CategoryBlock category={data.category} description={data.description} link={data.link} index={index} image={data.image} />
        )
    }
    return (
        <>
            <div className="play-main-container">
                <div className="play-container">
                    <div className="play-title">
                        <h1>Choose a Category</h1>
                        <div className="category-container">
                            {category_choices}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Play;