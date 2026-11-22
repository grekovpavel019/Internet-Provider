import React from "react";

import { useLocation } from "react-router";

import { navigation } from "@shared/config/navigation";

const Header = (): React.JSX.Element => {

    const location = useLocation();

        const currentPage = navigation
        .flatMap(group => group.items)
        .find(item => item.path === location.pathname);

        const currentPageLabel = (currentPage?.label ?? "Неизвестная страница")
        

    return (
        <header className="px-8 h-17.5 flex items-center justify-between text-(--color-text-secondary) bg-(--color-surface) border-b border-(--color-border-soft)">
            <span>{currentPageLabel}</span>
            <span>Администратор</span>
        </header>
    );
};

export default Header;