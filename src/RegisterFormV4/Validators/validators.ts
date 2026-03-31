// Reusable validators for form fields
export const validators = {
    // Is required validator
    isRequired: (fieldName: string = 'This field') => ({
        onChange: ({ value }: { value: string }) => {
            if (value === '') {
                return `${fieldName} is required`
            }
        },
    }),

    // minLength validator
    minLength: (min: number, fieldName: string = 'This field') => ({
        onChange: ({ value }: { value: string }) => {
            if (value.length < min) {
                return `${fieldName} must be at least ${min} characters`
            }
        },
    }),

    // maxLength validator
    maxLength: (max: number, fieldName: string = 'This field') => ({
        onChange: ({ value }: { value: string }) => {
            if (value.length > max) {
                return `${fieldName} must be at most ${max} characters`
            }
        },
    }),

    // email format validator
    isEmail: (fieldName: string = 'This field') => ({
        onChange: ({ value }: { value: string }) => {
            if (!/\S+@\S+\.\S+/.test(value)) {
                return `${fieldName} is invalid`
            }
        },
    }),

    // positive number validator
    isPositiveNumber: (fieldName: string = 'This field') => ({
        onChange: ({ value }: { value: number }) => {
            if (value <= 0) {
                return `${fieldName} must be greater than 0`
            }
        },
    }),
}