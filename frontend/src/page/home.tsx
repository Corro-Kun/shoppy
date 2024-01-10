import Bar from "../components/Bar/Bar.tsx";
import {ProfileProvider} from "../context/profile.tsx";
import Carousel from "../components/Carousel/Carousel.tsx";

export default function Home(){
  return(
    <>
      <ProfileProvider>
        <Bar />
      </ProfileProvider>
      <Carousel />
    </>
  )
}
