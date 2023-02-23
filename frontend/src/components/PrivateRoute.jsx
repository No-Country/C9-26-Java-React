import { Outlet, useNavigate } from "react-router-dom"
import Layout from "./Layout/Layout"
import { useEffect } from "react"
import { useAuth } from "../hooks/userHooks"

const PrivateRoute = () => {
    const isAuthenticated = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/")
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
