export const LOGGED_USER = 'LOGGED_USER'

export const loggedUser = data => dispatch => {
  dispatch({
    type: LOGGED_USER,
    payload: data,
  })
}
