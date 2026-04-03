import { withForm } from "../../../form/form";
import { registerFormOpts } from "../../../form/shared";

export const AgeForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <form.AppField 
                    name="age" 
                    validators={{
                        onChange: ({value}) => {
                            if(value.toString().trim() === '') {
                                return 'Age is required'
                            }
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
                                min={0}
                            />
                        );
                    }}
                </form.AppField>
            </>
        )
    }
})