import React, { createContext } from 'react';
export const ShopContext = createContext();
import {products} from '../assets/assets';




const ShopContextProvider = (props) => {
    const currency = ' TND'
    const delivery_free = 10


    const value = {
        products, currency, delivery_free
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider; 

