import { withForm } from "../../RegisterFormV4/form/form";
import { registerFormOpts } from "../../RegisterFormV4/form/shared";

export const AgeForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <form.AppField 
                    name="age" 
                    validators={{
                        onChange: ({value}) => {
                            if(value <= 0) {
                                return 'Age must be greater than 0'
                            }
                        },
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