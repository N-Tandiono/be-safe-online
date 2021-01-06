import './congrats.css';

function reset(quiz_number) {
    window.location.reload();
    localStorage.setItem('quiz_' + quiz_number + '_progress', 0);
}

function Congrats(props) {
    return (
        <>
            <div className="play-main-container">
                <div className="play-container">
                    <div className="play-title">
                        <div className="play-section">
                            <span>
                                <h1><b>Congratulations</b>!</h1>
                                <p>You Have Completed: <b>{props.title}</b>!</p>
                            </span>
                            <div className="play-buttons">
                                <a href="../play/play.js" id="return">Return</a>
                                <button id="reset" className="reset-button" onClick={() => reset(props.quiz_number)}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Congrats;