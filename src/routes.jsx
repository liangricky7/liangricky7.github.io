import { Routes, Route, Navigate } from "react-router-dom"
// Public pages
import Home from './pages/Home'
export const AppRoutes = () => {    
    return (
        <>
            <Routes>
                {/* public pages */}
                <Route path="/" element={<Home />} />
                {/* the else statement (wow) */}
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </>
    )
}
