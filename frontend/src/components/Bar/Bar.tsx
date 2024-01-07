import "./Bar.css";
import { IoMdSearch } from "react-icons/io";

export default function Bar(){
  return(
    <header className="Header-Bar" >
      <div className="Header-Bar-Response" >
        <div className="Header-Bar-Title" >
          <h2 className="Header-Bar-Title-h2" >Shoppy</h2>
          <h2 className="Header-Bar-Title-Search" ><IoMdSearch /></h2>
        </div>
        <div className="Header-Bar-Profile" >
          <picture>
            <img src="https://affinitaslegal.com/wp-content/uploads/2023/10/imagen-perfil-sin-foto.jpg" loading="lazy" />
          </picture>
        </div>
      </div>
    </header>
  )
}
