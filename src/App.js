import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import TopBar from "./topbar/TopBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home/>: <Register/>}
        </Route>
        <Route path="/login">
          {user ? <Home/>: <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write />: <Register/>}
        </Route>
        <Route path="/settings">
          {user ? <Settings/>: <Register/>}
        </Route>
      </Switch>
      <Route path="/post/:postId">
          <Single/>
        </Route>
    </Router>
  );
}

export default App;