import React from "react";

import "./styles/index.scss"
import "./styles/reset.scss"
import "./styles/variables.scss"

import AuthPage from "@pages/AuthPage";

const App = (): React.JSX.Element => {
    return (
        <AuthPage />
    );
};

export default App;