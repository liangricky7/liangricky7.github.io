import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
// Public pages
const Home = lazy(() => import('./pages/Home.jsx'))

export const AppRoutes = () => {    
    return (
        <>
            <Suspense fallback={null}>
                <Routes>
                    {/* public pages */}
                    <Route path="/" element={<Home />} />
                    {/* the else statement (wow) */}
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </Suspense>   
        </>
    )
}
