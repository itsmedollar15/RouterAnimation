import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FadeInAnimation } from 'router-animation';
// import your contactpage and aboutpage


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <FadeInAnimation>
            <HomePage />
          </FadeInAnimation>
        </Route>
        <Route path="/about">
          <FadeInAnimation>
            <AboutPage />
          </FadeInAnimation>
        </Route>
        <Route path="/contact">
          <FadeInAnimation>
            <ContactPage />
          </FadeInAnimation>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
