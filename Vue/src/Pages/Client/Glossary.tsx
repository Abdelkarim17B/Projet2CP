import { ScrollRestoration } from "react-router-dom"

function Glossary() {
  return (
    <div>
        <ScrollRestoration />
        <div className="bg-[#F0EFF2] h-screen w-full flex items-center justify-center">
            <h2>Glossary</h2>
        </div>
    </div>
  )
}

export default Glossary