import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import List from "./components/List";
import PhoneDetail from "./components/PhoneDetail";
import "./App.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Switch>
          <Route exact path="/:id" component={PhoneDetail} />
          <Route exact path="/" component={List} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
