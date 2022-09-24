import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import routes from "./routes";

const TOEKN = "TOEKN";
const DARK_MODE = "DARK_MODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOEKN)));
export const logUserIn = (token: string) => {
  localStorage.setItem(TOEKN, token);
  isLoggedInVar(true);
};
export const logUserOut = (history: any) => {
  localStorage.removeItem(TOEKN);
  isLoggedInVar(false);
  history?.replace({ pathname: routes.home, state: null });
};

export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
