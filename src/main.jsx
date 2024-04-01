//React Imports
import React from 'react'
import App from './App.jsx'

//React Router Imports
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

//Style Imports
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
