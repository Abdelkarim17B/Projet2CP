import { ScrollRestoration } from "react-router-dom"

function ConditionUtilisation() {
    return(
        <div className="w-full flex flex-col justify-center gap-[5vh] py-[20vh] px-[9vw] bg-[#F0EFF2]">
            <ScrollRestoration />
            <div>
                <h1 className="font-bold text-[1.3rem] md:text-[1.7] lg:text-[2rem]">Terms & Conditions</h1>
                <p className="text-justify pt-[2vh]">En utilisant ce site web, vous acceptez les conditions d'utilisation suivantes. Veuillez les lire attentivement avant d'accéder au site ou d'utiliser ses services.<br/><br/>

1) Accès et utilisation du site<br/>
<br/>

- L'accès à ce site est ouvert à tous les utilisateurs, et son utilisation est gratuite. Vous devez avoir au moins 18 ans ou l'âge légal requis dans votre pays pour utiliser ce site.
- Vous êtes responsable de maintenir la confidentialité de vos informations de connexion (nom d'utilisateur et mot de passe) et de ne pas les partager avec des tiers non autorisés.
- Vous acceptez de ne pas utiliser le site à des fins illégales, de harceler, diffamer ou porter atteinte à la vie privée d'autres utilisateurs, de violer les droits de propriété intellectuelle ou de compromettre la sécurité du site.<br/><br/>

2) Propriété intellectuelle<br/>
<br/>
- Tous les contenus présents sur ce site, y compris les textes, les images, les logos et les graphiques, sont la propriété intellectuelle de notre entreprise ou de nos partenaires.
- Vous reconnaissez que vous n'acquérez aucun droit de propriété sur ces contenus et vous vous engagez à ne pas les copier, reproduire, distribuer ou utiliser à des fins commerciales sans l'autorisation préalable écrite de notre entreprise ou des détenteurs des droits.<br/><br/>

3) Exactitude des informations<br/>
<br/>
- Les informations fournies sur ce site sont destinées à des fins informatives uniquement et peuvent être sujettes à des changements sans préavis.
- Nous nous efforçons de maintenir ces informations à jour, mais nous ne pouvons pas garantir leur exactitude, leur exhaustivité ou leur pertinence. Vous êtes responsable de vérifier l'exactitude des informations avant de prendre des décisions basées sur celles-ci.<br/><br/>

4) Responsabilité<br/>
<br/>
- Nous déclinons toute responsabilité quant à l'utilisation que vous faites des informations fournies sur ce site. Vous utilisez le site à vos propres risques et vous êtes seul responsable des décisions prises en fonction des informations disponibles.
- Nous ne serons pas tenus responsables des dommages directs, indirects, consécutifs, spéciaux ou punitifs résultant de l'utilisation ou de l'incapacité d'utiliser ce site, y compris les pertes de données, les interruptions de service, les erreurs ou les omissions.<br/><br/>

5) Modifications des conditions d'utilisation<br/>
<br/>
- Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment et sans préavis. Les modifications prendront effet dès leur publication sur le site.
- Il est de votre responsabilité de consulter régulièrement les conditions d'utilisation mises à jour. Votre utilisation continue du site après la publication des modifications constitue votre acceptation de ces modifications.

Si vous n'acceptez pas ces conditions d'utilisation, veuillez ne pas utiliser ce site. Si vous avez des questions ou des préoccupations concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse fournie sur le site.</p>
            </div>

           
        </div>
    )
}

export default ConditionUtilisation