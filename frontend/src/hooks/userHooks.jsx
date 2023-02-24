import { useSelector } from "react-redux";

export const useAuth = () => {
    const token = useSelector((state) => state.user.token);
    return token === null ? false : true;
}

export const useUserInfo = () => {
    const { info } = useSelector((state) => state.user);
    return info;
}

export const useLoading = () => {
    const { status } = useSelector((state) => state.user);
    return status === "loading";
}