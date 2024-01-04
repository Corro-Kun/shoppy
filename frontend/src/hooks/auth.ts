import {useContext} from "react";
import {AuthContext}  from "../context/auth.tsx";

function useAuth(){
  const context = useContext(AuthContext);

  if(!context){
    throw new Error("AuthContext needs a AuthProvider father");
  }

  return context;
}

export default useAuth;
