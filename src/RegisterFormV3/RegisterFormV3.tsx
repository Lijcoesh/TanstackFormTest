import "../Styling/RegisterForm.css"
import { registerFormOpts } from "./shared"
import { useAppForm } from "./form"

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
                    <form.AppField 
                        name="password" 
                        validators={{
                            onChange: ({value}) => {
                                if(value.trim() === '') {
                                    return 'Password is required'
                                }
                                if(value.length < 6) {
                                    return 'Password must be at least 6 characters'
                                }
                            },
                        }}
                    >
                        {(field) => {
                            return (
                                <field.TextInput
                                    id="password"
                                    label="Password"
                                />
                            );
                        }}
                    </form.AppField>
                    <form.AppField 
                        name="confirmPassword" 
                        validators={{
                            onChangeListenTo: ['password'],
                            onChange: ({value, fieldApi}) => {
                                if(value.trim() === '') {
                                    return 'Confirm Password is required'
                                }
                                if(value !== fieldApi.form.getFieldValue('password')) {
                                    return 'Passwords do not match'
                                }
                            },
                        }}
                    >
                        {(field) => {
                            return (
                                <field.TextInput
                                    id="confirmPassword"
                                    label="Confirm Password"
                                />
                            );
                        }}
                    </form.AppField>
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
                                />
                            );
                        }}
                    </form.AppField>
                    <form.AppField 
                        name="nationality">
                        {(field) => {
                            return (
                                <field.TextInput
                                    id="nationality"
                                    label=" Nationality"
                                />
                            );
                        }}
                    </form.AppField>
                </div>

                <div className="form-row actions">
                    <button className="submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}