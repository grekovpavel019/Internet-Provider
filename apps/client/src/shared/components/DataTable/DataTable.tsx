import React from "react";

interface Column {
    key: string;
    title: string;
}

type DataTableProps = {
    columns: Column[];
    data: Record<string, unknown>[]
}

const DataTable = ({ columns, data }: DataTableProps): React.JSX.Element => {
    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map((value) => (
                            <th key={value.key}>{value.title}</th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    data.map((value, index) => (
                        <tr key={index}>
                            {
                                columns.map((column) => (
                                    <td key={column.key}>{String(value[column.key]) ?? ""}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default DataTable;