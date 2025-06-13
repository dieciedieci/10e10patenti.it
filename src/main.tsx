import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
//import App from './App.tsx'
import Home from './pages/Home.tsx';
import MobileApp from './pages/MobileApp.tsx';
import Marketing from './pages/Marketing.tsx';
import Branding from './pages/Branding.tsx';
import Contacts from './pages/Contacts.tsx';
import Layout from './Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="mobile-app" element={<MobileApp />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="branding" element={<Branding />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
