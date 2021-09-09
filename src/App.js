import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dpages from "./dpages";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Router path="/" exact>
              <Redirect to="/home" />
            </Router>

            <Route path="/:pages">
              <Dpages />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
