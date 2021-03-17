import React from "react";
import ReactDOM from "react-dom";

// importando redux - react-redux
import { Provider } from "react-redux";
import store from "./redux/store";

// importando react-router-dom
import { BrowserRouter, Route } from "react-router-dom";

//importando component Main
import Main from "./react/components/Main";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
