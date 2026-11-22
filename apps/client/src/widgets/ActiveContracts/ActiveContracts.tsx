import React from "react";

import SimpleList from "@shared/components/SimpleList";

const contracts = [
    { id: 1, title: "Договор №1", subtitle: "Базовый", value: "450,00 ₽" },
    { id: 2, title: "Договор №2", subtitle: "Комфорт", value: "650,00 ₽" },
    { id: 3, title: "Договор №3", subtitle: "Максимум", value: "950,00 ₽" },
    { id: 4, title: "Договор №4", subtitle: "Гигабит", value: "1 200,00 ₽" },
];

const ActiveContracts = (): React.JSX.Element => {
    return (
        <section className="widget-list">
            <h2>
                Активные договоры по тарифам
            </h2>

            <SimpleList items={contracts} />
        </section>
    );
};

export default ActiveContracts;