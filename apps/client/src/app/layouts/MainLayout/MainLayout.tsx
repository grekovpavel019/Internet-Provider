import React from "react";

import { Outlet } from "react-router";

import SidePanel from "@widgets/SidePanel";

const MainLayout = (): React.JSX.Element => {
    return (
        <div className="h-screen flex flex-row">
            <SidePanel />

            <main className="w-full">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;