import React from "react";

import DashboardStats from "@widgets/DashboardStats";
import RecentPayments from "@widgets/RecentPayments";

const DashboardPage = (): React.JSX.Element => {
    return (
        <>
            <h1 className="h1 mb-5">Панель управления</h1>

            <DashboardStats />

            <RecentPayments />
        </>
    );
};

export default DashboardPage;