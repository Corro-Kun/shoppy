import ButtonLogin from "../components/ButtonLoginWithGithub/ButtonLoginWithGithub.tsx"
import {AuthProvider} from "../context/auth.tsx"

function Login(){
  return(
    <AuthProvider>
      <ButtonLogin /> 
    </AuthProvider>
  );
}

export default Login;
