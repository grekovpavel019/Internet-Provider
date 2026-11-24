import React from "react";

import type { ClientFormValues } from "../model/types";

import Input from "@shared/components/Input";
import Button from "@shared/components/Button";

type ClientFormProps = {
    mode: "add" | "edit"
    initialValues?: ClientFormValues;
    onSubmit: (values: ClientFormValues) => void;
}

const ClientForm = ({ mode, initialValues, onSubmit }: ClientFormProps): React.JSX.Element => {
    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit("rkbtyn")
            }} 
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
            <Input 
                label="ФИО"
                name="full_name"
                type="text"
                id="client-full-name"
            />

            <Input 
                label="Телефон"
                name="phone"
                type="tel"
                id="client-phone"
            />

            <Input 
                label="Электронная почта"
                name="email"
                type="email"
                id="client-email"
            />

            <Input 
                label="Адрес"
                name="address"
                type="text"
                id="client-address"
            />

            <Button 
                type="submit" 
                className="col-span-full"
            >
                    {mode === "add" ? "Добавить" : "Изменить"}
            </Button>
        </form>
    );
};

export default ClientForm;