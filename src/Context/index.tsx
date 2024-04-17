import { createContext, ReactNode } from "react";

type Props = {
    children: ReactNode
}

const ShoppingCartContext = createContext<Props | null>(null);

export const ShoppingCartProvider: React.FC<Props> = ({ children }: Props) => {
    return (
        <ShoppingCartContext.Provider value={{ children }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;