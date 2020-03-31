import React, { useState } from 'react';
import "./QuestionBox.scss";
const QuestionBox = (props) => {
    const [answer, setAnswer] = useState(props.options);
    // const chooseAnswer = () => {
    //     setAnswer([props.text]);
    // }
    return (
        <div className="questionBox">
            <div className="questions">
                {props.question}
            </div>
            <div className="answers">
                {answer.map((text, index) => (
                    <button key={index} className="answerBtn" onClick={() => {
                        setAnswer([text]);
                    }}>{text}</button>
                ))}
            </div>
        </div>
    );
}

export default QuestionBox;
