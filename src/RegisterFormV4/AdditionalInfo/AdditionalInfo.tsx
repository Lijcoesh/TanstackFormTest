import { withForm } from "../form/form";
import { registerFormOpts } from "../form/shared";
import { AgeForm } from "./components/AgeForm";
import { NationalityForm } from "./components/NationalityForm";

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