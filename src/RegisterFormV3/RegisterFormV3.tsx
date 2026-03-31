import "../Styling/RegisterForm.css"
import { registerFormOpts } from "./form/shared"
import { useAppForm } from "./form/form"
import { PasswordForm } from "./components/passwordForm"

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
                        {/* use form.AppField because it provides the context needed for the text input component */}
                        <form.AppField
                            name="username" 
                            validators={{
                                onChange: ({value}) => {
                                    if(value.trim() === '') {
                                        return 'Username is required'
                                    }
                                },
                            }}
                        >
                            {(field) => {
                                return (
                                    <field.TextInput 
                                        id="username" 
                                        label="Username"
                                    />
                                );
                            }}
                        </form.AppField>
                        <form.AppField 
                            name="email"
                            validators={{
                                onChange: ({value}) => {
                                    if(value.trim() === '') {
                                        return 'Email is required'
                                    }
                                    if(!/\S+@\S+\.\S+/.test(value)) {
                                        return 'Email is invalid'
                                    }
                                },
                            }}
                        >
                            {(field) => {
                                return (
                                    <field.TextInput
                                        id="email"
                                        label="Email"
                                    />
                                );
                            }}
                        </form.AppField>
                        <PasswordForm form={form} />
                        <form.AppField 
                            name="age" 
                            validators={{
                                onChange: ({value}) => {
                                    if(value <= 0) {
                                        return 'Age must be greater than 0'
                                    }
                                },
                            }}
                        >
                            {(field) => {
                                return (
                                    <field.TextInput
                                        id="age"
                                        label="Age"
                                        type="number"
                                    />
                                );
                            }}
                        </form.AppField>
                        <form.AppField 
                            name="nationality">
                            {(field) => {
                                return (
                                    <field.DropDown
                                        id="nationality"
                                        label="Nationality"
                                    />
                                );
                            }}
                        </form.AppField>
                    </div>
                    <form.FormButton />
                </form>
            </form.AppForm>
        </div>
    )
}