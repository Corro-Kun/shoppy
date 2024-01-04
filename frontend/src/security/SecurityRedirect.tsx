import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {GetToken} from "../api/auth.ts";

function Security(){
  const navigate = useNavigate();

  useEffect(()=>{
    const code:string | null = new URLSearchParams(window.location.search).get('code');

    if(code){
      Token(code);
    }

  },[]); 

  async function Token(c:string){
    const data = await GetToken(c);
    const token = data.substring(data.indexOf('=')+1, data.indexOf('&'))
    if(token != "bad_verification_code"){
      localStorage.setItem("TokenUser",token);
      navigate('/');
    }
  }

  return(
    <Outlet />
  )
}

export default Security;
