import React from 'react';
import "./QuestionBox.scss";
const QuestionBox = (props) => {
    return (
        <div className="questionBox">
            <div className="questions">
                {props.question}
            </div>
        </div>
    );
}

export default QuestionBox;
