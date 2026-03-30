import "../Styling/RegisterForm.css"
import { useForm } from "@tanstack/react-form"

interface RegisterFormvalues {
    username: string
    email: string
    password: string
    confirmPassword: string
    age: number
    nationality: string
}

export default function RegisterForm() {
    const form = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            age: 0,
            nationality: 'Netherlands'
        } as RegisterFormvalues,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return(
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form className="register-form" 
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <div className="form-row">
                    <form.Field name="username">
                        {(field) => (
                            <>
                                <label htmlFor="username">Username</label>
                                <input className="form-input" 
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </>
                        )}
                    </form.Field>
                </div>

                <div className="form-row actions">
                    <button className="submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}