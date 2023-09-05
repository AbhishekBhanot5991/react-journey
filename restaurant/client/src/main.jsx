import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer} from 'react-toastify'; // Import ToastContainer component
import 'react-toastify/dist/ReactToastify.css'; // Add this line to import styles
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <ToastContainer /> 
  </React.StrictMode>,
)
