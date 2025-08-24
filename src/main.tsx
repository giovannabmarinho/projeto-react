import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { SerieForm } from './components/SerieForm/SerieForm.tsx'
import { SerieList } from './components/SerieList/SerieList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route index  />
      <Route path="cadastro" element={<SerieForm />} />
      <Route path="serie/:id" element={<SerieForm />} />
      <Route path="lista" element={<SerieList />} />
      </Route>
      
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
