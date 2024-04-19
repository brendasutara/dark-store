import * as React from 'react';
import { ShoppingCartContext } from '../../Context';
import { Product } from '../../Models/Products';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import PlusIcon from '@heroicons/react/24/outline/PlusIcon';
import MinusIcon from '@heroicons/react/24/outline/MinusIcon';
import StarIcon from '@heroicons/react/24/solid/StarIcon';
import Carrousel from '../Carrousel';


export default function ModalUnstyled(data: Product) {
    const context = React.useContext(ShoppingCartContext)!;

    const [curr, setCurr] = React.useState(0);

    const addProducts = (productData: Product) => {
        context.setCount(prevCount => prevCount + 1);
        context.setCartProducts([...context.cartProducts, productData])
    }

    return (
        <div>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={context.open}
                onClose={context.handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={{ width: 1000 }}>
                    <section className='overflow-y-auto h-screen md:h-4/6 flex flex-col md:flex-row text-white'>
                        <div className='w-full bg-slate-800 order-last md:order-none'>
                            <Carrousel slides={context.productToShow[0]?.images} curr={curr} setCurr={setCurr} />
                        </div>
                        <div className='flex flex-col bg-slate-800 w-full p-10'>
                            <div onClick={context.handleClose} className='flex justify-end'>
                                <XMarkIcon className='rounded-full p-1 w-8 opacity-60 hover:opacity-100 hover:bg-white/10 cursor-pointer' />
                            </div>
                            <div className='flex flex-wrap opacity-60'>
                                <h3>Home</h3>
                                <ChevronRightIcon className='w-4' />
                                <h3>{context.productToShow[0]?.category.name}</h3>
                                <ChevronRightIcon className='w-4' />
                                <h3>{context.productToShow[0]?.title}</h3>
                            </div>
                            <div className='py-10 space-y-6'>
                                <h2 className='text-3xl'>{context.productToShow[0]?.title}</h2>
                                <div className='flex gap-x-2 justify-start items-center'>
                                    <div className='flex gap-1'>
                                        <StarIcon className='size-4 text-rose-400' />
                                        <StarIcon className='size-4 text-rose-400' />
                                        <StarIcon className='size-4 text-rose-400' />
                                        <StarIcon className='size-4 text-rose-400' />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='size-4 text-rose-400'>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <p className='font-extralight underline underline-offset-2'>8 reviews</p>
                                </div>
                                <div className='flex gap-x-2 justify-start items-start space-x-6'>
                                    <div className='flex flex-col space-y-2'>
                                        <div className='uppercase font-extralight opacity-60 text-sm md:ml-1'>Price</div>
                                        <h2 className='text-5xl font-thin text-rose-400'>${context.productToShow[0]?.price}</h2>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <div className='uppercase font-extralight opacity-60 text-sm md:ml-1'>Quantity</div>
                                        <div className='flex justify-center items-center rounded-full p-2 bg-slate-900 gap-x-4'>
                                            <PlusIcon className='bg-slate-800 hover:bg-slate-950 size-8 rounded-full p-1 cursor-pointer' />
                                            <p>{context.count}</p>
                                            <MinusIcon className='bg-slate-800 hover:bg-slate-950 size-8 rounded-full p-1 cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <div className='uppercase font-extralight opacity-60 text-sm md:ml-1'>Description</div>
                                    <hr className='opacity-60 ' />
                                    <p className='opacity-60 md:ml-1 text-pretty'>{context.productToShow[0]?.description}</p>
                                </div>
                                <div className='flex items-center gap-x-6'>
                                    <button onClick={() => addProducts(data)} className='w-36 focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 md:px-3 md:py-1.5 lg:px-5 lg:py-2.5 text-center border border-rose-400 hover:bg-rose-500 focus:ring-rose-800'>
                                        Add to cart
                                    </button>
                                    <button className='w-36 focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 md:px-3 md:py-1.5 lg:px-5 lg:py-2.5 text-center bg-rose-400 hover:bg-rose-500 focus:ring-rose-800'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                        </div>

                    </section>
                </ModalContent>
            </Modal>
        </div>
    );
}

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean; className?: string }>((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop) <{ open?: boolean; className?: string }>`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({ theme }) => css`
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        text-align: start;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 12px
            ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)'};

        & .modal-title {
            margin: 0;
            line-height: 1.5rem;
            margin-bottom: 8px;
        }

        & .modal-description {
            margin: 0;
            line-height: 1.5rem;
            font-weight: 400;
            margin-bottom: 4px;
        }

        @media screen and (max-width: 600px) {
            width: 100vw;
            height: auto;
            border-radius: 0;
        }
    `,
);
