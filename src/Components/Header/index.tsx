import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) { // Ajusta este valor según la cantidad de desplazamiento que desees
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <article className='relative mx-auto flex flex-col justify-center items-center w-10/12 md:w-full h-screen'>
            <h1 className='font-extrabold uppercase py-10 text-5xl md:hidden' >headphones</h1>
            <img src='./src/assets/auriculares/headphones-pink2.png' alt='headphones' className={`z-10 w-4/5 md:w-auto rotate-12 transition-transform duration-500 ${scrolled ? 'rotate-45' : ''}`} />
            <h1 className={`font-extrabold uppercase text-9xl lg:text-[180px] opacity-50 absolute z-0 hidden md:block transition-transform duration-500 ${scrolled ? 'translate-y-20' : ''}`}>headphones</h1>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='rgb(251 113 133)' className='absolute size-8 mb-8 md:mb-2 bottom-0'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3' />
            </svg>
        </article>
    );
};

export default Header;
