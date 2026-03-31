import { withForm } from "../../form/form";
import { registerFormOpts } from "../../form/shared";

export const EmailForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return(
            <form.AppField 
                name="email"
                validators={{
                    onChange: ({value}) => {
                        if(value.trim() === '') {
                            return 'Email is required'
                        }
                        if(!/\S+@\S+\.\S+/.test(value)) {
                            return 'Email is invalid'
                        }
                    },
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