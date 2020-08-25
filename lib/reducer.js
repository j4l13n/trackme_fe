export const reducer = (prevState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
        return {
            ...prevState,
            token: action.payload.token,
            user: action.payload.user,
            isAuthenticated: true,
        };
    case "SIGN_OUT_USER":
        return {
            ...prevState,
            token: null,
            user: {},
            isAuthenticated: false,
        };
    case 'SET_AGREEMENT':
        return {
          ...prevState,
          userAgreement: action.payload,
        };
    default:
      return prevState;
  }
};
