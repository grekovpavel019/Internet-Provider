import "dotenv/config";
import * as z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().int().min(1).max(65535),
    HOST: z.string().min(1)
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
    console.error("Ошибка переменных окружения", result.error.format());
    process.exit(1);
}

export const env = result.data;