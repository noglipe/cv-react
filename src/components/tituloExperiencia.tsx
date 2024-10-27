import { HiPlusSmall } from "react-icons/hi2";

interface TituloExperienciaProps {
    empresa: string,
    periodo: string,
}

export default function TituloExperiencia({ empresa, periodo }: TituloExperienciaProps) {
    return (
        <div className="flex flex-row p-2 mt-2 justify-between items-center">
            <div className="flex flex-row items-center">
                <HiPlusSmall size={30} />
                <h4 className=" italic">{empresa}</h4>
            </div>
            <h4 className=" italic">{periodo}</h4>
        </div>
    )
}