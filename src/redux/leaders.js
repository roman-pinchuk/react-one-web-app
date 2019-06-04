import * as ActTyp from "./ActionTypes";

export const Leaders = (
  state = { isLoading: true, errMess: null, leaders: [] },
  action
) => {
  switch (action.type) {
    
    case ActTyp.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload
      };

    case ActTyp.LEADERS_LOADING:
      return { ...state, isLoading: true, errMess: null, leaders: [] };

    case ActTyp.LEADERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    
    default:
      return state;
  }
};
