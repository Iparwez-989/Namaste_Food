import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";


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
            }
        ]
    },
    
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
