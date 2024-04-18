import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

function ProductDetail() {
    const hCustom = {
        height: 'calc (100vh - 73px)',
    };

    return (
        <section style={hCustom} className="relative bg-slate-900 mx-auto flex flex-col justify-center items-center w-10/12 md:w-full">
            <h3>ProductDetail</h3>
            <ArrowLeftCircleIcon className='size-12' />
            <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1600&h=900" alt="" />
        </section>
    )
}

export default ProductDetail