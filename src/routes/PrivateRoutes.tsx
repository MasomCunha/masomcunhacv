import React from "react";
import {
    Routes,
    Route, 
    Navigate
} from "react-router-dom";
import DetailCV from "../pages/DetailCV";

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="/detailCV" element={<DetailCV />} />
            <Route
                path="*"
                element={<Navigate to="/detailCV" replace />}
            />
        </Routes>
    )
}