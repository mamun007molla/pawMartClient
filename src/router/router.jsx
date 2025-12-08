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
import MyOrder from "../Pages/MyOrder";
import PageNotFound from "../Pages/PageNotFound";
import PrivateRoute from "../Provider/PrivateRoute";
import CategoryFilteredProduct from "../Components/Home/CategoryFilteredProduct";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
        {
            index:true,
            element:<Home/>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:'/addListing',
            element:<PrivateRoute><AddListingPages/></PrivateRoute>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:'/petSupplies',
            element:<PetsSupplies/>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:'/myList',
            element:<PrivateRoute><MyListing/></PrivateRoute>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:"/listing/:id",
            element:<PrivateRoute><ListingDetails/></PrivateRoute>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:"/login",
            element:<Login/>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:"/register",
            element:<Register/>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:'/update-listing/:id',
            element:<UpdateListing></UpdateListing>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:"/my-orders",
            element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>,
            errorElement:<PageNotFound></PageNotFound>
        },
        {
            path:"/category-filtered-product/:categoryName",
            element:<CategoryFilteredProduct></CategoryFilteredProduct>
        }
    ],
    errorElement:<PageNotFound></PageNotFound>
  },
]);