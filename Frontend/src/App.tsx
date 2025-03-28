import React from 'react';

import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBookPage/SearchBookPage';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home'>
            <HomePage />
          </Route>

          <Route path='/search'>
            <SearchBooksPage />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
