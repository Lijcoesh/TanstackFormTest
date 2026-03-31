import { withForm } from "./form/form";
import { registerFormOpts } from "./form/shared";
import { AgeForm } from "./AgeForm";
import { NationalityForm } from "./NationalityForm";

export const AdditionalInfo = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <AgeForm form={form} />
                <NationalityForm form={form} />
            </>
        )
    }
})