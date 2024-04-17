import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'flowbite';
import type { CollapseInterface } from 'flowbite';
import { ShoppingCartContext } from '../../Context';

function Navbar() {
  const activeStyle = 'text-rose-300 rounded-lg font-medium';
  const userMenu = useRef<HTMLDivElement>(null);
  const userMenuCollapse = useRef<CollapseInterface | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    userMenuCollapse.current = new Collapse(
      userMenu.current,
      null,
      {
        // opciones de colapso
        onCollapse: () => {
          console.log('El menú de usuario se ha colapsado');
          setIsMenuOpen(false); // Actualizar el estado para reflejar que el menú está cerrado
        },
        onExpand: () => {
          console.log('El menú de usuario se ha expandido');
          setIsMenuOpen(true); // Actualizar el estado para reflejar que el menú está abierto
        },
      }
    );
  }, []);

  const toggleUserMenu = () => {
    if (userMenuCollapse.current) {
      userMenuCollapse.current.toggle();
    }
  };

  const context = useContext(ShoppingCartContext)!;

  return (
    <nav className='fixed w-full top-0 z-20 border-b border-slate-800 bg-slate-950 p-2 md:p-4 lg:py-4 lg:px-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
        {/* logo */}
        <NavLink to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>MERCATO</span>
        </NavLink>
        <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            onClick={toggleUserMenu}
            type='button'
            className='flex text-sm rounded-full md:me-0 focus:ring-2 focus:ring-rose-300'
            id='user-menu-button'
            aria-expanded='false'
            data-dropdown-toggle='user-dropdown'
            data-dropdown-placement='bottom'
          >
            <span className='sr-only'>Open user menu</span>
            <img
              className='w-8 h-8 rounded-full'
              src='https://github.com/brendasutara.png'
              alt='user photo'
            />
          </button>

          {/* Carrito contador */}
          <h3 className='flex justify-center items-center px-0 md:px-2 text-xl'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6 my-2 hover:scale-125'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
            </svg>
            <span className='bg-rose-500 font-semibold rounded-full size-5 text-xs flex justify-center items-center mb-4'>{context.count}</span>
          </h3>

          {/* Dropdown menu */}
          <div
            ref={userMenu}
            className={`${isMenuOpen ? 'block' : 'hidden'
              } absolute top-0 mt-16 w-48 rounded-lg shadow-lg bg-slate-800 divide-y divide-slate-600`}
            id='user-dropdown'
          >
            <div className='px-4 py-3'>
              <a href='https://linkedin.com/in/brendasutara/' target='_blank'>
                <span className='block text-sm hover:text-rose-400'>Brenda Sutara</span>
                <span className='block text-sm truncate text-gray-400 hover:text-rose-400'>sutarabrenda@gmail.com</span>
              </a>
            </div>
            <ul className='py-2' aria-labelledby='user-menu-button'>
              <li>
                <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200'>
                  My orders
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200'>
                  My account
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200'>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle='navbar-user'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600'
            aria-controls='navbar-user'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
            </svg>
          </button>
        </div>
        <div className='items-center justify-between hidden w-full md:flex md:w-auto lg:order-1 md:order-last md:pt-2 lg:p-0' id='navbar-user'>
          <ul className='flex flex-col uppercase font-base p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-slate-950  border-gray-700'>
            <li className='rounded-lg p-2 hover:bg-slate-800'>
              <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
                All
              </NavLink>
            </li>
            <li className='rounded-lg p-2 hover:bg-slate-800'>
              <NavLink to='/clothes' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Clothes
              </NavLink>
            </li>
            <li className='rounded-lg p-2 hover:bg-slate-800'>
              <NavLink to='/electronics' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Electronics
              </NavLink>
            </li>
            <li className='rounded-lg p-2 hover:bg-slate-800'>
              <NavLink to='/furniture' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Furniture
              </NavLink>
            </li>
            <li className='rounded-lg p-2 hover:bg-slate-800'>
              <NavLink to='/shoes' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Shoes
              </NavLink>
            </li>
            <li className='rounded-lg p-2 hover:bg-slate-800'>
              <NavLink to='/miscellaneous' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Miscellaneous
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
