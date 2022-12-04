import {Navigate,Outlet} from 'react-router-dom';

const PrivateRoute = () => {
    const logoutauth = window.sessionStorage.getItem('user');
    const tokenauth = window.sessionStorage.getItem('token');
    console.log(logoutauth);

    return logoutauth && tokenauth ? <Outlet/> : <Navigate to='/Home' />

}

export default PrivateRoute;