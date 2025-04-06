import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineUser, HiMenuAlt3} from 'react-icons/hi'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const { cart } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    const cartItemCount = cart?.products?.reduce(
        (total, product) => total + product.quantity,
        0
    ) || 0;

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
            {/* Left - Logo */}
            <div>
                <Link to='/' className='text-2xl font-medium cursor-pointer'>
                    FASHION SQUAD
                </Link>
            </div>
            {/* Center - Navigation Links */}
            <div className='hidden md:flex space-x-6'>
                <Link 
                    to='/collections/all?gender=Men' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Men
                </Link>
                <Link 
                    to='/collections/all?gender=Women' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Women
                </Link>
                <Link 
                    to='/collections/all?category=Top Wear' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Top Wear
                </Link>
                <Link 
                    to='/collections/all?category=Bottom Wear' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Bottom Wear
                </Link>
            </div>
            <div>
                {/* Right - Icons */}
                <div className='flex items-center space-x-4'>
                    
                    { user && user.role === 'admin' && (
                        <Link
                        to="/admin"
                        className='block bg-squad-dark-light-blue px-3 py-1 rounded text-sm text-white'
                    >
                        Admin
                    </Link>
                    )}

                    <Link to='/profile' className='hover:text-gray-900'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700'/>
                    </Link>
                    <button onClick={toggleCartDrawer}
                     className='relative hover:text-black'
                    >
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 cursor-pointer'/>
                        {cartItemCount > 0 && (
                            <span className='absolute -top-1 -right-2 bg-squad-blue text-white rounded-full px-1 text-xs cursor-pointer'>
                                {cartItemCount}
                            </span>
                        )}

                    </button>
                    {/* Search */}
                    <div className='overflow-hidden cursor-pointer'> 
                        <SearchBar/>    
                    </div>

                    <button onClick={toggleNavDrawer} className='md:hidden'>
                        <HiMenuAlt3 className='h-6 w-6 text-gray-700 cursor-pointer'/>      
                    </button>
                </div>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

        {/*Mobile Navigation*/}
        <div
            className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >

            <div className='flex justify-end p-4'>
                <button
                    onClick={toggleNavDrawer}
                >
                    <HiX className='h-6 w-6 text-gray-600 cursor-pointer'/>
                </button>       
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                <nav className='space-y-4'>
                    <Link
                        to="/collections/all?gender=Men"
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:tex-black'
                    >
                        Men
                    </Link>
                    <Link
                        to="/collections/all?gender=Women"
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:tex-black'
                    >
                        Women
                    </Link>
                    <Link
                        to="/collections/all?category=Top Wear"
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:tex-black'
                    >
                        Top Wear
                    </Link>
                    <Link
                        to="/collections/all?category=Bottom Wear"
                        onClick={toggleNavDrawer}
                        className='block text-gray-600 hover:tex-black'
                    >
                        Bottom Wear
                    </Link>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar