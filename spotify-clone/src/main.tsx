import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import SongDetail from './pages/SongDetail.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import Favorites from './pages/Favorites.tsx'
import CategoryDetail from './pages/CategoryDetail.tsx'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/song/:id' element={<SongDetail />}/>
                <Route path='/category/:id' element={<CategoryDetail />}/>
                <Route path='favorites' element={<Favorites />}/>
                <Route path='*' element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
