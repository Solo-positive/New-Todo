import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { TodoProvider } from "./contexts/todoContext";


const router = createBrowserRouter([
    {path: "/", element: <Home /> },
    {path: "about", element: <About /> }
])

function Router() {
    return (
       <TodoProvider>
         <RouterProvider router={router}/>
       </TodoProvider>
    );
}

export default Router;