import React from 'react';
import MyOrderTable from '../Components/MyOrder/MyOrderTable';

import { useEffect } from 'react';

const MyOrder = () => {
    useEffect(() => {
        document.title = "My Order | PawMart";
      }, []);
    return (
        <div>
            <MyOrderTable></MyOrderTable>
        </div>
    );
};

export default MyOrder;