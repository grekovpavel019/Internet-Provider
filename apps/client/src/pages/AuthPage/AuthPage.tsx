import React from "react";
import AuthForm from "@features/auth/AuthForm";


const AuthPage = (): React.JSX.Element => {
    return (
        <main className="h-screen flex justify-center items-center overflow-hidden">
            <AuthForm />
        </main>
    );
};

export default AuthPage;