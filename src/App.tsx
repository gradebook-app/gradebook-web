import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Redirect from="/sitemap.xml" to="/static/sitemap.xml" />
        <Route path="/static/sitemap.xml"/>
           <Redirect from="/robots.xml" to="/static/sitemap.xml" />
        <Route path="/static/robots.xml" />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
