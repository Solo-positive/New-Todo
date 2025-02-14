import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


createBrowserRouter([
    {path: "/", element: <Home /> },
    {path: "about", element: <About /> }
])