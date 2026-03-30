import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";

export const {useAppForm, withForm, withFieldGroup} = createFormHook({
    fieldContext: fieldContext,
    formContext: formContext,
    fieldComponents: {}, // use to pass inputs, checkboxes, selects etc. to the form, so you can use them in your form with the <form.Field> component
    formComponents: {}, // use to pass things related to the form, like a submit button, to the form, so you can use them in your form with the <form.Form> component
})