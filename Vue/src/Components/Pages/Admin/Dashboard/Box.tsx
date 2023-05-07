
interface BoxProps {
    text1: string;
    text2: string;
  }
  const Box: React.FC<BoxProps> = ({ text1, text2 }) => {
    return (
    <div className="w-[504px] h-[275px] bg-BlueDark flex justify-center items-center flex-col rounded-[0.4rem] gap-[1.4rem] ">
        <p className="text-center text-white font-bold text-[2.09rem]">{text1}</p>
  <p className="text-center text-white font-bold text-[2.09rem]">{text2}</p>
    </div>
    )}


    export default Box