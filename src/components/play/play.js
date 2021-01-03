import './play.css';
import categories from '../../assets/data/categories.json'
import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.css';
import questions from '../../assets/data/quiz0.json'

function CategoryBlock(props) {
    var current_location = 'quiz_' + props.index + '_progress'
    var current_progress = localStorage.getItem(current_location);
    const data = { questions }
    const quiz_0_progress = localStorage.getItem('quiz_0_progress');

    return (
        <>
            <a href={props.link} className="category-box">
                <div className="category-box-title">
                    <h4>{props.category}</h4>
                </div>
                <div className="category-box-image">
                    {props.image}
                </div>
                <div className="category-box-description">
                    <br />
                    <br />

                    <p>{props.description}</p>
                </div>
                <div className="category-box-progress">
                    {(100 / data.questions.quiz0_questions.length * (parseInt(quiz_0_progress))).toFixed(2)}%
                    <ProgressBar variant="bg-success" now={100 / data.questions.quiz0_questions.length * (parseInt(quiz_0_progress))} />
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
        localStorage.setItem('quiz_0_progress', 0);
    }

    localStorage.setItem('next', "")



    for (const [index, data] of elements.categories.items.entries()) {
        category_choices.push(
            <CategoryBlock category={data.category} description={data.description} link={data.link} index={index} />
        )
    }
    return (
        <>
            <div className="play-main-container">
                <div className="play-container">
                    <div className="play-title">
                        <h1>Choose a Category</h1>
                        {category_choices}
                    </div>
                </div>
            </div>
        </>
    );
}



export default Play;