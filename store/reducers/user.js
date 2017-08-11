const initState = {
  token: '',
};
function user(state = initState, action) {
  switch (action.type) {
    case 'user/save':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default user;
