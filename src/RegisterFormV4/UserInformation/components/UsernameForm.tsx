import { withForm } from "../../form/form"
import { registerFormOpts } from "../../form/shared"
import { StringValidators } from "../../Validators/StringValidators"
import { validators } from "../../Validators/validators"

{/* use form.AppField because it provides the context needed for the text input component */}
export const UsernameForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <form.AppField
                name="username" 
                validators={{
                    ...validators.isRequired('Username'),
                    ...StringValidators.minLength(3, 'Username'),
                    ...StringValidators.maxLength(20, 'Username'),
                }}
            >
                {(field) => {
                    return (
                        <field.TextInput 
                            id="username" 
                            label="Username"
                        />
                    );
                }}
            </form.AppField>
        )
    }
})