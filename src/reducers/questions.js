import { GET_QUESTIONS,SAVE_ANSWER ,ADD_QUESTION} from '../actions/questions'


export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
        return action.questions
    case SAVE_ANSWER:
    	return {
        ...state,
        [action.question]: {
          ...state[action.question],
          [action.answer]: {
            ...state[action.question][action.answer],
            votes: state[action.question][action.answer].votes.concat([action.user]),
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}