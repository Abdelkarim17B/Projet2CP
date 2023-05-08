import { ScrollRestoration } from "react-router-dom"


function Error() {
  return (
    <div>
        <ScrollRestoration />
        <div className="bg-[#F0EFF2] h-screen w-full flex items-center justify-center">
            <img src="/404Error.png" className="h-auto w-[41vw]"alt="Your Image"/>
        </div>
    </div>
  )
}

export default Error