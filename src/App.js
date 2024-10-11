import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Contacts from "./components/Contacts";
import About from "./components/About";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/contact">
            <Contacts />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetail />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
