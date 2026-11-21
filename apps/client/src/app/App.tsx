import React from "react";

import "./styles/reset.css"
import "./styles/variables.css"
import "./styles/utility.css"
import "./styles/index.css"

import AuthPage from "@pages/AuthPage";

const App = (): React.JSX.Element => {
    return (
        <AuthPage />
    );
};

export default App;