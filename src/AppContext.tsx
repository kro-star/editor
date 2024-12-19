import React, { createContext, Dispatch } from 'react';

interface Task {
    id: number;
    name: string;
    description: string;
    answer: any;
}

interface AppState {
    isLoading: boolean;
    consoleOutput: string;
    language: string;
    code: string;
    numberTask: number;
    textTask: string;
    answer: any;
    tasks: Task[];
}

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<Action>;
}


type Action =
    | { type: 'SET_LOADING', payload: boolean }
    | { type: 'SET_OUTPUT', payload: string }
    | { type: 'SET_LANGUAGE', payload: string }
    | { type: 'SET_CODE', payload: string }
    | { type: 'SET_TASK', payload: number }
    | { type: 'SET_TASK_TEXT', payload: string }
    | { type: 'SET_ANSWER', payload: any}


const initialState: AppState = {
  isLoading: false,
  consoleOutput: '',
  language: 'javaScript',
  code: '//Введите сюда код',
  numberTask: 0,
    textTask: '',
  answer: null,
    tasks: [
      {
          id: 0,
          name: 'Задание 1',
          description: 'Выведи на экран текст: Hello, world!',
          answer: 'Hello, world!',
      },
      {
          id: 1,
          name: 'Задание 2',
          description: 'Есть 2 строки "abc" и "def". \n\r Выведи на экран строку "abcdef" ',
          answer: 'abcdef'
      }
  ]
};


const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => undefined, // Placeholder dispatch
});

export { AppContext, initialState };
export type { AppState, Action, Task, AppContextProps};