import { _saveQuestionAnswer } from '../utils/_DATA.js'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

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

export function handleSaveAnswer(user,question,answer) {
  return (dispatch) => {
    dispatch(saveAnswer(user,question,answer))

    return _saveQuestionAnswer(user,question,'optionOne')
      .catch((e) => {
        alert('The was an error saving the answer. Try again.')
      })
  }
}