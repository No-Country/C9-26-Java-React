import { Outlet, useNavigate } from "react-router-dom"
import Layout from "./Layout/Layout"
import { useEffect } from "react"
import { useAuth } from "../hooks/userHooks"
import { HOME } from "../config/routes/paths"

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate(HOME)
        }
    }, [isAuthenticated])

    return (
        <>
            <Layout>
                <Outlet />
            </Layout>
        </>
    )
}
export default PrivateRoute
