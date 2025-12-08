import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddListingPages from "../Pages/AddListingPages";
import PetsSupplies from "../Pages/PetsSupplies";

import ListingDetails from "../Pages/ListingDetails";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import MyListing from "../Pages/MyListing";
import UpdateListing from "../Components/Update/UpdateListing";


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
            element:<MyListing/>
        },
        {
            path:"/listing/:id",
            element:<ListingDetails/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:'/update-listing/:id',
            element:<UpdateListing></UpdateListing>
        }
    ]
  },
]);