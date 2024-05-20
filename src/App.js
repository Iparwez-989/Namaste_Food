import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Mart from "./components/Mart";





const Mart = lazy(()=> import("./components/Mart"))
const App = ()=>{
    const [userName,setUserName] = useState()
    useEffect(()=>{
        const data = {
            name:"irfan parwez"
        }

        setUserName(data.name);

    },[])
    return(
        <UserContext.Provider value={{name:userName,setUserName}}>
        <div className="app">
            {/* We can use this userContext.provider either in all over the app or in individual components with different different values */}
            {/* Here we are using .provider in all over the app so it will change the data everywhere in the application */}
            <Header /> 
            <Outlet />

        </div>
        </UserContext.Provider>
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
                element: <Suspense fallback={<h1>Loading....</h1>}> <Mart /></Suspense>
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
