import { withForm } from "../../form/form";
import { registerFormOpts } from "../../form/shared";

export const NationalityForm = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <form.AppField 
                name="nationality">
                {(field) => {
                    return (
                        <field.DropDown
                            id="nationality"
                            label="Nationality"
                        />
                    );
                }}
            </form.AppField>
        )
    }
})