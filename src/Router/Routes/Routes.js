import Main from "../../Layout/Main";
import Blogs from "../../Paths/Blogs/Blogs";
import Home from "../../Paths/Home/Home";

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
            }
        ]
    }
]);
export default router;