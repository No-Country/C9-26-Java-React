import { Outlet, useNavigate, useLocation } from "react-router-dom"
import Layout from "./Layout/Layout"
import { useEffect } from "react"
import { useAuth } from "../hooks/userHooks"
import { HOME } from "../config/routes/paths"

const PrivateRoute = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    const { from } = location.state || { from: HOME };

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(from);
        }
    }, [isAuthenticated, navigate, from]);

    return (
        isAuthenticated && (
            <Layout>
                <Outlet />
            </Layout>
        )
    );
}

export default PrivateRoute
