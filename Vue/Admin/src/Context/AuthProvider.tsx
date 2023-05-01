import { createContext , useState , ReactNode } from "react";

type AuthentificationInfos = {
    Email : string;
    Password : string;
    Token : string;
}

export type AuthContextType = {
    authInfo: AuthentificationInfos;
    setAuthInfo: (value: AuthentificationInfos) => void;
};

export const AuthContext = createContext<AuthContextType>({
    authInfo: {Password : "",Token : "",Email : ""},
    setAuthInfo: () => {},
});


export function AuthProvioder ({ children }: { children: ReactNode }) {
    const [ authInfo , setAuthInfo ] = useState<AuthentificationInfos>({Password : "",Token : "",Email : ""});
    return(
        <AuthContext.Provider value={{authInfo ,setAuthInfo}}>
            {children}
        </AuthContext.Provider>
    )
}