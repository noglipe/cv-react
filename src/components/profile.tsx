
import SobreMim from "./sobremim";
import Contatos from "./cotatos";
import FotoPerfil from "../../public/foto-perfil.jpg"
import Image from "next/image";
import Competencias from "./competencias";

export default function Profile() {
    return (
        <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-center">
                <Image
                    src={FotoPerfil}
                    alt="Foto de Perfil"
                    height={200}
                    className="rounded-full object-cover"
                />

            </div>

            <SobreMim />
            <Competencias />
            <Contatos />

        </div >
    )
}