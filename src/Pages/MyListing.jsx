import React from 'react';
import MylistTable from '../Components/MyListing/MylistTable';

import { useEffect } from 'react';

const MyListing = () => {
    useEffect(() => {
        document.title = "My List | PawMart";
      }, []);
    return (
        <div>
            <MylistTable/>
        </div>
    );
};

export default MyListing;