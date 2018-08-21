import { GET_USERS ,SAVE_USER_ANSWER} from '../actions/users'


export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
        return action.users
    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.question]: 'optionTwo',
          },
        },
      };
    default:
      return state;
  }
}