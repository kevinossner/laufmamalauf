import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import UsersListPage from './pages/UsersListPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<UsersListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
