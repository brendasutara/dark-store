import { useState } from 'react';
import Carrousel from '../Carrousel';
import './styles.css'
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const slides: string[] = [
    'https://i.pinimg.com/564x/0f/d3/14/0fd314c45956a78bd3ef7d164b44ee8a.jpg',
    'https://i.pinimg.com/564x/9d/48/ff/9d48ff960e029a47366c9f12d66f8a6c.jpg',
    'https://i.pinimg.com/564x/4c/e0/a3/4ce0a3598143fd2293ac272a13f80e4c.jpg'
]

function ProductDetail() {
    const [curr, setCurr] = useState(0);

    return (
        <section className='grid grid-cols-2 mx-auto product-detail w-6/12 rounded-lg'>
            <div className='w-full bg-slate-800 rounded-lg '>
                <Carrousel slides={slides} curr={curr} setCurr={setCurr} />
            </div>
            <div className='flex flex-col bg-slate-800 w-full rounded-lg p-10'>
                <div className='flex opacity-60'>
                    <h3>Home</h3>
                    <ChevronRightIcon className='w-4' />
                    <h3>Categoría</h3>
                    <ChevronRightIcon className='w-4' />
                    <h3>Product Detail</h3>
                </div>
                <div className='py-20 space-y-6'>
                    <h2 className='text-2xl'>Nombre del producto</h2>
                    <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consequatur, ex molestiae fuga corrupti consequuntur doloribus deleniti, aperiam maxime quibusdam culpa illum at, quaerat recusandae impedit non minus incidunt. Aperiam.</p>
                    <h2 className='text-4xl'>$4.500</h2>
                </div>

            </div>
        </section>

    )
}

export default ProductDetail
