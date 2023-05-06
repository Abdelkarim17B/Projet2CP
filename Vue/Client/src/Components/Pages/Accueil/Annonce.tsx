
interface Props{
    imageUrl: String;
    Title: String;
    Bank: String;
}

function Annonce(props: Props) {
    return(
        <div className="px-[0.5vw]">
            <div className="lg:w-[22vw] lg:h-[32vh] w-[22vw] h-[20vw] bg-cover" style={{
            backgroundImage: `url(${props.imageUrl})`}}>
            <div className="font-semibold lg:w-[22vw] lg:h-[32vh] w-[22vw] h-[20vw] bg-[url('/Shad.png')] flex flex-col items-start pl-[10%] pt-[40%]">
                <h4 className="text-white text-[1.6rem]">{props.Bank}</h4>
                <h2 className="text-white text-[3rem]">{props.Title}</h2>
            </div>
        </div>
        </div>
    )
}

 export default Annonce