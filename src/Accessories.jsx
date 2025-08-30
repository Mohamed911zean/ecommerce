import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Accessories = () => {

    const [accessories, setAccessories] = useState([])

    useEffect(() => {
        axios.get('data.json')
        .then((res) => {
            setAccessories(res.data.accessories)
        })
    }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {accessories.map((item) => (
            <div key={item.id} className='p-4 border rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow'>
                {/* Make the image and title clickable */}
                <Link to={`/product/${item.id}`}>
                    <img src={item.img} alt={item.name} className='w-full h-48 object-contain mb-2 rounded-lg hover:scale-105 transition-transform cursor-pointer' />
                    <h3 className='text-lg font-semibold mb-1 hover:text-blue-600 transition-colors cursor-pointer'>{item.name}</h3>
                </Link>
                
                <p className='text-gray-600 mb-2 font-bold'>${item.price}</p>
                <p className='text-gray-500 text-sm mb-3'>{item.description}</p>
                
                {/* Stock status */}
                <div className="mb-3">
                    {item.instock ? (
                        <span className="text-green-600 text-sm font-medium">✓ In Stock</span>
                    ) : (
                        <span className="text-red-600 text-sm font-medium">✗ Out of Stock</span>
                    )}
                </div>
                
                <div className="flex gap-2">
                    <button className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                        Add to Cart
                    </button>
                    <Link 
                        to={`/product/${item.id}`}
                        className='px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center'
                    >
                        View Details
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Accessories