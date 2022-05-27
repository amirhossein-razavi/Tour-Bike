import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, ThemeProvider, MuiThemeProvider, createMuiTheme, jssPreset } from "@material-ui/core/styles";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({

  direction: "rtl",
});


ReactDOM.render(
  <StylesProvider jss={jss}>
    <MuiThemeProvider theme={theme} jss={jss}>
      <ThemeProvider theme={theme}>

        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>

  </StylesProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
