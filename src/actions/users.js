
export const GET_USERS = 'GET_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  }
}


function saveUserAnswer(user,question,answer) {
	return {
		type: SAVE_USER_ANSWER,
		user,
		question,
		answer
	}
}


export function handleSaveUserAnswer(user,question,answer) {
  return (dispatch) => {
    dispatch(saveUserAnswer(user,question,answer))
  }
}