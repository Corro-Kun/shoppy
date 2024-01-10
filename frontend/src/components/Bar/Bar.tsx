import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./Bar.css";
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { GrAddCircle } from "react-icons/gr";
import { useProfile } from "../../context/profile.tsx";

export default function Bar(){
  const navigate = useNavigate();
  const {getProfile, Profile} = useProfile();

  useEffect(()=>{
    getProfile();
  },[]);

  return(
    <header className="Header-Bar" >
      <div className="Header-Bar-Response" >
        <div className="Header-Bar-Title" >
          <h2 className="Header-Bar-Title-h2" >Shoppy</h2>
          <h2 className="Header-Bar-Title-Search" ><IoMdSearch /></h2>
        </div>
        <div className="Header-Bar-Profile" >
          {Profile?
            <>
              <h1 onClick={()=> navigate("/add/product")} ><GrAddCircle /></h1>
              <h1><CiShoppingCart /></h1>
              <picture>
                <img src={Profile?.avatar_url} loading="lazy" />
              </picture>
            </> 
            :
            <h2>No perfil</h2>
          }
        </div>
      </div>
    </header>
  )
}
