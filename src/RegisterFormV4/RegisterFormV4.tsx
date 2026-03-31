import "../Styling/RegisterForm.css"
import { AdditionalInfo } from "./AdditionalInfo/AdditionalInfo"
import { useAppForm } from "./form/form"
import { registerFormOpts } from "./form/shared"
import { UserInformation } from "./UserInformation/UserInformation"

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
            <p>form created using TanStack Form with separate components, using a reusable component for password fields</p>
            <form.AppForm>
                <form className="register-form" 
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <div className="form-row">
                        <UserInformation form={form} />
                        <AdditionalInfo form={form} />
                    </div>
                    <form.FormButton />
                </form>
            </form.AppForm>
        </div>
    )
}