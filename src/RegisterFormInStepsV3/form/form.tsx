import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import SubmitButton from "../formComponents/SubmitButton";
import StepButton from "../formComponents/StepButton";
import ErrorSummary from "../formComponents/ErrorSummary";
import TextInput from "../../RegisterFormInStepsV1/fieldComponents/TextInput";
import Dropdown from "../../RegisterFormInStepsV1/fieldComponents/Dropdown";

export const {useAppForm, withForm, withFieldGroup} = createFormHook({
    fieldContext: fieldContext,
    formContext: formContext,
    fieldComponents: {
        TextInput,
        Dropdown,
    }, // use to pass inputs, checkboxes, selects etc. to the form, so you can use them in your form with the <form.Field> component
    formComponents: {
        SubmitButton,
        StepButton,
        ErrorSummary,
    }, // use to pass things related to the form, like a submit button, to the form, so you can use them in your form with the <form.Form> component
})