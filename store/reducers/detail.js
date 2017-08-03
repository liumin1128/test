const initState = {
  zanList: [],
};
function news(state = initState, action) {
  switch (action.type) {
    case 'detail/save':
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

export default news;
