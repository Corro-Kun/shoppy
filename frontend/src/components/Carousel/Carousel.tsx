import "./Carousel.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { WiMoonAltNew } from "react-icons/wi";

function Carousel(){
  return(
    <div className="Carousel-Div" >
      <div className="Carousel-Pictures-Div" >
        <div className="Carousel-Direction" ><samp><AiOutlineArrowLeft /></samp></div>
        <div className="Carousel-Center" >
          <picture>

          </picture>
          <div>
            <samp><WiMoonAltNew /></samp>
          </div>
        </div>
        <div className="Carousel-Direction" ><samp><AiOutlineArrowRight /></samp></div>
      </div>
      <div className="Carousel-Descripcion-Div" >
        div descripcion
      </div>
    </div>
  );
}

export default Carousel;

