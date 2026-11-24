import * as z from "zod";
import { ClientFormSchema } from "./schema"

export type ClientFormValues = z.infer<typeof ClientFormSchema>;