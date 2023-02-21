import { Outlet } from "react-router-dom"
import Layout from "./Layout/Layout"

const PublicRoute = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}
export default PublicRoute