import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvioder } from './Context/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <AuthProvioder>
      <App />
    </AuthProvioder>
  </React.StrictMode>,
)
