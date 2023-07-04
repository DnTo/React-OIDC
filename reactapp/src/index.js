import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "react-oidc-context";
import App from "./App";
import { createRoot } from "react-dom/client";
import Layout from "./pages/Layout";
import Nav from "./components/Nav";

const oidcConfig = {
    authority: "https://129.146.141.93:8182/realms/NC",
    client_id: "s9",
    redirect_uri: "https://localhost:3000",
    revokeAccessTokenOnSignout: true,
    // checkLoginIframe: false,
    popup_redirect_uri: 'https://localhost:3000'
};


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <AuthProvider {...oidcConfig}>
        <Layout />
    </AuthProvider>,
);


