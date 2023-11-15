let initialState = {count: 1}



function reducer(state = initialState, action) {
  if(action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    };
  }
  if(action.type === 'DECREMENT') {
    return {
      count: state.count - 1 >0 ? state.count -1 : 1
      
    }
  }

  return state;
}

export default reducer;