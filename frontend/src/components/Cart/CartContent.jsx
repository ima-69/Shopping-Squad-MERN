import React from 'react'
import { HiMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContent = () => {

    const cartProducts = [
        {
            productId: 1,
            name: 'T-shirt',
            size: 'M',
            color: 'Black',
            quantity: 1,
            price: 15,
            image: 'https://picsum.photos/200?random=1'
        },
        {
            productId: 2,
            name: 'Hoodie',
            size: 'L',
            color: 'Grey',
            quantity: 1,
            price: 25,
            image: 'https://picsum.photos/200?random=2'
        },
        {
            productId: 3,
            name: 'Jeans',
            size: '32',
            color: 'Blue',
            quantity: 1,
            price: 30,
            image: 'https://picsum.photos/200?random=3'
        },
        {
            productId: 4,
            name: 'Shoes',
            size: '9',
            color: 'White',
            quantity: 1,
            price: 50,
            image: 'https://picsum.photos/200?random=4'
        }
    ]

  return (
    <div>
        {cartProducts.map((product,index) => (
            <div 
                key={index}
                className='flex items-start justify-between border-b border-gray-500 py-4'>
                <div className='flex items-start'>
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className='w-20 h-24 object-cover mr-4 rounded'
                    />
                    <div>
                        <h3>{product.name}</h3>
                        <p className='text-gray-500 text-sm'> 
                            size: {product.size} | color: {product.color}
                        </p>
                        <div className='flex items-center mt-2'>
                            <button className='border border-gray-500 rounded px-2 py-2 text-xl font-medium cursor-pointer'>
                                <HiMinusSm />
                            </button>
                            <span className='px-4'>{product.quantity}</span>
                            <button className='border border-gray-500 rounded px-2 py-2 text-xl font-medium cursor-pointer'>
                                <HiOutlinePlusSm />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='font-medium'>${product.price}</p>
                    <button>
                        <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600 cursor-pointer'/>  
                    </button>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default CartContent