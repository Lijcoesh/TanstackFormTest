import { withForm } from "../../form/form"
import { registerFormOpts } from "../../form/shared"

{/* use form.AppField because it provides the context needed for the text input component */}
export const UsernameForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <form.AppField
                name="username" 
                validators={{
                    onChange: ({value}) => {
                        if(value.trim() === '') {
                            return 'Username is required'
                        }
                    },
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