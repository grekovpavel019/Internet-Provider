import React from "react";

import DataTable from "@shared/components/DataTable";
import TableControls from "@shared/components/TableControls";
import Modal from "@shared/components/Modal";
import type { Column } from "@shared/components/DataTable/model/config";
import { useCrudModal } from "@shared/components/Modal/model/useCrudModal";
import Button from "@shared/components/Button";

const columns = [
    { key: "id", title: "ID" },
    { key: "full_name", title: "ФИО" },
    { key: "phone", title: "Телефон" },
    { key: "email", title: "Электронная почта" },
    { key: "address", title: "Адрес" },
] satisfies Column<Client>[];

const clients = [
    { id: 1, full_name: "Иван Иванов", phone: "+79991000001", email: "client1@example.com", address: "г. Казань, ул. Центральная, д. 1" },
    { id: 2, full_name: "Мария Петрова", phone: "+79991000002", email: "client2@example.com", address: "г. Казань, ул. Центральная, д. 2" },
    { id: 3, full_name: "Алексей Смирнов", phone: "+79991000003", email: "client3@example.com", address: "г. Казань, ул. Центральная, д. 3" },
    { id: 4, full_name: "Анна Кузнецова", phone: "+79991000004", email: "client4@example.com", address: "г. Казань, ул. Центральная, д. 4" },
    { id: 5, full_name: "Дмитрий Волков", phone: "+79991000005", email: "client5@example.com", address: "г. Казань, ул. Центральная, д. 5" },
    { id: 6, full_name: "Ольга Соколова", phone: "+79991000006", email: "client6@example.com", address: "г. Казань, ул. Центральная, д. 6" },
    { id: 7, full_name: "Николай Морозов", phone: "+79991000007", email: "client7@example.com", address: "г. Казань, ул. Центральная, д. 7" },
    { id: 8, full_name: "Елена Новикова", phone: "+79991000008", email: "client8@example.com", address: "г. Казань, ул. Центральная, д. 8" },
    { id: 9, full_name: "Павел Фёдоров", phone: "+79991000009", email: "client9@example.com", address: "г. Казань, ул. Центральная, д. 9" },
    { id: 10, full_name: "Анастасия Орлова", phone: "+79991000010", email: "client10@example.com", address: "г. Казань, ул. Центральная, д. 10" },
];

type Client = (typeof clients)[number];

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