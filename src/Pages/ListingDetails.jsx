import React from "react";
import DetailsCards from "../Components/ListingDetails/DetailsCards";

import { useEffect } from "react";

const ListingDetails = () => {
 useEffect(() => {
     document.title = "List Details | PawMart";
   }, []);

  return (
   <div>
    <DetailsCards/>
   </div>
  );
};

export default ListingDetails;
