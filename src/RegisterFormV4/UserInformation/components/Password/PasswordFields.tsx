import { withFieldGroup } from "../../../form/form";
import type { PasswordType } from "./PasswordType";

{/* Defines the default values for the fields in this group */}
const defaultValues: PasswordType = {
    password: '',
    confirmPassword: '',
}

{/* Instead of being tied to a specific form, this component is now a reusable field group that can be used in any form. */}
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