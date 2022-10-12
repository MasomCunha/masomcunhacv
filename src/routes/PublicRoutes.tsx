import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import HomeCV from "../pages/HomeCV";

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="/homecv" element={<HomeCV />} />
            <Route
                path="*"
                element={<Navigate to="/homecv" replace />}
            />
        </Routes>
    )
}