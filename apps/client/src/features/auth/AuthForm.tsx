import React from "react";

import { ROLES } from "@packages/models/auth";

import styles from "./AuthForm.module.scss";

const AuthForm = (): React.JSX.Element => {
    return (
        <form className={styles.form}>
            <h1 className={styles.h1}>
                Авторизация
            </h1>

            <p className={styles.p}>
                Панель управления интернет-провайдером
            </p>

            <div className={styles["select-area"]}>
                <label htmlFor="roleSelect">Выберите роль</label>
                <select id="roleSelect" className="">
                    {
                        Object.entries(ROLES).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))
                    }
                </select>
                
                <button type="submit">
                    Войти в систему
                </button>
            </div>
        </form>
    );
};

export default AuthForm;