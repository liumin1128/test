const initState = {
  token: '46vt63K8lIu44RJd18qWwL87V4vrHdHj',
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
