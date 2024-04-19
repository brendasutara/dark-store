import { useContext } from 'react'
import { Product } from '../../Models/Products'
import { ShoppingCartContext } from '../../Context'
import { HeartIcon } from '@heroicons/react/24/outline'

function Card(data: Product) {
    const context = useContext(ShoppingCartContext)!;

    const showProduct = (productDetail: Product) => {
        context.handleOpen();
        context.setProductToShow([productDetail])
    }

    return (
        <div
            className='hover:bg-slate-900 border-slate-800 flex-wrap gap-4 p-2 border justify-center items-center w-full max-w-sm rounded-lg shadow'>
            <a className='cursor-pointer' onClick={() => showProduct(data)}>
                <figure className='relative'>
                    <img className='rounded-lg' src={data.images[0]} alt='product image' />
                    <HeartIcon className='absolute right-0 top-0 size-6 m-4 hover:scale-125' />
                </figure>
            </a>
            <div className='p-4 space-y-2'>
                <a className='cursor-pointer' onClick={() => showProduct(data)}>
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