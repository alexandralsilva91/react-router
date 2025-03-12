import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import CountryList from './Components/CountryList/CountryList.jsx'
import CountryPage from './Components/CountryPage.jsx';
import NavBar from './Components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="about-us" element={<h1>Homepage</h1>} />
        <Route path="country" element={<h1>Country</h1>} />
        <Route path="country/:countryName" element={<CountryPage />} />
        {/*<Route path="country/:currency" element={<}*/}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

{/* To Do List:
  1) fazer rota
  2) component page
  3) ler pais e onde da rota
  4) ir buscar dados a API (UseEffect Fetch)
    URL: https://restcountries.com/v3.1/name/portugal
  5) pego na info recebida e imprimo no ecra
  */}


