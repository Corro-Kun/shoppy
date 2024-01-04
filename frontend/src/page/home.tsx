import {useEffect, useState} from "react";
import {GetProfile} from "../api/auth.ts";

export default function Home(){
  const [profile, setProfile] = useState({});

  useEffect(()=>{
    getProfile();
  },[]);

  async function getProfile(){
    const token: string | null = localStorage.getItem("TokenUser");
    if (token) setProfile(await GetProfile(token))  
  }

  return(
    <>
      <h2>Home</h2>
      <p>Pagina principal</p> 
      <p>Bienvenido {profile?.login}</p>
      <img src={profile?.avatar_url} />
    </>
  )
}
