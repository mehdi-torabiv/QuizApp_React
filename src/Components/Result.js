import React from 'react';
import "./Result.scss";
const Result = (props) => {
    return (
        <div className="score">
            <div className="scoreBody">
                <h6>Your score is {props.score} / 5 correct answers!</h6>
            </div>
            <button className="playBtn" onClick={props.playAgain}>Play Again</button>
        </div>
    );
}

export default Result;
