import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type Props = {
    children: ReactNode,
};

type ShoppingCartContextType = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
};

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider: React.FC<Props> = ({ children }: Props) => {
    const [count, setCount] = useState<number>(0);
    console.log('Count:', count)

    return (
        <ShoppingCartContext.Provider value={{ count, setCount }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;