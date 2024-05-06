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
    searchByCategory: string,
    setSearchByCategory: Dispatch<SetStateAction<string>>,
};

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const ShoppingCartProvider: React.FC<Props> = ({ children }: Props) => {
    // Traerme items de la api
    const [items, setItems] = useState<Product[]>([]);
    const [showAllProducts, setShowAllProducts] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [productToShow, setProductToShow] = useState<Product[]>([]);
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchByCategory, setSearchByCategory] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<Product[]>([]);

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenCart = () => setOpenCart(true);
    const handleCloseCart = () => setOpenCart(false);

    const filteredItemsByTitle = (items: Product[], searchValue: string) => {
        return items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    const filteredItemsByCategory = (items: Product[], searchByCategory: string) => {
        return items.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType: string, items: Product[], searchValue: string, searchByCategory: string) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchValue);
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory);
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        }

        return items;
    }

    useEffect(() => {
        let filtered = items;
        if (searchValue) filtered = filterBy('BY_TITLE', items, searchValue, searchByCategory);
        if (searchByCategory) filtered = filterBy('BY_CATEGORY', items, searchValue, searchByCategory);
        if (searchValue && searchByCategory) filtered = filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, searchByCategory);
        setFilteredItems(filtered);
    }, [items, searchValue, searchByCategory])

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
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
