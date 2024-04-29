import React, { lazy,Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Mart from "./components/Mart";




const Mart = lazy(()=>{import("./components/Mart")})
const App = ()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />

        </div>
     )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        // error element is used to show error page when user enter undefined or wrong path.  
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element: <ContactUs />
            },
            {
                path:'/mart',
                element: <Suspense fallback={<h1> Loading..... </h1>}><Mart /></Suspense>
            },
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu />
            },
            
        ]
    },
    
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
