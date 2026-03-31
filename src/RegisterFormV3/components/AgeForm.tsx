import { validators } from "../../RegisterFormV4/Validators/validators";
import { withForm } from "../form/form";
import { registerFormOpts } from "../form/shared";

export const AgeForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <form.AppField 
                    name="age" 
                    validators={{
                        ...validators.isRequired('Age'),
                        ...validators.isPositiveNumber('Age'),
                    }}
                >
                    {(field) => {
                        return (
                            <field.TextInput
                                id="age"
                                label="Age"
                                type="number"
                            />
                        );
                    }}
                </form.AppField>
            </>
        )
    }
})