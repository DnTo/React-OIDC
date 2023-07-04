// src/App.jsx
import React from "react";
import { useAuth } from "react-oidc-context";
import Nav from "./components/Nav";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
    BrowserRouter
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Secured from "./pages/Secured";
import Unathorized from "./pages/Unauthorized";
import RequireAuth from "./components/auth/RequireAuth";


function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="secured" element={<RequireAuth><Secured /></RequireAuth>} />
            <Route path="unathorized" element={<Unathorized />} />
        </Routes>

    )


}

export default App;