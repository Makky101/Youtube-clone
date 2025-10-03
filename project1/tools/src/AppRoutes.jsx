import { Routes, Route } from "react-router-dom"
import Upload from "./upload.jsx"
import Home from "./home"
function AppRoutes(){
    return(
        <>
            <Routes>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default AppRoutes