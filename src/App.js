import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/darkmode/theme'; 
import { GlobalStyles } from 'utils/darkmode/global';
import { useDarkMode } from 'utils/useDarkMode';

import Home from 'pages/Home';
import Live from 'pages/Live';
import RoomList from 'pages/RoomList';
import MultiRoom from 'pages/MultiRoom';

function App(props) {
  const [theme, toggleTheme] = useDarkMode();
  props = {theme, toggleTheme}

  props = {
    theme,
    toggleTheme
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Router>
          <Route path="/" component={() => <Home {...props} /> } exact />
          <Route path="/live-stream/:id" component={() => <Live {...props} />} />
          <Route path="/list-room" component={() => <RoomList {...props} />} />
          <Route path="/multi-room" component={() => <MultiRoom {...props} />} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
