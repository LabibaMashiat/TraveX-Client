import Main from "../../Layout/Main";
import Blogs from "../../Paths/Blogs/Blogs";
import Home from "../../Paths/Home/Home";
import Login from "../../Paths/Login/Login";
import Reviews from "../../Paths/Reviews/Reviews";
import ServiceDetails from "../../Paths/ServiceDetails/ServiceDetails";
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
                loader:({params})=>fetch(`http://localhost:5000/service-details/${params.id}`),
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/reviews/:id',
                loader:({params})=>fetch(`http://localhost:5000/service-details/${params.id}`),
                element:<Reviews></Reviews>
            },
        ]
    }
]);
export default router;