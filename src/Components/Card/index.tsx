import { Product } from '../../Models/Products'

function Card(data: Product) {
    return (
        <div className='hover:bg-slate-900 cursor-pointer border-slate-800 flex-wrap gap-4 p-2 border justify-center items-center w-full max-w-sm rounded-lg shadow'>
            <a href='#'>
                <figure className='relative'>
                    <img className='rounded-lg' src={data.images[0]} alt='product image' />
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='absolute right-0 top-0 size-6 m-4 hover:scale-125'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' />
                    </svg>
                </figure>
            </a>
            <div className='p-4 space-y-2'>
                <a href='#'>
                    <h5 className='truncate uppercase text-xl font-semibold tracking-tight'>{data.title}</h5>
                </a>
                <p className='rounded-lg  opacity-60'>{data.category.name}</p>
                <div className='flex items-center justify-between'>
                    <span className='text-3xl font-bold  '>${data.price}</span>
                    <a href='#' className='flex gap-x-2  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 md:px-3 md:py-1.5 lg:px-5 lg:py-2.5 text-center bg-rose-500 hover:bg-rose-600 focus:ring-rose-800'>
                        <p className='hidden lg:block'>Add to cart</p>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='size-6'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card