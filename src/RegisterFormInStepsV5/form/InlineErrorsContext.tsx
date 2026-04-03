import { createContext, useContext } from 'react';

export const InlineErrorsContext = createContext<boolean>(false);

export const useInlineErrors = () => {
    return useContext(InlineErrorsContext);
};
