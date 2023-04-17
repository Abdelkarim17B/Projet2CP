import Footer from '../Components/Layout/Footer'
import Navbar from '../Components/Layout/Navbar'

function Apropos() {
  return (<div>
    <div className='h-full w-full flex flex-col justify-center py-[5%]'>
       <div className="relative ">
      <img className="absolute object-cover w-full h-auto" src="/BgApropos.png" alt="First Image" />
      <img className="relative ml-[5%] mt-[8%] max-w-full max-h-full scale-[70%] " src="/logoBanky.svg" alt="Second Image" />
    </div>
    <div className="h-full w-full flex flex-col justify-center  pt-[25%] px-[6%]">
                    <h1 className="font-bold text-[2rem] mb-[2%] text-center ">À propos de nous</h1>
                    <p className="text-left text-[2rem] mb-[4.5%]">Welcome to Banky, the online platform for comparing banks and their services! Our team of six students from the Higher National School of Computer Science in Algiers created this website with the goal of providing a user-friendly and comprehensive way for people to compare and choose the right bank for their needs.</p>                    
                    <p className="text-left text-[2rem] mb-[4.5%]">We understand that choosing a bank can be overwhelming, especially with so many options and different types of accounts and services. That's why we created Banky to make the decision-making process easier and more efficient. Our website features a wide range of banks from across Algeria, along with detailed information about their services, fees, interest rates, and more.</p>
                    <p className="text-left text-[2rem] mb-[4.5%]">We pride ourselves on providing accurate and up-to-date information that is easy to understand and use. Our team of developers and designers worked tirelessly to create a website that is not only functional but also visually appealing and easy to navigate. We believe that a well-designed website can make all the difference in helping users make informed decisions about their finances.</p>
                    <p className="text-left text-[2rem] mb-[4.5%]">At Banky, we are committed to transparency and impartiality. We do not favor any particular bank or financial institution, and our ratings and reviews are based solely on objective data and user feedback. We also take data privacy and security very seriously, and we adhere to strict standards to ensure that our users' information is always protected.</p>
                    <p className="text-left text-[2rem] mb-[4.5%]">We hope that you find Banky to be a helpful resource in your search for the right bank. If you have any questions or feedback, please don't hesitate to contact us. Thank you for choosing Banky!</p>                 
                    
                </div>
                <div>
                <h1 className="font-bold text-[2rem] mb-[2%] text-center ">Vous nous trouverez également sur</h1>
                <div className="flex gap-[1vw] justify-center">
                    <img src={"/Instagram.png"} alt="Instagram" />
                    <img src={"/Twitter.png"} alt="Twitter" />
                    <img src={"/Youtube.png"} alt="Youtube" />
                </div>
                </div>
    </div>
    </div>
  )
}

export default Apropos