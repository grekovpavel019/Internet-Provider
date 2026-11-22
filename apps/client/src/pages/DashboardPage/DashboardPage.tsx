import React from "react";

import Card from "@shared/components/Card";

const DashboardPage = (): React.JSX.Element => {
    return (
        <div>
            <h1 className="h1 mb-5">Панель управления</h1>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4">
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
            </div>
        </div>
    );
};

export default DashboardPage;