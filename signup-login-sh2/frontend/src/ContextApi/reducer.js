export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "signupdta":
      return { ...state, signupdata: payload };
    case "logindata":
      return { ...state, logindata: payload };
    default:
      return state;
  }
}
