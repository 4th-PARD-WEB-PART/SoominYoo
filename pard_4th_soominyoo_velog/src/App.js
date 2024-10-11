import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import FeedPage from './Pages/FeedPage/FeedPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import EditPage from './Pages/EditPage/EditPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes 사용 */}
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </RecoilRoot>
        
      </div>
    </Router>
  );
}

export default App;