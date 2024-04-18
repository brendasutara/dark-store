// ShoppingCartContext.tsx
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type Props = {
    children: ReactNode,
};

type ShoppingCartContextType = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    open: boolean,
    handleOpen: () => void,
    handleClose: () => void,
};

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider: React.FC<Props> = ({ children }: Props) => {
    const [count, setCount] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            open,
            handleOpen,
            handleClose,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
