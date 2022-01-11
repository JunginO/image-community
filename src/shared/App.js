import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux/configureStore";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import { Grid } from "../elements";
function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>

        <Router history={history}>
          <Routes>
            <Route path="/" exact component={PostList} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Routes>
        </Router>
      </Grid>
    </React.Fragment>
  );
}

export default App;
