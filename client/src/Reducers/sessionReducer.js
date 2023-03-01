const initialState = {
    user: null,
    isAuthenticated: false
  };
  
  const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: !!action.payload
        };
      default:
        return state;
    }
  };
  
  export default sessionReducer;