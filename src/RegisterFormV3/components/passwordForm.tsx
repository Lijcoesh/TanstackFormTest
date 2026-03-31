import { withForm } from "../form/form";
import { registerFormOpts } from "../form/shared";

export const PasswordForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
        <>
            <form.AppField 
                name="password" 
                validators={{
                    onChange: ({value}) => {
                        if(value.trim() === '') {
                            return 'Password is required'
                        }
                        if(value.length < 6) {
                            return 'Password must be at least 6 characters'
                        }
                    },
                }}
            >
                {(field) => {
                    return (
                        <field.TextInput
                            id="password"
                            label="Password"
                            type="password"
                        />
                    );
                }}
            </form.AppField>
            <form.AppField 
                name="confirmPassword" 
                validators={{
                    onChangeListenTo: ['password'],
                    onChange: ({value, fieldApi}) => {
                        if(value.trim() === '') {
                            return 'Confirm Password is required'
                        }
                        if(value !== fieldApi.form.getFieldValue('password')) {
                            return 'Passwords do not match'
                        }
                    },
                }}
            >
                {(field) => {
                    return (
                        <field.TextInput
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                        />
                    );
                }}
            </form.AppField>
        </>
        )
    }
})