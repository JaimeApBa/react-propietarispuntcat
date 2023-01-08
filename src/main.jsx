import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { PropietarispuntcatApp } from './PropietarispuntcatApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PropietarispuntcatApp />
    </BrowserRouter>
  </React.StrictMode>,
)
