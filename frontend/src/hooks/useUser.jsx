import { useSelector } from "react-redux";

export const isAuthenticated = () => {
    const token = useSelector((state) => state.user.token);
    return token === null ? false : true;
}

export const user = () => {
    const { info } = useSelector((state) => state.user);
    return info;
}

export const isLoading = () => {
    const { status } = useSelector((state) => state.user);
    return status === "loading";
}