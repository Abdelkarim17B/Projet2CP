import Footer from "../Components/Layout/Footer"
import Navbar from "../Components/Layout/Navbar"

function ConditionUtilisation() {
    return(
        <div>
            <Navbar language="Français"/>
            <div>
                <div className="h-full w-full flex flex-col justify-center  pt-[2%] px-[6%]">
                    <h1 className="font-bold text-[2rem] mb-[2%]">Terms & Conditions</h1>
                    <p className="text-left text-[2rem] mb-[4.5%]">You may only use versus.com (hereafter also referred to as “Site”) after agreeing to the following terms and conditions, which are effective immediately.<br/>
Our site is operated by URGE IO GmbH, c/o WorkRepublic, Tauentzienstraße 13, 10789 Berlin, Germany (hereafter referred to as “Versus”).</p>
                    <h1 className="font-bold text-[2rem] mb-[2%]">Introduction</h1>
                    <p className="text-left text-[2rem] mb-[4.5%]">These terms & conditions, along with the Privacy Policy, are legal agreements between you and Versus. By using, accessing or registering at versus.com, you agree to all the terms and conditions of this agreement. If you do not agree with these, then please do not access or use the Site.<br/>
Versus has the right to modify, add, or remove items in this agreement at any time by posting the amended terms on its Site.
</p>
                    <h1 className="font-bold text-[2rem] mb-[2%]">Disclaimer of Warranties; Limitation of Liability</h1>
                    <p className="text-left text-[2rem] mb-[4.5%]">
You acknowledge that URGE IO Gmbh, the Site, Versus cannot guarantee the continuous operation of or access to our sites, services such as embeddable iframes, applications, or tools, as a result of technical issues or numerous factors outside of our control. You agree that you are making use of our sites, and any other services at your own risk, on an "AS IS” and "AS AVAILABLE” basis. The Site and all service such as embeddable iframes can be revoked and changed at any time. Accordingly, to the extent permitted by applicable law, we exclude all express or implied warranties, terms and conditions including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
Versus does not warrant that product descriptions, pricing, editorial commentary or any other content on its site or embeddable iframes, regardless of its source, are accurate, complete, reliable, current, accessible or error-free. Versus provides content for informational purposes only, and does not endorse any product, service, or merchant. Versus takes no liability for inaccuracy or incompleteness in its search results, editorial content, user comments, embeddable iframes or other content on Versus.<br/>
Versus does not warrant and takes no liability that embeddable iframes from versus.com will be accessible; embeddable iframes from versus.com can be changed and revoked at any time.
</p>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConditionUtilisation