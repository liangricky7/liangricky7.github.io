import { Routes, Route, Navigate } from "react-router-dom"
// Public pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { Navbar } from "./components/Navbar"
export const AppRoutes = () => {    
    return (
        <>
        <Navbar/>
            <Routes>
                {/* public pages */}
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/* the else statement (wow) */}
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </>
    )
}
