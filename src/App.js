import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dpages from "./dpages";

function App() {
  return (
    <div>
      <Router>
      <Switch>
         <Route path="/" exact>
           <Redirect to="/home"/>
          </Route>

          <Route path="/:pages">
            <Dpages/>
          </Route>
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
