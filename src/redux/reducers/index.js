import { LOGGED_USER } from "../actions";

const initialState = {
  userIsLogged: false,
  userData: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_USER:
      const { isLogged, dataUser } = action.payload;
      return { ...state, userIsLogged: isLogged, userData: dataUser };
    default:
      return state;
  }
}

export default userReducer;
