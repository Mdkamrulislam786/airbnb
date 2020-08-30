import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Home from "./Components/Home/Home";
import Header from "./Components/Home/Header/Header";
import Footer from "./Components/Home/Footer/Footer";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        {/* header */}
        <Header />
        <Switch>
          {/* home */}

          <Route path="/search">
            {/* search-page */}
            <SearchPage />
            {/* .... */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* Footer. */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
