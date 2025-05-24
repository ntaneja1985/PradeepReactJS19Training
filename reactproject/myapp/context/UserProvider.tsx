import {useNavigate} from "react-router-dom";
import {createContext, ReactNode, useContext, useState} from "react";
import AuthService from "../services/Auth.service.ts";
import {useSelector} from "react-redux";
import {authActions} from "../src/actions/auth.actions.ts";
import store from "../src/store/store.ts";

interface UserProviderProps {
    children: ReactNode;
}

// Define the User type (adjust based on your AuthService user structure)
interface User {
    username: string;
    password: string;
    // Add other user properties as needed
}

// Define the context value type
interface UserContextType {
    currentUser: User | null;
    loginClick: (user: User) => void;
    logoutClick: () => void;
}

// Create the context with undefined as default (no fallback to null)
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to access context safely
export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
function UserProvider({ children }: UserProviderProps) {
    //const [currentUser, setCurrentUser] = useState<User | null>(AuthService.getUser());
    const currentUser = useSelector(state =>state.authReducer.currentUser);
    const navigate = useNavigate();

    const loginClick = (user: User) => {
        debugger;
        store.dispatch(authActions.login(user));
        //setCurrentUser(user);
        //AuthService.setAuthUser(user);
    };

    const logoutClick = () => {
        //setCurrentUser(null);
        //AuthService.removeAuthUser();
        store.dispatch(authActions.logout());
        navigate('/login');
    };

    return (
        <UserContext.Provider value={{ currentUser, loginClick, logoutClick }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;