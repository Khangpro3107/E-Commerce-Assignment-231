const initialUser = {};

export const user = (state = initialUser, action) => {
  const user = action.payload;
  switch (action.type) {
    case "LOGIN":
      return user;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
