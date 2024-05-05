import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'flowbite';
import type { CollapseInterface } from 'flowbite';
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function Navbar() {
  const context = useContext(ShoppingCartContext)!;

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


  return (
    <nav className='fixed w-full top-0 z-20 border-b border-slate-800 bg-slate-950 p-2 md:p-4 lg:py-4 lg:px-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
        {/* logo */}
        <NavLink to='/' className='w-full md:w-auto place-items-center items-center px-2'>
          <div className='flex justify-center'>
            <span className='text-2xl font-semibold whitespace-nowrap'>MERCATO</span>
          </div>

        </NavLink>
        <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>

          {/* Buscador */}
          <div className="relative md:px-2">
            <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4  text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              onChange={(event) => context.setSearchValue(event.target.value)}
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm border rounded-lg bg-slate-800 border-slate-700 placeholder-slate-400 text-white focus:ring-rose-500 focus:border-rose-500"
              placeholder="Search..." />
          </div>
          {/* FIN Buscador */}

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
          <div onClick={() => context.handleOpenCart()} className='flex justify-center items-center p-1 md:px-2 text-xl cursor-pointer rounded-lg hover:bg-slate-700'>
            <ShoppingCartIcon className='size-6 my-2 hover:scale-125' />
            <span className='bg-rose-500 font-semibold rounded-full size-5 text-xs flex justify-center items-center mb-4'>{context.cartProducts.length}</span>
          </div>



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
                <span className='block text-sm truncate text-slate-400 hover:text-rose-400'>sutarabrenda@gmail.com</span>
              </a>
            </div>
            <ul className='py-2' aria-labelledby='user-menu-button'>
              <li>
                <a href='#' className='block px-4 py-2 text-sm hover:bg-slate-600 text-slate-200'>
                  My orders
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 text-sm hover:bg-slate-600 text-slate-200'>
                  My account
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 text-sm hover:bg-slate-600 text-slate-200'>
                  Sign out
                </a>
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle='navbar-user'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-slate-400 hover:bg-slate-700 focus:ring-slate-600'
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
          <ul className='flex flex-col uppercase font-base p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-slate-950  border-slate-700'>
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
              <NavLink to='/toys' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Toys
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