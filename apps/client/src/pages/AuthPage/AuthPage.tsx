import React from "react";
import AuthForm from "@features/auth/AuthForm";

const AuthPage = (): React.JSX.Element => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-backgound">
            <h1>
                Авторизация
            </h1>
            <AuthForm />
        </main>
    );
};

export default AuthPage;