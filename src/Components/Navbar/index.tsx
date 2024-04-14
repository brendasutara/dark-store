import { NavLink } from "react-router-dom"

function Navbar() {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full bg-slate-900 py-6 px-32">
            <ul className="flex gap-x-4 items-center">
                <li>
                    <NavLink to='/'>
                        Mercato
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furniture' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shoes' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/miscellaneous' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>
            <ul className="flex gap-x-4 items-center">
                <li>Brenda Sutara</li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li>🛒 0 </li>
            </ul>
        </nav>
    )
}

export default Navbar