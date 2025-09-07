import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { SerieForm } from './components/SerieForm/SerieForm.tsx'
import { SerieList } from './components/SerieList/SerieList.tsx'
import { Home } from './components/Home/Home.tsx'
import { Sobre } from './components/Sobre/Sobre.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route index element={<Home />}  />
      <Route path="cadastro" element={<SerieForm />} />
      <Route path="serie/:id" element={<SerieForm />} />
      <Route path="lista" element={<SerieList />} />
      <Route path="sobre" element={<Sobre />} />
      </Route>
      
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
