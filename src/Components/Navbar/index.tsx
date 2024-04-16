import { NavLink } from "react-router-dom"

function Navbar() {
    const activeStyle = 'rounded-lg underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed top-0 z-20 w-full bg-slate-900 py-2 px-32">
            <ul className="flex gap-x-4 items-center">
                <li className="text-bold text-2xl">
                    <NavLink to='/'>
                        Mercato
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/clothes' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/electronics' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/furniture' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Furniture
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/shoes' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Shoes
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/toys' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/miscellaneous' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>
            <ul className="flex gap-x-4 items-center">
                <li>Brenda Sutara</li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/my-orders' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My orders
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
                    <NavLink to='/my-account' className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My account
                    </NavLink>
                </li>
                <li className="rounded-lg p-2 hover:bg-slate-800">
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