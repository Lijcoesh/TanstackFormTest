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
            alert(JSON.stringify(values, null, 2))
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

                <div className="form-row actions">
                    <button className="submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}