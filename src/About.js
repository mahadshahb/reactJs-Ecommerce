import HeroSection from './component/HeroSection';
import { useProductContext } from './context/productcontext';

const About = () => {
  // const {myName} = useProductContext();
  const data = {
    name:"About Us"
  }
  return (
    <>
    {/* {myName} */}
    <HeroSection myData={data}/>
    </>
  )
}

export default About
