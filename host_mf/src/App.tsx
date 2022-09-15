import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import './App.scss';

import Home from 'home_mf/Home';
import AppShell from './components/AppShell/AppShell';
import { navLinks, routes } from './routes'

function App() {
  return (
    <div className="App">
      <AppShell routes={routes} navLinks={navLinks}></AppShell>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));