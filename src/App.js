import React from "react";
import Router from './routes/Router';
import { GlobalState } from './global/GlobalState';
import theme from "./components/theme/theme";
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ThemeProvider>)
}

export default App;
