
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';


import React from 'react'

function App() {
  return (
    <Router>
        <div className="App">
          <Navigation />
          <Routes>
                <Route exact path='/' element={< HomePage />}></Route>
                <Route path='/mamas/' element={< UsersListPage />}></Route>
        </Routes>
       </div>
    </Router>
);
}

export default App

