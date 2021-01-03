import './congrats.css';

function reset() {
    window.location.reload();
    localStorage.setItem('quiz_0_progress', 0);
}

function Congrats() {
    return (
        <>
            <div className="contact-main-container">
                <div className="contact-container">
                    <div className="contact-title">
                        <h1>Congratulations!</h1>
                        <form action="../play/play.js">
                            <input type="submit" value="Return" />
                        </form>
                        <button className="reset-button" onClick={() => reset()}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Congrats;