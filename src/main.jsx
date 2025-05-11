import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { stor } from '../stor.js';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={stor}>
     <App />
  </Provider>
   
)
