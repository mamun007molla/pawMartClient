import React from 'react';
import ProductForm from '../Components/AddListingPage/ProductForm';

import { useEffect } from 'react';


const AddListingPages = () => {
     
     useEffect(() => {
    document.title = "Add List | PawMart";
  }, []);
  
    return (
        <div>
            <ProductForm/>
        </div>
    );
};

export default AddListingPages;