import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
// import Login from "../components/Login";
// import Admin from "../components/Admin";
import useLocalStorage from "../hooks/useLocalStorage";

const GlobalSyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`;

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth");

  // const app = !auth ? <Login /> : auth === "admin" ? <Admin /> : children;

  return (
    <GlobalContext.Provider value={{ auth, setAuth }}>
      <GlobalSyle />
      {children}
    </GlobalContext.Provider>
  );
};
