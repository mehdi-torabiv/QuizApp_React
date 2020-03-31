import React, { Component } from 'react';
import "./App.scss";
import Querys from './assets/Querys/Querys';
class App extends Component {
  state = {
    questionBank: []
  };
  getQuestions = () => {
    Querys().then(question => {
      this.setState({
        questionBank: question
      });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="QuizeSec">
          <div className="HeaderPage">
            <h4>Quiz App</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
