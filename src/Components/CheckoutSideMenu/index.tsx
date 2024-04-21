import * as React from 'react';
import { ShoppingCartContext } from '../../Context';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';


export default function ModalCart() {
    const context = React.useContext(ShoppingCartContext)!;

    return (
        <div>
            <Modal
                aria-labelledby="cart-modal-title"
                aria-describedby="cart-modal-description"
                open={context.openCart}
                onClose={context.handleCloseCart}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={{ width: 360 }}>
                    <section className='overflow-y-auto h-screen flex flex-col md:flex-row text-white bg-slate-800  p-6'>
                        <div className='flex justify-between items-start w-full order-last md:order-none'>
                            <h3 className='text-xl'>My Order</h3>
                            <div onClick={context.handleCloseCart} className='flex justify-end'>
                                <XMarkIcon className='rounded-full p-1 w-8 opacity-60 hover:opacity-100 hover:bg-white/10 cursor-pointer' />
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
  justify-content: right;
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