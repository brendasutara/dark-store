import { TrashIcon } from '@heroicons/react/24/outline';
import { Product } from '../../Models/Products';

export default function OrderCard(props: Product) {
    const { id, title, images, price, handleDelete } = props

    return (
        <div className='flex h-24 bg-slate-700 shadow-lg shadow-black/40 mx-auto rounded-lg justify-between items-center p-2 mb-4 space-x-4'>
            {images && images.length > 0 && (
                <img className='h-full w-20 object-cover rounded-lg' src={images[0]} />
            )}
            <h2 className='text-pretty text-sm opacity-85'>{title}</h2>
            <h2 className='text-2xl font-bold text-rose-400'>${price}</h2>
            <div>
                <TrashIcon onClick={() => handleDelete(id)} className='cursor-pointer w-4 opacity-65 hover:opacity-100' />
            </div>

        </div>
    )
}
