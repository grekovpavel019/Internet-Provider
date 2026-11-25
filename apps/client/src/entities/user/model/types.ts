import type { Role } from "@packages/contracts"

export type UserStore = {
    role: Role | null;
    login: (role: Role) => void;
    logout: () => void;
}