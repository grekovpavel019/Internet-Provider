import type { ButtonVariants } from "../model/types";

export const variantStyles: Record<ButtonVariants, string> = {
    primary: "bg-(--color-primary) text-white",
    secondary: "bg-(--color-secondary) text-white",
    outline: "border bg-transparent",
    danger: "bg-(--color-danger) text-white",
    ghost: "bg-transparent text-(--color-primary)"
}