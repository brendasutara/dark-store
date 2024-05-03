import { MouseEvent, useContext } from 'react'
import { Product } from '../../Models/Products'
import { ShoppingCartContext } from '../../Context'
import { HeartIcon } from '@heroicons/react/24/outline'

function Card(data: Product) {
    const context = useContext(ShoppingCartContext)!;

    const showProduct = (productDetail: Product) => {
        context.handleOpen();
        context.setProductToShow([productDetail])
    }

    const addProductsToCart = (event: MouseEvent<SVGSVGElement>, productData: Product) => {
        event.stopPropagation()
        if (context.count < 20) {
            context.setCount((prevCount) => prevCount + 1)
            context.setCartProducts([...context.cartProducts, productData])
        }
        context.handleOpenCart()
        console.log('CART IN CARD: ', context.cartProducts)
    }

    const renderIcon = (id: number) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f43f5e" className="absolute right-0 top-0 size-6 m-4 hover:scale-125">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>

            )
        } else {
            return (
                <HeartIcon onClick={(event) => addProductsToCart(event, data)} className='absolute right-0 top-0 size-6 m-4 hover:scale-125' />
            )
        }
    }
    return (
        <div
            onClick={() => showProduct(data)}
            className='hover:bg-slate-900 border-slate-800 flex-wrap gap-4 p-2 cursor-pointer border justify-center items-center w-full max-w-sm rounded-lg shadow'>
            <a>
                <figure className='relative'>
                    <img className='rounded-lg' src={data.images[0]} alt='product image' />
                    {renderIcon(data.id)}
                </figure>
            </a>
            <div onClick={() => showProduct(data)} className='p-4 space-y-2'>
                <a >
                    <h5 className='truncate uppercase text-xl font-semibold tracking-tight'>{data.title}</h5>
                </a>
                <p className='rounded-lg  opacity-60'>{data.category.name}</p>
                <div className='relative flex items-center justify-between'>
                    <span className='text-3xl font-bold  '>${data.price}</span>
                </div>
            </div>
        </div>
    )
}

export default Card