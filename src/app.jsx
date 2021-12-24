import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import MainContainer from './components/mainContainer/mainContainer';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='*' exact element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
