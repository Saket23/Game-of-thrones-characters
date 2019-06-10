import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import reducer from "./reducers";
import "./styles.css";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

const middlewares = [thunkMiddleware];
const store = createStore(reducer, applyMiddleware(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={CharacterList} />
        <Route path="/:dataId" exact component={Character} />
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
