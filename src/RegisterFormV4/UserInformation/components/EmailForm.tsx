import { withForm } from "../../form/form";
import { registerFormOpts } from "../../form/shared";
import { EmailValidators } from "../../Validators/EmailValidators";
import { validators } from "../../Validators/validators";

export const EmailForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return(
            <form.AppField 
                name="email"
                validators={{
                    ...validators.isRequired('Email'),
                    ...EmailValidators.isEmail('Email'),
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