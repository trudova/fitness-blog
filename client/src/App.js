import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/about/About";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <TopBar/>
   <Switch>
     <Route exact path="/">
           <Home/>
      </Route>
       <Route  path="/about">
            <About/>
      </Route>
       <Route path="/register">
       { user? <Home/> : <Register/>}
       </Route>

        <Route path="/login">
       { user? <Home/> : <Login/>}
       </Route>

        <Route path="/write">
       {user? <Write/> : <Login/>}
       </Route>

       <Route path="/settings">
       { user? <Settings/> : <Login/>}
       </Route>

        <Route path="/post/:postId">
        <Single/>
       </Route>
   </Switch>

    </Router>
  );
}

export default App;
