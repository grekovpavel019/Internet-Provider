import { create } from "zustand";

import type { UserStore } from "./types";

export const useUser = create<UserStore>((set) => ({
    role: null,
    login: (role) => set({ role }),
    logout: () => set({ role: null })
}));