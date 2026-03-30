import React, { useState } from "react"
import "./RegisterForm.css"

interface RegisterFormvalues {
    username: string
    email: string
    password: string
    confirmPassword: string
    age: number
    nationality: string
}

export default function RegisterForm() {
    const [formData, setFormData] = useState<RegisterFormvalues>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: 0,
        nationality: 'Netherlands'
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
        alert(JSON.stringify(formData, null, 2))
    }

    return(
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="username">Username</label>
                    <input className="form-input" 
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input className="form-input" 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input className="form-input" 
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className="form-input" 
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row small-row">
                    <label htmlFor="age">Age</label>
                    <input className="form-input" 
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="nationality">Nationality</label>
                    <select className="form-input" 
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                    >
                        <option value="Netherlands">Netherlands</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                    </select>
                </div>

                <div className="form-row actions">
                    <button className="submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}