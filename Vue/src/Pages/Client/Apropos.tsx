import { ScrollRestoration } from "react-router-dom"


function Apropos() {
  return (
  <div className="mb-[20vh]">
    <ScrollRestoration />
    <div className='h-full w-full flex flex-col justify-center items-center'>
       <div className="bg-[url('/BgApropos.png')] h-screen w-screen flex items-center justify-center md:justify-start mb-[10vh]">
      <img className="relative md:pl-[9vw] md:w-[32vw] w-[50vw]" src="/logoBanky.svg" alt="Second Image" />
    </div>
    <div className="h-full w-full flex flex-col justify-center px-[9vw] gap-[5vh]">
        <h1 className="font-medium max-w-[82vw] lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center text-BlueDark">À propos de nous</h1>
        <p className="md:text-[2rem] text-[1rem] md:text-justify text-center">Bienvenue sur Banky, la plateforme en ligne de comparaison des banques et de leurs services ! Notre équipe de six étudiants de l'École nationale supérieure d'informatique d'Alger a créé ce site web dans le but de fournir un moyen convivial et complet pour les gens de comparer et de choisir la bonne banque pour leurs besoins.<br/><br/>

Nous comprenons que le choix d'une banque peut être accablant, notamment en raison du grand nombre d'options et des différents types de comptes et de services. C'est pourquoi nous avons créé Banky afin de rendre le processus de décision plus facile et plus efficace. Notre site Web présente un large éventail de banques dans toute l'Algérie, ainsi que des informations détaillées sur leurs services, leurs frais, leurs taux d'intérêt et bien plus encore.<br/><br/>

Nous sommes fiers de fournir des informations précises et actualisées, faciles à comprendre et à utiliser. Notre équipe de développeurs et de concepteurs a travaillé sans relâche pour créer un site web non seulement fonctionnel, mais aussi visuellement attrayant et facile à naviguer. Nous sommes convaincus qu'un site web bien conçu peut faire toute la différence en aidant les utilisateurs à prendre des décisions éclairées concernant leurs finances.<br/><br/>

Chez Banky, nous nous engageons à faire preuve de transparence et d'impartialité. Nous ne favorisons aucune banque ou institution financière en particulier, et nos évaluations et avis sont uniquement basés sur des données objectives et les commentaires des utilisateurs. Nous prenons également très au sérieux la confidentialité et la sécurité des données, et nous adhérons à des normes strictes pour garantir que les informations de nos utilisateurs sont toujours protégées.<br/><br/>

Nous espérons que Banky vous sera utile dans votre recherche de la bonne banque. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter. Merci d'avoir choisi Banky !</p>                    
                                
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