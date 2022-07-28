import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase} from "../../firebase/providers";
import { clearNotesLogout } from '../journal';
import { chekingCredentials, login, logout } from "./authSlices"

export const chekingAuthentication = (email, password) => {
    return async(dispatch ) => {
        dispatch(chekingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(chekingCredentials());
        const result= await signInWithGoogle();
        if(!result.ok) return dispatch(logout( {status:'not-authenticated' ,errorMessage: result.errorMessage} ));

        dispatch( login(result));
    }
}

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(chekingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( {status:'not-authenticated' ,errorMessage: result.errorMessage} ) );

        dispatch( login( result ));

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch(chekingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( {status:'not-authenticated' ,errorMessage: result.errorMessage} ) );
        
        dispatch( login( result ));

    }
}

export const startLogout= () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout({status:'not-authenticated' ,errorMessage: null}) );
    }
}