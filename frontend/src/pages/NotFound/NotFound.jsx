import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main className="background not_found">
            <h1>404</h1>
            <h2>El recurso que buscabas no ya no existe</h2>
            <Link to="/">Volver al inicio</Link>
        </main>
    )
}
export default NotFound