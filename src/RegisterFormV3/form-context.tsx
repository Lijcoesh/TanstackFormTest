import { createFormHookContexts } from "@tanstack/react-form";

// createFormHookContexts is used to create a context for the form and fields, 
// so you can use the useFormContext and useFieldContext hooks to access the form and field state and actions in your components
export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();