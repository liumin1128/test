const initState = {
  list: [],
  detail: {},
};
function news(state = initState, action) {
  switch (action.type) {
    case 'news/save':
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
