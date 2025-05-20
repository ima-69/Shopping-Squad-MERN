import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
    HiOutlineShoppingBag, 
    HiOutlineUser, 
    HiMenuAlt3, 
    HiX, 
    HiOutlineSearch,
    HiOutlineHeart,
    HiOutlineHome
} from 'react-icons/hi'
import { IoShirtOutline, IoPersonOutline } from 'react-icons/io5'
import { GiTrousers } from 'react-icons/gi'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'
import { FiShoppingBag, FiUser } from 'react-icons/fi'
import { AiOutlineShop } from 'react-icons/ai'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
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
            <nav className='sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm'>
                <div className='container mx-auto flex items-center justify-between py-4 px-6'>
                    {/* Left - Logo */}
                    <div>
                        <Link to='/' className='text-2xl font-bold tracking-tight cursor-pointer transition-colors hover:text-indigo-600'>
                            FASHION SQUAD
                        </Link>
                    </div>
                    
                    {/* Center - Navigation Links */}
                    <div className='hidden md:flex space-x-8'>
                        <Link 
                            to='/collections/all?gender=Men' 
                            className='text-gray-600 hover:text-indigo-600 text-sm font-medium uppercase tracking-wide transition-colors duration-200 relative group flex items-center'
                        >
                            <BsGenderMale className="mr-1.5 h-4 w-4" />
                            Men
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link 
                            to='/collections/all?gender=Women' 
                            className='text-gray-600 hover:text-indigo-600 text-sm font-medium uppercase tracking-wide transition-colors duration-200 relative group flex items-center'
                        >
                            <BsGenderFemale className="mr-1.5 h-4 w-4" />
                            Women
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link 
                            to='/collections/all?category=Top Wear' 
                            className='text-gray-600 hover:text-indigo-600 text-sm font-medium uppercase tracking-wide transition-colors duration-200 relative group flex items-center'
                        >
                            <IoShirtOutline className="mr-1.5 h-4 w-4" />
                            Top Wear
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link 
                            to='/collections/all?category=Bottom Wear' 
                            className='text-gray-600 hover:text-indigo-600 text-sm font-medium uppercase tracking-wide transition-colors duration-200 relative group flex items-center'
                        >
                            <GiTrousers className="mr-1.5 h-4 w-4" />
                            Bottom Wear
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                    </div>
                    
                    {/* Right - Icons */}
                    <div className='flex items-center space-x-6'>
                        { user && user.role === 'admin' && (
                            <Link
                                to="/admin"
                                className='flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-full text-sm text-white font-medium transition-colors duration-200'
                            >
                                <AiOutlineShop className="h-4 w-4" />
                                <span>Admin</span>
                            </Link>
                        )}

                        <Link to='/profile' className='relative group'>
                            <FiUser className='h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors duration-200'/>
                            <span className='sr-only'>Profile</span>
                        </Link>
                        
                        <button 
                            onClick={toggleCartDrawer}
                            className='relative group'
                            aria-label="Shopping cart"
                        >
                            <FiShoppingBag className='h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors duration-200'/>
                            {cartItemCount > 0 && (
                                <span className='absolute -top-1 -right-2 bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium'>
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        
                        {/* Search */}
                        <div className='overflow-hidden cursor-pointer'> 
                            <SearchBar/>    
                        </div>

                        <button 
                            onClick={toggleNavDrawer} 
                            className='md:hidden relative group'
                            aria-label="Menu"
                        >
                            <HiMenuAlt3 className='h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors duration-200'/>      
                        </button>
                    </div>
                </div>
            </nav>
            
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

            {/* Mobile Navigation Overlay */}
            {navDrawerOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
                    onClick={toggleNavDrawer}
                ></div>
            )}

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className='flex justify-between items-center p-6 border-b'>
                    <Link to='/' onClick={toggleNavDrawer} className='text-xl font-bold tracking-tight'>
                        FASHION SQUAD
                    </Link>
                    <button
                        onClick={toggleNavDrawer}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <HiX className='h-6 w-6 text-gray-600'/>
                    </button>       
                </div>
                
                <div className='p-6'>
                    <nav className='space-y-6'>
                        <Link
                            to="/collections/all?gender=Men"
                            onClick={toggleNavDrawer}
                            className='flex items-center space-x-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200'
                        >
                            <BsGenderMale className="h-5 w-5" />
                            <span>Men</span>
                        </Link>
                        <Link
                            to="/collections/all?gender=Women"
                            onClick={toggleNavDrawer}
                            className='flex items-center space-x-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200'
                        >
                            <BsGenderFemale className="h-5 w-5" />
                            <span>Women</span>
                        </Link>
                        <Link
                            to="/collections/all?category=Top Wear"
                            onClick={toggleNavDrawer}
                            className='flex items-center space-x-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200'
                        >
                            <IoShirtOutline className="h-5 w-5" />
                            <span>Top Wear</span>
                        </Link>
                        <Link
                            to="/collections/all?category=Bottom Wear"
                            onClick={toggleNavDrawer}
                            className='flex items-center space-x-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200'
                        >
                            <GiTrousers className="h-5 w-5" />
                            <span>Bottom Wear</span>
                        </Link>
                    </nav>
                    
                    <div className="mt-8 pt-6 border-t">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/profile"
                                onClick={toggleNavDrawer}
                                className='flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-200'
                            >
                                <FiUser className="h-5 w-5" />
                                <span>My Account</span>
                            </Link>
                            
                            {user && user.role === 'admin' && (
                                <Link
                                    to="/admin"
                                    onClick={toggleNavDrawer}
                                    className='flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-200'
                                >
                                    <AiOutlineShop className="h-5 w-5" />
                                    <span>Admin Dashboard</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar