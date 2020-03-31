import React, { Component } from 'react';
import "./App.scss";
import Querys from './assets/Querys/Querys';
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';
class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    response: 0
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
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      response: 0
    });
  }
  computeAnswer = (answer, correct) => {
    if (answer === correct) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5
    })
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
              this.state.response < 5 &&
              this.state.questionBank.map(({ questions, answers, correct, questionId }) =>
                (
                  <QuestionBox question={questions}
                    options={answers}
                    key={questionId}
                    SelectedAnswer={answer => this.computeAnswer(answer, correct)}
                  />
                ))}
          </div>
          {
            this.state.response === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null
          }
        </div>
      </div>
    );
  }
}

export default App;
