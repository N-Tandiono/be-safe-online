import './congrats.css';

function reset(quiz_number) {
    window.location.reload();
    localStorage.setItem('quiz_' + quiz_number + '_progress', 0);
}

function Congrats(props) {
    return (
        <>
            <div className="contact-main-container">
                <div className="contact-container">
                    <div className="contact-title">
                        <h1>Congratulations!</h1>
                        <form action="../play/play.js">
                            <input type="submit" value="Return" />
                        </form>
                        <button className="reset-button" onClick={() => reset(props.quiz_number)}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Congrats;