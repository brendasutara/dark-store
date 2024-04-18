import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import Carrousel from '../Carrousel';
import { ShoppingCartContext } from '../../Context';

const slides: string[] = [
    'https://i.pinimg.com/564x/0f/d3/14/0fd314c45956a78bd3ef7d164b44ee8a.jpg',
    'https://i.pinimg.com/564x/9d/48/ff/9d48ff960e029a47366c9f12d66f8a6c.jpg',
    'https://i.pinimg.com/564x/4c/e0/a3/4ce0a3598143fd2293ac272a13f80e4c.jpg'
]

export default function ModalUnstyled() {
    const context = React.useContext(ShoppingCartContext)!;

    const [curr, setCurr] = React.useState(0);

    return (
        <div>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={context.open}
                onClose={context.handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={{ width: 800 }}>
                    <section className='overflow-y-auto h-screen md:h-4/5 grid grid-cols-1 md:grid-cols-2 mx-auto product-detail text-white'>
                        <div className='w-full bg-slate-800 order-last md:order-none'>
                            <Carrousel slides={slides} curr={curr} setCurr={setCurr} />
                        </div>
                        <div className='flex flex-col bg-slate-800 w-full p-6'>
                            <div onClick={context.handleClose} className='flex justify-end'>
                                <XMarkIcon className='rounded-full p-1 w-8 opacity-60 hover:opacity-100 hover:bg-white/10 cursor-pointer' />
                            </div>
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
