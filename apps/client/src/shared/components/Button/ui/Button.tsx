import React from "react";

import type { ButtonVariants } from "../model/types";

import { variantStyles } from "./styles";

type ButtonProps = React.ComponentPropsWithRef<"button"> & {
    variant?: ButtonVariants;
}

const Button = (props: ButtonProps): React.JSX.Element => {

    const { 
        children, 
        variant = "primary", 
        className,
        ...rest
    } = props;

    return (
        <button
            className={`${variantStyles[variant]} ${className ? className : ""}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;