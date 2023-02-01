import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import Store from "./reducers";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
