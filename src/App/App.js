import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Current from '../Home/Home';
import Members from '../Members/Members';
import Allies from '../Allies/Allies';
import Tips from '../Tips/Tips';
import styles from './App.css';

const App = () => (
  <div>
    <Navigation />
    <main className={styles.main}>
      <Route exact path="/" component={Current} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/allies" component={Allies} />
      <Route exact path="/tips" component={Tips} />
    </main>
  </div>
)

export default App;
