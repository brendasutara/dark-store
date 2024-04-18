import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import Carrousel from '../Carrousel';
import Card from '../Card';

const slides: string[] = [
    'https://i.pinimg.com/564x/0f/d3/14/0fd314c45956a78bd3ef7d164b44ee8a.jpg',
    'https://i.pinimg.com/564x/9d/48/ff/9d48ff960e029a47366c9f12d66f8a6c.jpg',
    'https://i.pinimg.com/564x/4c/e0/a3/4ce0a3598143fd2293ac272a13f80e4c.jpg'
]

export default function ModalUnstyled() {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [curr, setCurr] = React.useState(0);

    return (
        <div>
            <TriggerButton type="button" onClick={handleOpen}>
                Open modal
            </TriggerButton>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={{ width: 800 }}>
                    <section className='grid grid-cols-2 mx-auto product-detail text-white'>
                        <div className='w-full bg-slate-800'>
                            <Carrousel slides={slides} curr={curr} setCurr={setCurr} />
                        </div>
                        <div className='flex flex-col bg-slate-800 w-full p-10'>
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

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
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
        background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border-radius: 8px;
        box-shadow: 0 4px 12px
            ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)'};
        
        color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

        & .modal-title {
            margin: 0;
            line-height: 1.5rem;
            margin-bottom: 8px;
        }

        & .modal-description {
            margin: 0;
            line-height: 1.5rem;
            font-weight: 400;
            color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
            margin-bottom: 4px;
        }
    `,
);

const TriggerButton = styled('button')(
    ({ theme }) => css`
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.5;
        padding: 8px 16px;
        border-radius: 8px;
        transition: all 150ms ease;
        cursor: pointer;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

        &:hover {
            background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
            border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
        }

        &:active {
            background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
        }

        &:focus-visible {
            box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
            outline: none;
        }
    `,
);
