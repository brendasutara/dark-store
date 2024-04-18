import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type Props = {
    children: ReactNode,
};

type ShoppingCartContextType = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    // isProductDetailOpen: boolean,
    // setIsProductDetailOpen: Dispatch<SetStateAction<boolean>>
};

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider: React.FC<Props> = ({ children }: Props) => {
    const [count, setCount] = useState<number>(0);
    // const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false)
    // const openProductDetail = () => setIsProductDetailOpen(true)
    // const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            // isProductDetailOpen,
            // openProductDetail,
            // closeProductDetail,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;