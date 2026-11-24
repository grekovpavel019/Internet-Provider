import * as z from "zod"

export const ClientFormSchema = z.object({
    full_name: z.string().trim().min(3, "Минимум 3 символа"),
    phone: z.string().trim().regex(
        /^\+[1-9]\d{9,14}$/,
        "Введите номер в формате +79991234567"
    ),
    email: z.email(),
    address: z.string().trim().min(3, "Минимум 3 символа")
});