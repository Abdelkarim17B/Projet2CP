import Navbar from "../Components/Layout/Navbar"
import Footer from '../Components/Layout/Footer';

function Error404() {
  return (
    <div>
        <Navbar language="Français"/>
        <div className="h-full w-full flex items-center justify-center py-[5%]" >
            
        <img
  src="/404Error.png"
  className=" h-auto w-[46.65%] md:w-[66.58%] xl:w-[100%]"
  alt="Your Image"
/>
        </div>
        <Footer />
        </div>
  )
}

export default Error404