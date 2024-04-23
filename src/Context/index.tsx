// ShoppingCartContext.tsx
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { Product } from "../Models/Products";

type Props = {
    children: ReactNode,
};

type ShoppingCartContextType = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    open: boolean,
    handleOpen: () => void,
    handleClose: () => void,
    productToShow: Product[],
    setProductToShow: Dispatch<SetStateAction<Product[]>>,
    cartProducts: Product[],
    setCartProducts: Dispatch<SetStateAction<Product[]>>,
    openCart: boolean,
    handleOpenCart: () => void,
    handleCloseCart: () => void,
};

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider: React.FC<Props> = ({ children }: Props) => {

    const [count, setCount] = useState<number>(0);

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Estado para mostrar el detalle del producto clickeado
    const [productToShow, setProductToShow] = useState<Product[]>([]);
    //Carrito donde vamos a guardar todos los productos
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    const [openCart, setOpenCart] = useState<boolean>(false);
    const handleOpenCart = () => setOpenCart(true);
    const handleCloseCart = () => setOpenCart(false);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            open,
            handleOpen,
            handleClose,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCart,
            handleOpenCart,
            handleCloseCart,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
