import { withForm } from "../../form/form"
import { registerFormOpts } from "../../form/shared"
import { AgeForm } from "./components/AgeForm"
import { NationalityForm } from "./components/NationalityForm"

export const Step3 = withForm({
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