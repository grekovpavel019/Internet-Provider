import React from "react";

type InputProps = React.ComponentPropsWithRef<"input"> & {
    label: string;
    error?: React.ReactNode;
    containerClassName?: string;
};

const Input = (props: InputProps): React.JSX.Element => {

    const { id, label, error = "", containerClassName, ...rest } = props;

    return (
        <div className={`${containerClassName} flex flex-1 flex-col gap-1.5`}>
            <label
                htmlFor={id}
                className="text-xs font-medium text-(--color-text-secondary)"
            >
                {label}
            </label>
            <input
                id={id}
                className="h-(--input-height) w-full rounded-(--radius-input) border border-(--color-border) bg-(--color-surface) px-3 text-sm text-(--color-foreground) outline-none transition-colors placeholder:text-(--color-text-muted) focus:border-(--color-focus) focus:shadow-(--focus-ring)"
                {...rest}
            />
            <span className="min-h-5 font-bold text-[0.8rem] text-(--color-danger)">{error ? error : " "}</span>
        </div>
    );
};

export default Input;