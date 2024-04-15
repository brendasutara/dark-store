import { NavLink } from "react-router-dom"

function Categories() {
    return (
        <section className="flex flex-col justify-center items-start md:items-center w-full py-8 px-4 md:px-32">
            <h2 className="text-3xl opacity-60 py-6">Categories</h2>
            <ul className="flex flex-wrap justify-start md:justify-center gap-4 items-center">
                <li className="flex justify-center items-center bg-slate-800 rounded-lg md:rounded-full py-2 px-4 md:p-0 md:size-56">
                    <NavLink to='/clothes'>
                        <figure className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="w-auto h-28 transform duration-300 transition-transform hover:scale-110 hidden md:block" src="./src/assets/categoria/clothes.png" alt="Category clothes" />
                            <span className="text-bold">Clothes</span>
                        </figure>
                    </NavLink>
                </li>
                <li className="flex justify-center items-center bg-slate-800 rounded-lg md:rounded-full md:size-56 py-2 px-4 md:p-0">
                    <NavLink to='/electronics'>
                        <figure className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="w-auto h-28 object-contain transform duration-300 transition-transform hover:scale-110 hidden md:block" src="./src/assets/categoria/electronics.png" alt="Category clothes" />
                            <span className="text-bold">Electronics</span>
                        </figure>
                    </NavLink>
                </li>
                <li className="flex justify-center items-center bg-slate-800 rounded-lg md:rounded-full md:size-56 py-2 px-4 md:p-0">
                    <NavLink to='/furniture'>
                        <figure className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="w-auto h-28 object-contain transform duration-300 transition-transform hover:scale-110 hidden md:block" src="./src/assets/categoria/furniture.png" alt="Category clothes" />
                            <span className="text-bold">Furniture</span>
                        </figure>
                    </NavLink>
                </li>
                <li className="flex justify-center items-center bg-slate-800 rounded-lg md:rounded-full md:size-56 py-2 px-4 md:p-0">
                    <NavLink to='/shoes'>
                        <figure className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="w-auto h-28 object-contain transform duration-300 transition-transform hover:scale-110 hidden md:block" src="./src/assets/categoria/shoes.png" alt="Category clothes" />
                            <span className="text-bold">Shoes</span>
                        </figure>
                    </NavLink>
                </li>
                <li className="flex justify-center items-center bg-slate-800 rounded-lg md:rounded-full md:size-56 py-2 px-4 md:p-0">
                    <NavLink to='/toys'>
                        <figure className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="w-auto h-28 object-contain transform duration-300 transition-transform hover:scale-110 hidden md:block" src="./src/assets/categoria/toys.png" alt="Category clothes" />
                            <span className="text-bold">Toys</span>
                        </figure>
                    </NavLink>
                </li>
                <li className="flex justify-center items-center bg-slate-800 rounded-lg md:rounded-full md:size-56 py-2 px-4 md:p-0">
                    <NavLink to='/miscellaneous'>
                        <figure className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="w-auto h-28 object-contain transform duration-300 transition-transform hover:scale-110 hidden md:block" src="./src/assets/categoria/micelaneas.png" alt="Category clothes" />
                            <span className="text-bold">Miscellaneous</span>
                        </figure>
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Categories