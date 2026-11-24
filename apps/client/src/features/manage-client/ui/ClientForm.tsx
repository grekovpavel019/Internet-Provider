import React from "react";

import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";

import type { ClientFormValues } from "../model/types";

import Input from "@shared/components/Input";
import Button from "@shared/components/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { ClientFormSchema } from "../model/schema";

type ClientFormProps = {
    mode: "add" | "edit"
    initialValues?: ClientFormValues;
    onSubmit: (values: ClientFormValues) => void;
}

const ClientForm = ({ mode, initialValues, onSubmit }: ClientFormProps): React.JSX.Element => {
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ClientFormValues>({
        defaultValues: {
            email: initialValues?.email ?? "",
            full_name: initialValues?.full_name ?? "",
            address: initialValues?.address ?? "",
            phone: initialValues?.phone ?? ""
        },
        
        resolver: zodResolver(ClientFormSchema)
    });

    const submitForm: SubmitHandler<ClientFormValues> = (data) => onSubmit(data);
    
    const submitError: SubmitErrorHandler<ClientFormValues> = (data) => console.log(data);

    return (
        <form 
            onSubmit={handleSubmit(submitForm, submitError)} 
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 [&_input]:m"
        >
            <Input 
                label="ФИО"
                type="text"
                id="client-full-name"
                {...register("full_name")}
                error={errors.full_name?.message}
            />

            <Input 
                label="Телефон"
                type="tel"
                id="client-phone"
                {...register("phone")}
                error={errors.phone?.message}
            />

            <Input 
                label="Электронная почта"
                type="email"
                id="client-email"
                {...register("email")}
                error={errors.email?.message}
            />

            <Input 
                label="Адрес"
                type="text"
                id="client-address"
                {...register("address")}
                error={errors.address?.message}
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