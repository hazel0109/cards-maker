import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import MainContainer from './components/mainContainer/mainContainer';
import { AuthContextProvider } from './components/useAuth/useAuth';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='*' exact element={<MainContainer />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
