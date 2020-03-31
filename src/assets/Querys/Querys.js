const Qbank = [
  {
    "questions": "What is React.js?",
    "answers": ["Freamwork", "Library", "Language", "No one"],
    "correct": "Library",
    "questionId": 1
  },
  {
    "questions": "which one Redux working like?",
    "answers": ["State", "Components", "Functions", "Import"],
    "correct": "State",
    "questionId": 2
  },
  {
    "questions": "which company build React.js?",
    "answers": ["Google", "Amazon", "Macrosoft", "Facebook"],
    "correct": "Facebook",
    "questionId": 3
  },
  {
    "questions": "React help us as?",
    "answers": ["UI", "backend", "Security", "All of them"],
    "correct": "UI",
    "questionId": 4
  }
]
export default (n = 5) =>
  Promise.resolve(Qbank.sort(() => 0.5 - Math.random()).slice(0, n));