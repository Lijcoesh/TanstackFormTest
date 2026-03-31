import { withForm } from "../../form/form"
import { registerFormOpts } from "../../form/shared"
import { EmailForm } from "./EmailForm"
import { UsernameForm } from "./UsernameForm"

export const Step1 = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <UsernameForm form={form} />
                <EmailForm form={form} />
            </>
        )
    }
})