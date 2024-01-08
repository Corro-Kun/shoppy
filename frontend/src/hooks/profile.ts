import {useContext} from "react";
import {ProfileContext} from "../context/profile.tsx";

function useProfile(){
  const context = useContext(ProfileContext);

  if(!context){
    throw new Error("useProfile must be inside ProfileProvider");
  }

  return context;
}

export default useProfile;
