import React from 'react';
import Cards from '../Components/PetSupplies/Cards';
import { useEffect } from 'react';

const PetsSupplies = () => {
    useEffect(() => {
        document.title = "Pet & Supply | PawMart";
      }, []);
    return (
        <div>
            <Cards/>
        </div>
    );
};

export default PetsSupplies;