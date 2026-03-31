import { withFieldGroup } from "../../form/form";
import { StringValidators } from "../../Validators/StringValidators";
import { validators } from "../../Validators/validators";

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

{/* Instead of being tied to a specific form, this component is now a reusable field group that can be used in any form. */}
export const PasswordFields = withFieldGroup({
    defaultValues: defaultValues,
    render: function Render({group}) {
        return (
            <>
                <group.AppField 
                    name="password" 
                    validators={{
                        ...validators.isRequired('Password'),
                        ...StringValidators.minLength(6, 'Password'),
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
                        ...validators.isRequired('Confirm Password'),
                        onChange: ({value, fieldApi}) => {
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