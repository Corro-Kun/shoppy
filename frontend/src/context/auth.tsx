import {createContext} from "react";

export const AuthContext = createContext({} as any);

export function AuthProvider({children}:{children:React.ReactNode}){

  function LoginWithGithub(){
    window.location.assign("https://github.com/login/oauth/authorize?client_id=749f49141d63fa9cca42")
  } 

  return(
    <AuthContext.Provider value={{LoginWithGithub}} >
      {children}
    </AuthContext.Provider>
  ); 
}
