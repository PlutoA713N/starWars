import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from "./../App";

const RoutesConfig = () => {
    return(
    <Router>
        <Routes>
        <Route path="/*" element={<Navigate to="/people" replace />} />
                <Route  path='/people' element={<App />} />
        </Routes>
    </Router>
    )
}

export default RoutesConfig

