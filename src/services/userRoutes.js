import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from '../components/PublicRoute/PublicRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Loader from '../components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthLayout = lazy(() => import('../pages/AuthLayout/AuthLayout'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route element={<AuthLayout />}>
                    <Route element={<PublicRoute/>}>
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/login' element={<LoginPage />} />
                    </Route>
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path='/contacts' element={<ContactsPage />} />
                </Route>
                    <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;