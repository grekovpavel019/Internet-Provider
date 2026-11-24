import React from "react";

import DataTable from "@shared/components/DataTable";
import TableControls from "@shared/components/TableControls";
import Modal from "@shared/components/Modal";
import { useCrudModal } from "@shared/components/Modal/model/useCrudModal";
import Button from "@shared/components/Button";

import type { Client } from "@entities/client/model/types";
import { clients, columns } from "@entities/client/model/static";

const ClientsPage = (): React.JSX.Element => {

    const { openAdd, modal, openEdit, close } = useCrudModal<Client>()

    const getRowKey = (row: Client) => {
        return row.id;
    }

    const rowActions = (client: Client) => {
        return (
            <div className="pr-2 inline-flex gap-2">
                <Button
                    onClick={() => openEdit(client)}
                    className="text-(--color-primary)"
                    variant="ghost"
                >
                        Изменить
                </Button>
                <Button 
                    variant="ghost"
                    className="text-(--color-danger)"
                >
                    Удалить
                </Button>
            </div>
        )
    }

    return (
        <>
            <h1 className="h1 mb-6">Клиенты</h1>

            <TableControls 
                onAdd={openAdd}
            />

            <Modal
                isOpen={modal !== null}
                onClose={close}
                title={modal?.type === "add" ? "Добавить клиента" : "Изменить клиента"}
            >
                {
                    <div>Формочка</div>
                }
            </Modal>

            <DataTable 
                columns={columns}
                data={clients}

                getRowKey={getRowKey}

                actions={rowActions}
            />
        </>
    );
};

export default ClientsPage;