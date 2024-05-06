import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
      <main className='dark text-foreground bg-background'>                   
          <App />  
      </main>      
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
); 
