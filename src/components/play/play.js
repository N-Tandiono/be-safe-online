import './play.css';
import categories from '../../assets/data/categories.json'
import React, { useState } from 'react';

function CategoryBlock(props) {
    return (
        <>
            <a href={props.link} className="category-box">
                <div className="category-box-title">
                    <h1>{props.category}</h1>
                </div>
                <div className="category-box-image">
                    {props.image}
                </div>
                <div className="category-box-description">
                    <br />
                    <br />
                    <h4>{props.description}</h4>
                </div>
                <div className="category-box-progress">
                    {/* localstorage progress bar, *TODO* */}
                </div>
            </a>
        </>
    );
}

function Play() {
    const elements = { categories };
    const category_choices = [];

    // Check empty
    if (localStorage.getItem('quiz_1_progress') == undefined) {
        localStorage.setItem('quiz_1_progress', 0);
    }

    const quiz_1_progress = localStorage.getItem('quiz_1_progress');

    for (const [_, data] of elements.categories.items.entries()) {
        category_choices.push(
            <CategoryBlock category={data.category} description={data.description} link={data.link} />
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