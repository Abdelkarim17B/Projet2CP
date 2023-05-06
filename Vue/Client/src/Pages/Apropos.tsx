

function Apropos() {
  return (
  <div className="mb-[20vh]">
    <div className='h-full w-full flex flex-col justify-center items-center'>
       <div className="bg-[url('/BgApropos.png')] h-screen w-screen flex items-center justify-center md:justify-start mb-[10vh]">
      <img className="relative md:pl-[9vw] md:w-[32vw] w-[50vw]" src="/logoBanky.svg" alt="Second Image" />
    </div>
    <div className="h-full w-full flex flex-col justify-center px-[9vw] gap-[5vh]">
        <h1 className="font-medium max-w-[82vw] lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center text-BlueDark">À propos de nous</h1>
        <p className="md:text-[2rem] text-[1rem] md:text-justify text-center">Welcome to Banky, the online platform for comparing banks and their services! Our team of six students from the Higher National School of Computer Science in Algiers created this website with the goal of providing a user-friendly and comprehensive way for people to compare and choose the right bank for their needs.</p>                    
        <p className="md:text-[2rem] text-[1rem] md:text-justify text-center">We understand that choosing a bank can be overwhelming, especially with so many options and different types of accounts and services. That's why we created Banky to make the decision-making process easier and more efficient. Our website features a wide range of banks from across Algeria, along with detailed information about their services, fees, interest rates, and more.</p>
        <p className="md:text-[2rem] text-[1rem] md:text-justify text-center">We pride ourselves on providing accurate and up-to-date information that is easy to understand and use. Our team of developers and designers worked tirelessly to create a website that is not only functional but also visually appealing and easy to navigate. We believe that a well-designed website can make all the difference in helping users make informed decisions about their finances.</p>
        <p className="md:text-[2rem] text-[1rem] md:text-justify text-center">At Banky, we are committed to transparency and impartiality. We do not favor any particular bank or financial institution, and our ratings and reviews are based solely on objective data and user feedback. We also take data privacy and security very seriously, and we adhere to strict standards to ensure that our users' information is always protected.</p>
        <p className="md:text-[2rem] text-[1rem] md:text-justify text-center">We hope that you find Banky to be a helpful resource in your search for the right bank. If you have any questions or feedback, please don't hesitate to contact us. Thank you for choosing Banky!</p>                           
    </div>
    <div className="mt-[10vh] flex flex-col gap-[3vh]">
      <h1 className="font-medium max-w-[82vw] lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center text-BlueDark">Vous nous trouverez également sur</h1>
      <div className="flex gap-[2vw] justify-center">
          <img className="w-[12vw] lg:w-[3vw]" src={"/Instagram.png"} alt="Instagram" />
          <img className="w-[12vw] lg:w-[3vw]" src={"/Twitter.png"} alt="Twitter" />
          <img className="w-[12vw] lg:w-[3vw]" src={"/Youtube.png"} alt="Youtube" />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Apropos