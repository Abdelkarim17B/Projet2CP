import InfoBank from "../Components/Pages/ResultatComparison/InfoBank"
import Results from "../Components/Pages/ResultatComparison/Results"

function ResultatComparison() {
    return ( 
        <div>
            <div className="bg-[#F0EFF2]">
                {/* les infos des deux banques*/}
                <div className="flex px-[9vw] py-[30vh]">
                    <InfoBank imageUrl="/BNA.png" BankName="BANQUE NATIONALE D’ALGÉRIE « BNA »" nationalite="Algerienne" BankLocation="08, rue Amar Mekkid, 16040 Hussein Day-Alger" BankPhone="(023) 77 11 44" BankFix="(023) 77 10 40" BankMail="cec@bna.dz" BankWebsite="https://www.bna.dz/" Profile={false} />
                    <div className="bg-BlueDark w-[1px] h-[90vh]"></div>
                    <InfoBank imageUrl="/SocieteGenerale.svg" BankName="Societe Generale" nationalite="Française"  BankLocation="17, Bd Colonel Amirouche, B.P 484, Alger" BankPhone="213 (0)21 989 323" BankFix="021 39 54 40" BankMail="contact@badr.dz" BankWebsite="https://badrbanque.dz/#" Profile={false}/>
                </div>

                {/* les resultats de la comparaison*/}
                <Results Titre="Ouverture compte" Pro1="Gratuit" Comp1="Gratuit" Perso1="Gratuit" Pro2="Gratuit" Comp2="Gratuit" Perso2="Gratuit" />
                <Results Titre="Tenue chèque" Pro1="500 DA/An" Comp1="Gratuit" Perso1="200 DA/An" Pro2="Gratuit" Comp2="Gratuit" Perso2="Gratuit" />
                <Results Titre="Tenue Epargne" Pro1="Gratuit" Comp1="Gratuit" Perso1="Gratuit" Pro2="Gratuit" Comp2="Gratuit" Perso2="Gratuit" />
            </div>
        </div>
    )
}

export default ResultatComparison