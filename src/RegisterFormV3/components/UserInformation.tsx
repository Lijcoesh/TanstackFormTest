import { withForm } from "../form/form";
import { registerFormOpts } from "../form/shared";
import { EmailForm } from "./EmailForm";
import { PasswordForm } from "./passwordForm";
import { UsernameForm } from "./UsernameForm";

export const UserInformation = withForm({
    ...registerFormOpts,
    render: ({ form }) => {
        return (
            <>
                <UsernameForm form={form} />
                <EmailForm form={form} />
                <PasswordForm form={form} />
            </>
        )
    }
})