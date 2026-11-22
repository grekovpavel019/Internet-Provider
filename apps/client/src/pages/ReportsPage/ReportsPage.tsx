import React from "react";

import ReportsStats from "@widgets/ReportsStats";
import ActiveContracts from "@widgets/ActiveContracts";

const ReportsPage = (): React.JSX.Element => {
    return (
        <>
            <h1 className="h1 mb-5">Отчёты</h1>

            <ReportsStats />

            <ActiveContracts />
        </>
    );
};

export default ReportsPage;