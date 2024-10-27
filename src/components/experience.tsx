import { TbCodeCircle2Filled } from "react-icons/tb";
import ContainerExperiencia from "./contentExperiencia";



export default function Experience() {
    return (
        <div className="flex flex-col grow">
            <div className="flex flex-row gap-2 h-[50px] w-full border-b-2 border-gray-500">
                <TbCodeCircle2Filled size={30} className="text-destaque" />
                <h1 className="text-xl font-bold">EXPERIÊNCIAS</h1>
            </div>

            <ContainerExperiencia />

        </div>
    )
}
