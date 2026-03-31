import "../Styling/RegisterForm.css"
import { registerFormOpts } from "./form/shared"
import { useAppForm } from "./form/form"    
import { PasswordForm } from "./components/passwordForm"
import { AgeForm } from "./components/ageForm"
import { NationalityForm } from "./components/NationalityForm"
import { EmailForm } from "./components/EmailForm"
import { UsernameForm } from "./components/UsernameForm"

export default function RegisterForm() {
    const form = useAppForm({
        ...registerFormOpts,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return(
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <p>form created using TanStack Form</p>
            <form.AppForm>
                <form className="register-form" 
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <div className="form-row">
                        <UsernameForm form={form} />
                        <EmailForm form={form} />
                        <PasswordForm form={form} />
                        <AgeForm form={form} />
                        <NationalityForm form={form} />
                    </div>
                    <form.FormButton />
                </form>
            </form.AppForm>
        </div>
    )
}