import React from "react";

import { Outlet } from "react-router";

import SidePanel from "@widgets/SidePanel";
import Header from "@widgets/Header";

const MainLayout = (): React.JSX.Element => {
    return (
        <div className="h-screen flex flex-row overflow-hidden">
            <SidePanel />

            <div className="flex flex-col flex-1 min-w-0">
                <Header />

                <main className="min-h-0 flex-1 overflow-y-auto px-(--page-padding-x) py-(--page-padding-y)">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;