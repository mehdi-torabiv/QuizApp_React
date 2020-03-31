import React, { Component } from 'react';
import "./App.scss";
import Querys from './assets/Querys/Querys';
import QuestionBox from './Components/QuestionBox';
class App extends Component {
  state = {
    questionBank: []
  };
  getQuestions = () => {
    Querys().then(questions => {
      this.setState({
        questionBank: questions
      });
    });
  }
  componentDidMount() {
    this.getQuestions();
    console.log("[Questions] are Mount!", this.state.questionBank);
  }
  render() {
    return (
      <div className="App">
        <div className="QuizeSec">
          <div className="HeaderPage">
            <h4>Quiz App</h4>
          </div>
          <div className="questionsSec">
            {this.state.questionBank.length > 0 &&
              this.state.questionBank.map(({ questions, answers, correct, questionId }) =>
                (
                  <QuestionBox question={questions} options={answers} key={questionId} />
                ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
