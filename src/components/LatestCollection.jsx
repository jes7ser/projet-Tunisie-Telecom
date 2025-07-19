import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'

function LatestCollection() {
    const {products} = useContext(ShopContext)
    const [LatestProducts,setLatestProducts] = useState([])
    useEffect(() => {
        setLatestProducts(products.slice(0, 5))
    }, [])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST '} text2={'PRODUCTS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
            Votre référence en électronique : qualité, performance et prix imbattables
            </p>
        </div>
        {/* Latest Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {LatestProducts.map((item,index) => (
            <Productitem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
    
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
