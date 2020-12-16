const initialState = {
  username: "",
  profilePic: "",
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER +"_FULFILLED":
      const { username, profilePic } = action.payload;
      return { username, profilePic };
    case LOGOUT:
      return (state = initialState);
    default:
      return state;
  }
}
