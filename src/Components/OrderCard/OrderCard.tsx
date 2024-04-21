import PlusIcon from '@heroicons/react/24/outline/PlusIcon';
import MinusIcon from '@heroicons/react/24/outline/MinusIcon';
import { Product } from '../../Models/Products';

function OrderCard(props: Product) {
    const { title, images, price } = props

    return (
        <div className='bg-slate-800 mx-auto layout md:h-4/6 flex flex-col md:flex-row text-white rounded-lg justify-between'>
            <img className='w-auto h-36 object-cover rounded-lg' src={images[0]} />
            <div className='flex flex-col space-y-2'>
                <div className='uppercase font-extralight opacity-60 text-sm md:ml-1'>Category</div>
                <h2 className='text-xl'>{title}</h2>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='uppercase font-extralight opacity-60 text-sm md:ml-1'>Price</div>
                <h2 className='text-5xl font-thin text-rose-400'>${price}</h2>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='uppercase font-extralight opacity-60 text-sm md:ml-1'>Quantity</div>
                <div className='flex justify-center items-center rounded-full p-2 bg-slate-900 gap-x-4'>
                    <MinusIcon className='bg-slate-800 hover:bg-slate-950 size-8 rounded-full p-1 cursor-pointer' />
                    <p>5</p>
                    <PlusIcon className='bg-slate-800 hover:bg-slate-950 size-8 rounded-full p-1 cursor-pointer' />
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='uppercase font-extralight opacity-60 text-sm md:ml-1'>Total</div>
                <h2 className='text-5xl font-thin text-rose-400'>${price}</h2>
            </div>
        </div>
    )
}

export default OrderCard