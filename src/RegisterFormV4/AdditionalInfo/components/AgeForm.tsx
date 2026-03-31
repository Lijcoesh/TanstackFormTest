import { withForm } from "../../form/form";
import { registerFormOpts } from "../../form/shared";
import { NumberValidators } from "../../Validators/NumberValidators";
import { validators } from "../../Validators/validators";

export const AgeForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <form.AppField 
                    name="age" 
                    validators={{
                        ...validators.isRequired('Age'),
                        ...NumberValidators.isPositiveNumber('Age'),
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