import "../Styling/RegisterForm.css"
import { registerFormOpts } from "./form/shared"
import { useAppForm } from "./form/form"
import { UserInformation } from "./components/UserInformation"
import { AdditionalInfo } from "./components/AdditionalInfo"

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
            <div>
                <h4>Form Features:</h4>
                <ul>
                    <li>Using TanStack Form</li>
                </ul>
                <h4>Changes since last version:</h4>
                <ul>
                    <li>Seperated fields into seperate components</li>
                </ul>
            </div>
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