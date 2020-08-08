import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Mentors from './pages/Mentors';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/mentors" component={Mentors} />
    </BrowserRouter>
  )
}

export default Routes;