import { createContext, useReducer } from "react";
const localStorage = window.localStorage

export const themeContext = createContext();

const localStorageKey = "theme";

let initialState;

try {
  initialState = JSON.parse(localStorage.getItem(localStorageKey)) || { darkMode: true };
} catch (e) {
  initialState = { darkMode: true }
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      const newState = { darkMode: !state.darkMode };
      try {
        localStorage.setItem(localStorageKey, JSON.stringify(newState));
      } catch (e) {
        console.log("Error while setting item to localstorage", e);
      }
      return newState;
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
