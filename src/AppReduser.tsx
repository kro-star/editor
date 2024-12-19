import { AppState, Action } from './AppContext';

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_OUTPUT':
      return { ...state, consoleOutput: action.payload };
    case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
    case 'SET_CODE':
      return { ...state, code: action.payload };
    case 'SET_TASK':
        return { ...state, numberTask: action.payload };
    case 'SET_TASK_TEXT':
        return {...state, textTask: action.payload}
    case 'SET_ANSWER':
      return { ...state, answer: action.payload };
    default:
      return state;
  }
};

export default appReducer;