import {Link} from "react-router-dom"

function Footer() {
    return (
    <div className="bg-white">
      <div className="w-full px-[9vw] bg-white">
        <div className=" py-[4vh]">
            <div className="flex md:flex-row flex-col md:justify-between gap-[6vh] items-center">
                <ul className="flex gap-[4vw] text-[1.5rem]">
                    <li className="text-BlueDark text-[1.1rem]">
                        <Link to="/Condition">Condition d’utilisation</Link>
                    </li>
                    <li className="text-BlueDark text-[1.1rem]">
                        <Link to="/Glossary">Glossary</Link>
                    </li>
                </ul>
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