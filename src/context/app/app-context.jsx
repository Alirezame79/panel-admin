import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./app-reducer";
import { useTranslation } from "react-i18next";

const AppContext = createContext();
const initialState = {
  language: localStorage.getItem('language') || 'en'
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  function changeLanguage(language) {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: language })
  }

  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem('language', state.language);
  }, [state.language])

  return (
    <AppContext.Provider value={{ ...state, changeLanguage }}>
      {children}
    </AppContext.Provider>);
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { useAppContext, AppProvider }
// useAppContext in consumers
// AppProvider in Main app