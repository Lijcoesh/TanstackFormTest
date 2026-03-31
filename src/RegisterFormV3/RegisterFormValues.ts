import type { NationalityType } from "../RegisterFormInStepsV4/Types/NationalityType"

export interface RegisterFormvalues {
    username: string
    email: string
    password: string
    confirmPassword: string
    age: number
    nationality: NationalityType
}