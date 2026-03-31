export const EmailValidators = {
    // email format validator
    isEmail: (fieldName: string = 'This field') => ({
        onChange: ({ value }: { value: string }) => {
            if (!/\S+@\S+\.\S+/.test(value)) {
                return `${fieldName} is invalid`
            }
        },
    }),
}