import { Outlet } from "react-router-dom"
import Layout from "./Layout/Layout"

const PrivateRoute = () => {
    return (
        <>
            <Layout>
                <Outlet />
            </Layout>
        </>
    )
}
export default PrivateRoute
