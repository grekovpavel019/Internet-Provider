import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import "./styles/reset.css"
import "./styles/variables.css"
import "./styles/utility.css"
import "./styles/index.css"

import AuthPage from "@pages/AuthPage";

import MainLayout from "./layouts/MainLayout";
import DashboardPage from "@pages/DashboardPage";
import ReportsPage from "@pages/ReportsPage";

const App = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <AuthPage />} />
                
                <Route element={ <MainLayout /> }>
                    <Route path="/main" element={ <DashboardPage /> } />
                    <Route path="/reports" element={ <ReportsPage /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;