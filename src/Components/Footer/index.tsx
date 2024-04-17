import { NavLink } from 'react-router-dom';

function Footer() {

  return (
    <footer className='w-full bottom-0 bg-slate-900 p-2'>
      <div className='flex-col md:flex-row items-center md:flex max-w-screen-xl flex flex-wrap md:items-start justify-between mx-auto py-4'>
        {/* logo */}
        <NavLink to='/' className='flex items-center rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>MERCATO</span>
        </NavLink>
        <ul className='flex gap-4 pt-2'>
          <li className='rounded-lg hover:text-rose-400'>
            <NavLink to='/clothes'>
              Clothes
            </NavLink>
          </li>
          <li className='rounded-lg hover:text-rose-400'>
            <NavLink to='/electronics'>
              Electronics
            </NavLink>
          </li>
          <li className='rounded-lg hover:text-rose-400'>
            <NavLink to='/furniture'>
              Furniture
            </NavLink>
          </li>
          <li className='rounded-lg hover:text-rose-400'>
            <NavLink to='/shoes'>
              Shoes
            </NavLink>
          </li>
          <li className='rounded-lg hover:text-rose-400'>
            <NavLink to='/miscellaneous'>
              Miscellaneous
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='max-w-screen-xl border-t border-slate-800 flex flex-col items-center justify-center mx-auto py-4'>
        <p>Este e-commerce está hecho con ❤. ¿Te gustó?</p>
        <p>¿Querés contratarme? Bueno <a href='https://www.linkedin.com/in/brendasutara/' className='text-rose-400 underline' target='_blank'>hablemos!</a></p>
      </div>
    </footer>
  );
}

export default Footer;
