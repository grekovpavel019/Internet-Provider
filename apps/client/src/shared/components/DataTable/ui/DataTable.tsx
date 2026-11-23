import React from "react";

import type { Column } from "../model/config";

type DataTableProps<T> = {
    columns: Column<T>[];
    data: T[],
    actions?: (row: T) => React.ReactNode;
    getRowKey: (row: T) => string | number;
}

const DataTable = <T,>({ columns, data, actions, getRowKey }: DataTableProps<T>): React.JSX.Element => {
    return (
        <div className="overflow-x-auto rounded-(--radius-panel) border border-(--color-border-soft) text-left text-[13px] text-(--color-foreground)">
            <table className="w-full min-w-[700px] border-collapse">
                <thead>
                    <tr>
                        {
                            columns.map((value) => (
                                <th key={value.key} className="px-4 py-3.5 font-semibold whitespace-nowrap border-b border-(--color-border) bg-(--color-surface)">
                                    {value.title}
                                </th>
                            ))
                        }
                        {actions && <th className="py-3.5 font-semibold whitespace-nowrap border-b border-(--color-border) bg-(--color-surface)">Действия</th>}
                    </tr>
                </thead>

                <tbody className="bg-(--color-surface)">
                    {
                        data.map((value) => (
                            <tr key={getRowKey(value)} className="h-14 border-b border-(--color-border) transition-colors hover:bg-slate-50">
                                {
                                    columns.map((column) => (
                                        <td key={column.key} className="px-4 py-3 align-middle">
                                            {String(value[column.key])}
                                        </td>
                                    ))
                                }
                                {actions && <td>{actions(value)}</td>}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;