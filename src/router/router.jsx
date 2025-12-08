import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddListingPages from "../Pages/AddListingPages";
import PetsSupplies from "../Pages/PetsSupplies";
import MylistTable from "../Components/MyListing/MylistTable";
import ListingDetails from "../Pages/ListingDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/addListing',
            element:<AddListingPages/>
        },
        {
            path:'/petSupplies',
            element:<PetsSupplies/>
        },
        {
            path:'/myList',
            element:<MylistTable/>
        },
        {
            path:"/listing/:id",
            element:<ListingDetails/>
        }
    ]
  },
]);