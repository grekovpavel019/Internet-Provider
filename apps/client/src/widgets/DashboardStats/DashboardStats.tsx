import React from "react";

import Card from "@shared/components/Card";

const DashboardStats = (): React.JSX.Element => {
    return (
        <section className="widget-stats">
            <Card
                label="Клиентов"
                hint="Всего в базе"
            >
                36
            </Card>

            <Card
                label="Активных договоров"
                hint="Текущие подключения"
            >
                30
            </Card>

            <Card
                label="Платежей"
                hint="Сумма: 24 350,00 ₽"
            >
                30
            </Card>

            <Card
                label="Открытых обращений"
                hint="Ожидают обработки"
            >
                8
            </Card>
        </section>
    );
};

export default DashboardStats;