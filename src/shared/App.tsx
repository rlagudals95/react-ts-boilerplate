import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//import ScrollToTop from "./ScrollToTop";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <ReactContainer>
      <GlobalStyle />
      <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={MainPage} /> 
          </Switch>
      </ConnectedRouter>
    </ReactContainer>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body{
  background-color: #FFF;
  width: 100%;
  overflow-x: hidden;
  margin: 0 0 0 0;
  padding: 0;
  box-sizing: border-box;
}`;

const ReactContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  overflow-x: hidden;
  padding: 0;
  box-sizing: border-box;
`;
