import Video1 from "../../public/0001-0250.gif"

export default function OdinRender() {
    return (
        <div className="w-full h-full rounded-3xl overflow-hidden">
            <img src={Video1.src} alt="Video"  className="w-full h-full object-cover"/>
        </div>
    )
}