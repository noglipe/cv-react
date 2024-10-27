import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import ItenProfile from "./itensprofile";
import ButtonsLink from "./buttonslink";



export default function Contatos() {
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap gap-2">
                <ItenProfile
                    icon={SlScreenSmartphone}
                    title="Celular / Whatsapp"
                    content="(27) 99792-5394"
                />
                <ItenProfile
                    icon={MdAlternateEmail}
                    title="Email"
                    content="nog.lipe@gmail.com"
                />
            </div>

            <div className="flex flex-wrap gap-3 print:hidden">
                <ButtonsLink
                    link="https://wa.me/+5527997925394"
                    icon={IoLogoWhatsapp}
                    titulo="Whatsapp"
                    color="green"
                />

                <ButtonsLink
                    link="https://www.linkedin.com/in/filipe-nogueira-souza/"
                    icon={IoLogoLinkedin}
                    titulo="Linkedin"
                    color="blue"
                />

                <ButtonsLink
                    link="https://github.com/noglipe"
                    icon={IoLogoGithub}
                    titulo="Github"
                    color="gray"
                />

            </div>

        </div>
    )
}