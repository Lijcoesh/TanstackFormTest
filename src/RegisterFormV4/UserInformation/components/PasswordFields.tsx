import { withFieldGroup } from "../../form/form";

{/* Defines the types */}
type PasswordFields = {
    password: string;
    confirmPassword: string;
}

{/* Defines the default values for the fields in this group */}
const defaultValues: PasswordFields = {
    password: '',
    confirmPassword: '',
}

export const PasswordFields = withFieldGroup({
    defaultValues: defaultValues,
    render: function Render({group}) {
        return (
            <>
                <group.AppField 
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
                </group.AppField>
                <group.AppField 
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
                </group.AppField>
            </>
        )
    }
})