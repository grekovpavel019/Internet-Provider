import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;

    children: React.ReactNode;
    title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps): React.JSX.Element | null => {
    return (
        isOpen ? (
            <div className="flex justify-center items-center fixed inset-0 z-50 bg-black/50">
                <div className="w-full max-w-lg p-6 rounded-(--radius-card) shadow-(--shadow-panel) bg-(--color-surface)">
                    <div className="flex justify-between items-center">
                        <h1 className="h1">{title}</h1>
                        <button
                            onClick={onClose}
                            type="button"
                            className="p-2 rounded-sm text-xl text-(--color-primary-foreground) bg-(--color-danger) leading-none hover:bg-(--color-danger-hover)"
                        >
                            ✕
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        ) : null

    );
};

export default Modal;