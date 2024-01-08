import {createContext, useState, useContext} from "react";
import {GetProfile} from "../api/auth.ts";

export const ProfileContext = createContext({} as any);

export const useProfile = ()=> useContext(ProfileContext);

export function ProfileProvider({children}:{children:React.ReactNode}){
  const [Profile, setProfile] = useState({} as any); 

  async function getProfile(){
    const token: string | null = localStorage.getItem("TokenUser");
    if (token){
      const data = await GetProfile(token);
      setProfile(data);
    }
  } 
    
  return(
    <ProfileContext.Provider value={{getProfile, Profile}} >
      {children}
    </ProfileContext.Provider>
  );
}

