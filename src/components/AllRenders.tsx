import Image from "next/image";

import Image1 from "../../public/brainrender.png";
import Image2 from "../../public/image5.png";
import Image3 from "../../public/musashi.png";
import Image4 from "../../public/shrine2.png";
import Image5 from "../../public/sadasfa.gif";
import Image6 from "../../public/Invertedspearofheaven.png";
import Image7 from "../../public/freaksawman.png";

export default function AllRender() {
    return (
        <div className="w-full h-full grid grid-rows-6 grid-cols-4 gap-5">
            <div
                className="col-span-2 row-span-3"
            >
                <Image src={Image5} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
            <div
                className="col-span-1 row-span-2"
            >
                <Image src={Image1} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
            <div
                className="col-span-1 row-span-2"
            >
                <Image src={Image4} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
            <div
                className="col-span-2 row-span-1"
            >
                <Image src={Image3} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
            <div
                className="col-span-3 row-span-2"
            >
                <Image src={Image2} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
            <div
                className="col-span-1 row-span-2"
            >
                <Image src={Image6} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
            <div
                className="col-span-2 row-span-2"
            >
                <Image src={Image7} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
            <div
                className="col-span-2 row-span-2"
            >
                <Image src={Image7} alt="" className="w-full h-full object-cover rounded-3xl"></Image>
            </div>
        </div>
    )
}