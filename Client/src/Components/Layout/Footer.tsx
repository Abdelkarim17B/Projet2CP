
function Footer() {
    return (
    <div>
      <div className="h-[60vh] w-full px-[9vw] bg-white">
        <div className="h-[49vh] py-[10vh] flex justify-between">
            <div className="flex flex-col gap-[4vh]">
                <h1 className="text-[2.5rem] font-bold text-BlueDark">Logo</h1>
                <p className="text-Gray text-[1.5rem] max-w-[23vw]">Find the Best Offer for your Business, by following us on social media</p>
                <div className="flex gap-[3vw]">
                    <img src={"/TwitterLogo.png"} alt="Twitter" />
                    <img src={"/FacebookLogo.png"} alt="Facebook" />
                    <img src={"/InstagramLogo.png"} alt="Instagram" />
                    <img src={"/LinkedinLogo.png"} alt="Linkedin" />
                </div>
            </div>
            <div className="flex gap-[6vw]">
                <div className="flex flex-col gap-[4vh]">
                    <h3 className="font-bold text-[1.6rem] text-BlueDark">Lorem</h3>
                    <ul className="flex flex-col gap-[1vh] text-[1.5rem] text-Gray">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[4vh]">
                    <h3 className="font-bold text-[1.6rem] text-BlueDark">Lorem</h3>
                    <ul className="flex flex-col gap-[1vh] text-[1.5rem] text-Gray">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[4vh]">
                    <h3 className="font-bold text-[1.6rem] text-BlueDark">Lorem</h3>
                    <ul className="flex flex-col gap-[1vh] text-[1.5rem] text-Gray">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[4vh]">
                    <h3 className="font-bold text-[1.6rem] text-BlueDark">Lorem</h3>
                    <ul className="flex flex-col gap-[1vh] text-[1.5rem] text-Gray">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="h-[11vh] py-[4vh] border-t-2 border-Gray66">
            <div className="flex justify-between">
                <span>© 2023 Equipe 14 les droits sont réservés</span>
                <div className="flex gap-[1vw]">
                    <img src={"/Instagram.png"} alt="Instagram" />
                    <img src={"/Dribble.png"} alt="Dribble" />
                    <img src={"/Twitter.png"} alt="Twitter" />
                    <img src={"/Youtube.png"} alt="Youtube" />
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Footer