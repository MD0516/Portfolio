import {createBrowserRouter, Navigate} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Layout from '../Layouts/Layout';
import ContactPage from '../Pages/ContactPage';
import AboutPage from '../Pages/AboutPage';
import ProjectPage from '../Pages/ProjectPage';

export const router = createBrowserRouter([
    {
    index: true,
    element: <Navigate to="/home" replace />
    },
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                index : true,
                element : <Navigate to="/home" replace />
            },
            {
                path : 'home',
                element : <HomePage></HomePage>
            },
            {
                path : 'contact-me',
                element : <ContactPage></ContactPage>
            },
            {
                path : 'about',
                element : <AboutPage></AboutPage>
            },
            {
                path : 'projects',
                element : <ProjectPage></ProjectPage>
            }
        ]
    },
]);