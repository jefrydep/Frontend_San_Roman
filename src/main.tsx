import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import Layout from './comonents/layout/Layout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='flex flex-row'>

    <Layout/>
     <AppRouter/>
    </div>

    </BrowserRouter>
    
  </React.StrictMode>,
)
