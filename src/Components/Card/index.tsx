import { useContext } from 'react'
import { Product } from '../../Models/Products'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'

function Card(data: Product) {
    const context = useContext(ShoppingCartContext)!;

    const incrementCount = () => {
        context.setCount(prevCount => prevCount + 1);
    };

    return (
        <div className='hover:bg-slate-900 cursor-pointer border-slate-800 flex-wrap gap-4 p-2 border justify-center items-center w-full max-w-sm rounded-lg shadow'>
            <a href='#'>
                <figure className='relative'>
                    <img className='rounded-lg' src={data.images[0]} alt='product image' />
                    <HeartIcon className='absolute right-0 top-0 size-6 m-4 hover:scale-125' />
                </figure>
            </a>
            <div className='p-4 space-y-2'>
                <a href='#'>
                    <h5 className='truncate uppercase text-xl font-semibold tracking-tight'>{data.title}</h5>
                </a>
                <p className='rounded-lg  opacity-60'>{data.category.name}</p>
                <div className='relative flex items-center justify-between'>
                    <span className='text-3xl font-bold  '>${data.price}</span>
                    <button onClick={incrementCount} className='flex gap-x-2  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 md:px-3 md:py-1.5 lg:px-5 lg:py-2.5 text-center bg-rose-500 hover:bg-rose-600 focus:ring-rose-800'>
                        <p className='hidden lg:block'>Add to cart</p>
                        <ShoppingCartIcon className='size-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card