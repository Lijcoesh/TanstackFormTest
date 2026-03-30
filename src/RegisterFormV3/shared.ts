import { formOptions } from "@tanstack/react-form";
import type { RegisterFormvalues } from "./RegisterFormValues";

export const defaultValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0,
    nationality: 'Netherlands'
} as RegisterFormvalues

export const registerFormOpts = formOptions({
    defaultValues,
})