import { useSelector } from "react-redux";

export const useAuth = () => {
    const token = useSelector((state) => state.user.token);
    const isAuthenticated = token === null ? false : true;
    return { isAuthenticated, token };
}

export const useUserInfo = () => {
    const info = useSelector((state) => state.user.info);
    return info;
}

export const useLoading = () => {
    const { status } = useSelector((state) => state.user);
    return status === "loading";
}