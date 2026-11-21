import React from "react";

import { navigation } from "../model/navigation";

import { Link, NavLink } from "react-router";

const SidePanel = (): React.JSX.Element => {
    return (
        <aside className="w-60 shrink-0 bg-(--color-sidebar) text-(--color-sidebar-text)">
            <Link to="/main" className="p-6.25 flex items-center gap-4 outline-none">
                <span className="text-[2rem] text-(--color-primary-hover)">
                    ◉
                </span>


                <div className="flex flex-col">
                    <h1 className="text-[21px] text-(--color-sidebar-foreground) tracking-tight font-bold">Provider</h1>
                    <small className="text-[.7rem]">Интерент-провадер</small>
                </div>
            </Link>

            <div className="nav-caption">УПРАВЛЕНИЕ</div>

            <nav className="px-2.5 flex flex-col gap-[3px]">
                {
                    navigation.map((group) => (
                        <React.Fragment key={group.title}>
                            <div className="nav-caption">
                                {group.title}
                            </div>

                            {
                                group.items.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) => 
                                            isActive ? "nav-link active" : "nav-link"
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </nav>
        </aside>
    );
};

export default SidePanel;