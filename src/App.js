import React from "react";
import { Provider } from "react-redux";
import Getprodict from "./components/Getprodict.js";
import store from "./redux/store/store.js";

function App() {
  return (
    <div className="container">
      <h1>add to card react</h1>
      <Provider store={store}>
        <Getprodict />
      </Provider>
    </div>
  );
}
export default App;
