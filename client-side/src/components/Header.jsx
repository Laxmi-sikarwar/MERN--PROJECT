import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md '>
            <div className=' flex items-center justify-between max-w-6xl mx-auto p-2'>
                <Link to="/">
                    <h1 className='font-bold text-sm flex sm:text-xl flex-wrap '>
                        <span className='text-slate-500'>Sahand</span>
                        <span className='text-slate-500'>Estate</span>
                    </h1>
                </Link>

                <form className='bg-slate-100 p-2 rounded-lg flex items-center justify-between'>
                    <input type='text' placeholder='Search...' className='bg-trasparent-600 focus:outline-none w-24 sm:w-64' />
                    <FaSearch />
                </form>
                <ul className="flex gap-4">
                    <Link to='/'> <li className="hidden sm:inline text-slate-700 hover:underline">Home</li></Link>

                    <Link to="/About"><li className="hidden sm:inline  text-slate-700 hover:underline">About</li></Link>
                    <Link to="Signin"><li className=" text-slate-700 hover:underline">SignIn</li></Link>
                </ul>

            </div>
        </header>
    )
}

export default Header
