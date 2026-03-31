import { withForm } from "../../form/form";
import { registerFormOpts } from "../../form/shared";
import { validators } from "../../Validators/validators";

export const EmailForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return(
            <form.AppField 
                name="email"
                validators={{
                    ...validators.isRequired('Email'),
                    ...validators.isEmail('Email'),
                }}
            >
                {(field) => {
                    return (
                        <field.TextInput
                            id="email"
                            label="Email"
                        />
                    );
                }}
            </form.AppField>
        )
    }
})