export const ROLES = {
    admin: "Админ",
    user: "Пользователь",
    guest: "Гость"
}

export type Role = keyof typeof ROLES;

export interface User {
    role: Role;
}