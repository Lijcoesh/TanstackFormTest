import { withForm } from "../../form/form"
import { registerFormOpts } from "../../form/shared"
import { PasswordFields } from "./Password/PasswordFields"

export const Step2 = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <PasswordFields 
                    form={form}
                    fields={{
                        password: 'password',
                        confirmPassword: 'confirmPassword'
                    }}
                />
            </>
        )
    }
})