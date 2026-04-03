import { withForm } from "../../form/form"
import { registerFormOpts } from "../../form/shared"

{/* use form.AppField instead of form.AppForm because it provides the context needed for the text input component */}
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
                        if(value.length < 3) {
                            return 'Username must be at least 3 characters'
                        }
                        if(value.length > 20) {
                            return 'Username must be less than 20 characters'
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