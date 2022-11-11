import Main from "../../Layout/Main";
import Blogs from "../../Paths/Blogs/Blogs";
import Home from "../../Paths/Home/Home";
import Login from "../../Paths/Login/Login";
import Services from "../../Paths/Services/Services";
import SignUp from "../../Paths/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/service-details/:id',
                element:<Services></Services>
            },
        ]
    }
]);
export default router;