import type { Column } from "@shared/components/DataTable/model/config";
import type { Client } from "./types";

export const columns = [
    { key: "id", title: "ID" },
    { key: "full_name", title: "ФИО" },
    { key: "phone", title: "Телефон" },
    { key: "email", title: "Электронная почта" },
    { key: "address", title: "Адрес" },
] satisfies Column<Client>[];

export const clients = [
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