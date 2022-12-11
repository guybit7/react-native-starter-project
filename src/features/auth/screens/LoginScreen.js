import AuthContent from '../components/AuthContent';
import { login } from "../util/auth";
import LoadingOverlay from "../../../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function signinHandler({ username, password }) {
        setIsAuthenticating(true);
        try {
            const token = await login(username, password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert(error.error);
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging you in..." />;
    }

    return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
