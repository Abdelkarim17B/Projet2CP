
interface infos{
    Personnel1:String;
    Personnel2:String;
    Entreprise1:String;
    Entreprise2:String;
    Proffessionel1:String;
    Proffessionel2:String;
}

function Results(props: infos) {
    return ( 
        <div className="flex flex-col py-[4vh] w-[100%]">
            <div className="flex items-center justify-between">
                <h5 className="bg-Gray66 text-white w-[15%] py-[1vh] flex justify-center items-center">Personnel</h5>
                <h3 className="text-[1.5rem] font-medium text-gray-900 min-w-[25%] max-w-[25%]">{props.Personnel1}</h3>
                <div className="bg-white w-[1px] h-[10vh]"></div>
                <h3 className="text-[1.5rem] font-medium text-gray-900 min-w-[25%] max-w-[25%]">{props.Personnel2}</h3>
                <h5 className="bg-Gray66 text-white w-[15%] py-[1vh] flex justify-center items-center">Personnel</h5>
            </div>
            <div className="flex items-center justify-between">
                <h5 className="bg-Gray66 text-white w-[15%] py-[1vh] flex justify-center items-center">Entreprise</h5>
                <h3 className="text-[1.5rem] font-medium text-gray-900 min-w-[25%] max-w-[25%]">{props.Entreprise1}</h3>
                <div className="bg-white w-[1px] h-[10vh]"></div>
                <h3 className="text-[1.5rem] font-medium text-gray-900 min-w-[25%] max-w-[25%]">{props.Entreprise2}</h3>
                <h5 className="bg-Gray66 text-white w-[15%] py-[1vh] flex justify-center items-center">Entreprise</h5>
            </div>
            <div className="flex items-center justify-between">
                <h5 className="bg-Gray66 text-white w-[15%] py-[1vh] flex justify-center items-center">Proffessionel</h5>
                <h3 className="text-[1.5rem] font-medium text-gray-900 min-w-[25%] max-w-[25%]">{props.Proffessionel1}</h3>
                <div className="bg-white w-[1px] h-[10vh]"></div>
                <h3 className="text-[1.5rem] font-medium text-gray-900 min-w-[25%] max-w-[25%]">{props.Proffessionel2}</h3>
                <h5 className="bg-Gray66 text-white w-[15%] py-[1vh] flex justify-center items-center">Proffessionel</h5>
            </div>
        </div>
    )
}

export default Results