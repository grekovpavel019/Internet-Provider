import React from "react";

import Card from "@shared/components/Card";

const ReportsStats = (): React.JSX.Element => {
    return (
        <section className="widget-stats">
            <Card label="Всего поступило платежей">
                24 350,00 ₽
            </Card>

            <Card label="Платежи за текущий месяц">
                13 000,00 ₽
            </Card>

            <Card label="Активных договоров">
                30
            </Card>

            <Card label="Нерешённых обращений">
                8
            </Card>
        </section>
    );
};

export default ReportsStats;