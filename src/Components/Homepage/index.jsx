import Herosection from "./HeroSection"
import Leaders from "./Leaders"
import Pormotion from "./Promotion"
import Services from "./Services"

const Home = () => {
  return (
    <div className="">
        <Herosection/>
        <Services/>
        <Pormotion/>
        <Leaders/>
    </div>
  )
}

export default Home