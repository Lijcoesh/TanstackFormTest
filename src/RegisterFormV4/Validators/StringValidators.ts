export const StringValidators = {
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
}