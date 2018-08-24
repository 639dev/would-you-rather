import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'
import { getInitialData } from '../utils/api'

export function handleInitialData () {
  return (dispatch) => {
  	dispatch(showLoading());
    return getInitialData()
      .then(({ users,questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(hideLoading());
      })
  }
}