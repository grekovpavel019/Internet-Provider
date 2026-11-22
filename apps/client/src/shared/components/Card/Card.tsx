import React from "react";

type CardProps = {
    label: string;
    children: string;
    hint?: string;
}

const Card = ({ label, children, hint }: CardProps): React.JSX.Element => {
    return (
        <div className="p-5 rounded-(--radius-card) bg-(--color-surface) border border-(--color-border-soft) shadow-(--shadow-card)">
            <div>{label}</div>
            <strong className="h1 block mt-3">{children}</strong>
            {hint && (
                <div className="mt-1.5">{hint}</div>
            )}
        </div>
    );
};

export default Card;