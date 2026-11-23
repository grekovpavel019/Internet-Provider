import { useState } from "react";

export type ModalState<T> = 
    | { type: "add" }
    | { type: "edit", item: T }
    | null;

export const useCrudModal = <T>() => {

    const [modal, setModal] = useState<ModalState<T>>(null);

    const openAdd = () => {
        setModal({ type: "add" })
    }

    const openEdit = (item: T) => {
        setModal({ type: "edit", item })
    }

    const close = () => {
        setModal(null);
    }

    return {
        modal,
        openAdd,
        openEdit,
        close
    }
}