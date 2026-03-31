import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import TextInput from "../../RegisterFormV4/fieldComponents/TextInput";
import Dropdown from "../../RegisterFormV4/fieldComponents/Dropdown";
import FormButton from "../formComponents/Button";

export const {useAppForm, withForm, withFieldGroup} = createFormHook({
    fieldContext: fieldContext,
    formContext: formContext,
    fieldComponents: {
        TextInput,
        Dropdown,
    }, // use to pass inputs, checkboxes, selects etc. to the form, so you can use them in your form with the <form.Field> component
    formComponents: {
        FormButton,
    }, // use to pass things related to the form, like a submit button, to the form, so you can use them in your form with the <form.Form> component
})