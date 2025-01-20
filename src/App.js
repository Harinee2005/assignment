import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Home from './components/Home';
import UserDetail from './components/UserDetail';

function App() {
  const [isLightTheme, setTheme] = useState(false);

  const toggleTheme = () => setTheme(prevTheme => !prevTheme);

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<UserDetail />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
