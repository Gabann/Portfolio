import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../components/ErrorPage.tsx";
import React from "react";
import App from "../App.tsx";
import {Index} from '../components/Index.tsx';

export const routes = [
    {path: "/", component: Index},
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <ErrorPage/>,
		children: routes.map(({path, component}) => ({
			path,
			element: React.createElement(component),
		})),
	},
]);

export default router
