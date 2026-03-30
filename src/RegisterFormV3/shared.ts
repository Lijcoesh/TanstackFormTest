import { formOptions } from "@tanstack/react-form";

export const defaultValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0,
    nationality: 'Netherlands'
}

export const registerFormOpts = formOptions({
    defaultValues,
})