import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
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
        <ConnectedRouter history={history}>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
