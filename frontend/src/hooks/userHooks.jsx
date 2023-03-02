import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSession } from "../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { ADD_STUDENT, CAMPUS } from "../config/routes/paths";


export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const role = useSelector((state) => state.user.role);

    if (token === null) {
        var session = JSON.parse(localStorage.getItem("nc_be_session"));
    }

    useEffect(() => {
        if (session) {
            dispatch(setSession(session));
            if (session.role === "ADMIN") {
                navigate(ADD_STUDENT);
            } else if (session.role === "STUDENT") {
                navigate(CAMPUS);
            }
        }
    }, [dispatch, navigate, session])


    const isAuthenticated = token !== null

    return { isAuthenticated, token, role };
}

export const useUserInfo = () => {
    const info = useSelector((state) => state.user.info);
    return info;
}

export const useLoading = () => {
    const { status } = useSelector((state) => state.user);
    return status === "loading";
}