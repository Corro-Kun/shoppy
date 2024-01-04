import useAuth from "../../hooks/auth.ts";

export default function ButtonLoginWithGithub(){
  const {LoginWithGithub} = useAuth();

  return(
    <button onClick={()=>LoginWithGithub()} >Iniciar con Github</button>
  )
}
