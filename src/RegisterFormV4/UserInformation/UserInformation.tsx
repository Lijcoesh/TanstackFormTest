import { EmailForm } from "./components/EmailForm";
import { withForm } from "../form/form";
import { registerFormOpts } from "../form/shared";
import { UsernameForm } from "./components/UsernameForm";
import { PasswordFields } from "./components/Password/PasswordFields";

export const UserInformation = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <UsernameForm form={form} />
                <EmailForm form={form} />
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