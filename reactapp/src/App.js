// src/App.jsx
import React from "react";
import { useAuth } from "react-oidc-context";

function App() {
    const auth = useAuth();

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        console.log(auth);
        return (
            <div>
                Hello {auth.user?.profile.preferred_username}{" "}
                <button onClick={() =>
                    auth.removeUser()
                        .then(() => {
                            auth.signoutRedirect(
                                {
                                    post_logout_redirect_uri: 'https://localhost:3000',
                                    id_token_hint: auth.user.id_token
                                })
                        })
                } >Log out</button>
            </div >
        );
    }

    return <button onClick={() =>
        auth.signinPopup({ prompt: 'login' })
        // void auth.signinRedirect()
    }
    >Log in</button>;
}

export default App;