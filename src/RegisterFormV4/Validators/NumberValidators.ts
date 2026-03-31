export const NumberValidators = {
    // positive number validator
    isPositiveNumber: (fieldName: string = 'This field') => ({
        onChange: ({ value }: { value: number }) => {
            if (value <= 0) {
                return `${fieldName} must be greater than 0`
            }
        },
    }),
}