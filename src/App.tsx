import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

const reload = () => window.location.reload();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Redirect from="/sitemap.xml" to="/static/sitemap.xml" />
        <Route path="/static/sitemap.xml" render={() => {
          reload();
          return null;
        }} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
