import { TbCodeCircle2 } from "react-icons/tb";

export default function SobreMim() {
    return (
        <div className="flex flex-row">
            <div className="w-1/12">
                <TbCodeCircle2 size={30} className="text-destaque mt-2" />
            </div>
            <div className="flex flex-col w-11/12">
                <p className="pl-2 mt-2">Olá sou o Filipe!</p>
                <p className="pl-2 mt-2">Gosto de utilizar a tecnologia para desenvolver soluções que melhore resultados e performace. </p>
            </div>
        </div>
    )
}