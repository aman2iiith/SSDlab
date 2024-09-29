import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change here
import ProfilePage from './components/ProfilePage/ProfilePage';
import SearchPage from './components/Search/Search';

const App = () => {
  return (
    <Router>
      <div className="app">
      <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );  
};

export default App;