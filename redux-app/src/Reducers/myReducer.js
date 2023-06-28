const initialData = {
    user:""
    
  };
  
  const myReducer = (state = initialData , action) => {
    switch (
      action.type 
    ) {
      case "users":
        state = {
          ...state,
          user: action.payload,
        };
        break;
      case "user":
        state = {
          ...state,
          user: action.payload,
        };
        break;
      // case "comp1":
      //   state = {
      //     ...state,
      //     comp1: action.payload,
      //   };
      //   break;
      // case "comp2":
      //   state = {
      //     ...state,
      //     comp1: action.payload,
      //   };
      //   break;
    }
  
    return state;
  };
  
  export default myReducer;