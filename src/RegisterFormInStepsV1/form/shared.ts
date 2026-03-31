import { formOptions } from "@tanstack/react-form";
import type { RegisterFormvalues } from "../../RegisterFormV3/RegisterFormValues";

export const defaultValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0,
    nationality: 'Netherlands'
} as RegisterFormvalues

{/* all components using registerFormOpts will be tied to the same form state, so they can share values and validation */}
export const registerFormOpts = formOptions({
    defaultValues,
})