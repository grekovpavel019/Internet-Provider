import React from "react";

import { Link } from "react-router";

import { ROLES } from "@packages/models/auth";

const AuthForm = (): React.JSX.Element => {
    return (
        <form className="w-[min(420px,100%)] p-8.75 flex flex-col gap-3 rounded-(--radius-card) shadow-(--shadow-card) bg-(--color-surface)">
            <h1 className="h1">
                Авторизация
            </h1>

            <p className="text-[.95rem] text-(--color-text-secondary) mb-2.5">
                Панель управления интернет-провайдером
            </p>

            <div className="flex flex-col gap-2.5">
                <label htmlFor="roleSelect" className="text-[.8rem] font-bold">Выберите роль</label>
                <select id="roleSelect" className="p-2.5 rounded-(--radius-input) outline-none border border-(--color-border) text-(--color-text-secondary) focus:border-(--color-primary)">
                    {
                        Object.entries(ROLES).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))
                    }
                </select>
                
                <Link to="/main" type="submit" className="px-3.75 py-2.75 text-[.9rem] text-(--color-primary-foreground) rounded-(--radius-button) bg-(--color-primary) transition-[filter] duration-100 ease-linear hover:brightness-95">
                    Войти в систему
                </Link>
            </div>
        </form>
    );
};

export default AuthForm;