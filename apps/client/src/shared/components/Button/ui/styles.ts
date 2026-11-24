import type { ButtonVariants } from "../model/types";

export const variantStyles: Record<ButtonVariants, string> = {
    primary: "h-(--button-height) cursor-pointer rounded-(--radius-button) bg-(--color-primary) px-4 text-sm text-(--color-primary-foreground) transition-colors hover:bg-(--color-primary-hover)",
    secondary: "h-(--input-height) cursor-pointer rounded-(--radius-button) border border-(--color-primary) px-4 text-sm text-(--color-primary) transition-colors hover:bg-(--color-surface-hover)",
    outline: "h-(--button-height) cursor-pointer rounded-(--radius-button) border border-(--color-border) px-4 text-sm text-(--color-foreground) transition-colors hover:bg-(--color-surface-hover)",
    danger: "p-2 rounded-sm text-xl text-(--color-primary-foreground) bg-(--color-danger) leading-none hover:bg-(--color-danger-hover)",
    ghost: "bg-transparent hover:underline"
}