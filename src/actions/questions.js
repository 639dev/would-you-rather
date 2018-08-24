import { _saveQuestionAnswer,_saveQuestion} from '../utils/_DATA.js'
import { saveUserQuestion } from './users'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'


export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

function saveAnswer(user,question,answer) {
  return {
    type: SAVE_ANSWER,
    question,
    answer,
    user
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleSaveAnswer(user,question,answer) {
  return (dispatch) => {
    dispatch(saveAnswer(user,question,answer))

    return _saveQuestionAnswer(user,question,answer)
      .catch((e) => {
        alert('The was an error saving the answer. Try again.')
      })
  }
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return _saveQuestion(question)
      .then(question =>  {
        console.log(question)
        dispatch(addQuestion(question))
        dispatch(saveUserQuestion(question.id,question.author))
        }
      )
      .catch((e) => {
        alert(e)
      })
  }
}