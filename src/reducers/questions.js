import { GET_QUESTIONS,SAVE_ANSWER } from '../actions/questions'


export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
        return action.questions
    case SAVE_ANSWER:
    	return {
        ...state,
        [action.question]: {
          ...state[action.question],
          ['optionOne']: {
            ...state[action.question]['optionOne'],
            votes: state[action.question]['optionOne'].votes.concat([action.user]),
          },
        },
      };
    default:
      return state;
  }
}