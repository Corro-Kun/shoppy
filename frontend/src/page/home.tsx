import {useEffect, useState} from "react";
import {GetProfile} from "../api/auth.ts";
import Bar from "../components/Bar/Bar.tsx";
import {ProfileProvider} from "../context/profile.tsx";

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
      <ProfileProvider>
        <Bar />
      </ProfileProvider>
      <h2>Home</h2>
      <p>Pagina principal</p> 
      <p>Bienvenido {profile?.login}</p>
      <img src={profile?.avatar_url} />
    </>
  )
}
