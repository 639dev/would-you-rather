import { GET_QUESTIONS } from '../actions/questions'


export default function users(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
        return action.questions
    default:
      return state;
  }
}