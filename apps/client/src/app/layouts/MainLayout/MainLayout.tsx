import React from "react";

import { Outlet } from "react-router";

import SidePanel from "@widgets/SidePanel";

const MainLayout = (): React.JSX.Element => {
    return (
        <div>
            <SidePanel />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;