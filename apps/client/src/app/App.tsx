import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import "./styles/reset.css"
import "./styles/variables.css"
import "./styles/utility.css"
import "./styles/index.css"

import AuthPage from "@pages/AuthPage";

const App = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <AuthPage />} />
                <Route path="/panel" />
            </Routes>
        </BrowserRouter>
    );
};

export default App;