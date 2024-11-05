import Image from "next/image"
import Image1 from "../../public/Cycles.png"
import Image2 from "../../public/eevee.png"

export default function Comparison() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="">
                <div className="text-[7vw]">Forskjellen mellom</div>
            </div>
            <div className="flex h-[60vh] gap-5">
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="text-white text-[3vw]">Cycles</div>
                    <Image src={Image1} alt="" className="w-full object-contain rounded-3xl"></Image>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="text-white text-[3vw]">Eevee</div>
                    <Image src={Image2} alt="" className="w-full object-contain rounded-3xl"></Image>
                </div>
            </div>
        </div>
    )
}