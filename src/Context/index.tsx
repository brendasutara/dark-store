// ShoppingCartContext.tsx
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";
import { Product } from "../Models/Products";

type Props = {
    children: ReactNode,
};

type ShoppingCartContextType = {
    items: Product[],
    setItems: Dispatch<SetStateAction<Product[]>>,
    showAllProducts: boolean,
    setShowAllProducts: Dispatch<SetStateAction<boolean>>,
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
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    filteredItems: Product[],
    setFilteredItems: Dispatch<SetStateAction<Product[]>>,
};

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider: React.FC<Props> = ({ children }: Props) => {
    //Traerme items de la api
    const [items, setItems] = useState<Product[]>([]);
    const [showAllProducts, setShowAllProducts] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    showAllProducts
                        ? 'https://api.escuelajs.co/api/v1/products'
                        : 'https://api.escuelajs.co/api/v1/products?offset=8&limit=8'
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const filteredData = data.filter((product: Product) => {
                    return !product.images.some((image) =>
                        image.includes('any') || image.includes('[&quot;')
                    );
                });
                setItems(filteredData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, [showAllProducts]);


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

    //Buscador
    const [searchValue, setSearchValue] = useState<string>('');
    console.log('BUSCADOR: ', searchValue)

    const [filteredItems, setFilteredItems] = useState<Product[]>([]);

    const filteredItemsByTitle = (items: Product[], searchValue: string) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    useEffect(() => {
        if (searchValue) setFilteredItems(filteredItemsByTitle(items, searchValue))
    }, [items, searchValue])

    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            showAllProducts,
            setShowAllProducts,
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
            searchValue,
            setSearchValue,
            filteredItems,
            setFilteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
