import styles from "./Campus.module.css"
import CampusLayout from "../../components/Layout/CampusLayout"
import { Outlet } from "react-router-dom"

const Campus = () => {
    return (
        <CampusLayout>
            <Outlet />
        </CampusLayout>
    )
}
export default Campus