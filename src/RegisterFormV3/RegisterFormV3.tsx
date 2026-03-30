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
                    <form.Field name="email"
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
                        {(field) => (
                            <>
                                <label htmlFor="email">Email</label>
                                <input className="form-input" 
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.length > 0 && (
                                    <em>{field.state.meta.errors.join(', ')}</em>
                                )}
                            </>
                        )}
                    </form.Field>
                    <form.Field name="password" validators={{
                        onChange: ({value}) => {
                            if(value.trim() === '') {
                                return 'Password is required'
                            }
                            if(value.length < 6) {
                                return 'Password must be at least 6 characters'
                            }
                        },
                    }}>
                        {(field) => (
                            <>
                                <label htmlFor="password">Password</label>
                                <input className="form-input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.length > 0 && (
                                    <em>{field.state.meta.errors.join(', ')}</em>
                                )}
                            </>
                        )}
                    </form.Field>
                    <form.Field name="confirmPassword" validators={{
                        onChangeListenTo: ['password'],
                        onChange: ({value, fieldApi}) => {
                            if(value.trim() === '') {
                                return 'Confirm Password is required'
                            }
                            if(value !== fieldApi.form.getFieldValue('password')) {
                                return 'Passwords do not match'
                            }
                        },
                    }}>
                        {(field) => (
                            <>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input className="form-input"
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.length > 0 && (
                                    <em>{field.state.meta.errors.join(', ')}</em>
                                )}
                            </>
                        )}
                    </form.Field>
                    <form.Field name="age" validators={{
                        onChange: ({value}) => {
                            if(value <= 0) {
                                return 'Age must be greater than 0'
                            }
                        },
                    }}>
                        {(field) => (
                            <>
                                <label htmlFor="age">Age</label>
                                <input className="form-input"
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(Number(e.target.value))}
                                />
                                {field.state.meta.errors.length > 0 && (
                                    <em>{field.state.meta.errors.join(', ')}</em>
                                )}
                            </>
                        )}
                    </form.Field>
                    <form.Field name="nationality">
                        {(field) => (
                            <>
                                <label htmlFor="nationality">Nationality</label>
                                <select className="form-input"
                                    id="nationality"
                                    name="nationality"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                >
                                    <option value="">Select Nationality</option>
                                    <option value="us">United States</option>
                                    <option value="ca">Canada</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                                {field.state.meta.errors.length > 0 && (
                                    <em>{field.state.meta.errors.join(', ')}</em>
                                )}
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