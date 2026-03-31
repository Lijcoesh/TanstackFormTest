// Reusable validators
export const validators = {
    // Is required validator
    isRequired: (fieldName: string = 'This field') => ({
        onChange: <T extends string | number>({ value }: { value: T }) => {
            if (value === '' || value === undefined || value === null) {
                return `${fieldName} is required`
            }
        },
    }),
}