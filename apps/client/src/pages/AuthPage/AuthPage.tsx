import React from "react";
import AuthForm from "@features/auth/AuthForm";

import styles from "./AuthPage.module.scss";

const AuthPage = (): React.JSX.Element => {
    return (
        <main className={styles.page}>
            <AuthForm />
        </main>
    );
};

export default AuthPage;