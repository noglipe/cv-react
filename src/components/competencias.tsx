import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaGitAlt, FaGithub, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAmazonwebservices, SiLinux, SiPostgresql } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import { VscTasklist } from "react-icons/vsc";

export default function Competencias() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1 mt-4 mb-2">
                <VscTasklist size={30} className="text-destaque" />
                <h3 className="font-bold text-xl">Competências</h3>
            </div>
            <div>
                <ul className="flex flex-wrap gap-4">
                    <li title="Python">
                        <FaPython size={30} />
                    </li>
                    <li title="Django">
                        <TbBrandDjango size={30} />
                    </li>
                    <li title="TypeScript">
                        <BiLogoTypescript size={30} />
                    </li>
                    <li title="React">
                        <FaReact size={30} /></li>
                    <li title="Next.JS">
                        <RiNextjsFill size={30} /></li>
                    <li title="Git">
                        <FaGitAlt size={30} /></li>
                    <li title="GitHub">
                        <FaGithub size={30} /></li>
                    <li title="Linux">
                        <SiLinux size={30} /></li>
                    <li title="TailWind">
                        <RiTailwindCssFill size={30} /></li>
                    <li title="BootStrap">
                        <FaBootstrap size={30} /></li>
                    <li title="PostGress">
                        <BiLogoPostgresql size={30} />
                    </li>
                    <li title="S3 - Amazon">
                        <SiAmazonwebservices size={30} />
                    </li>
                </ul>
            </div>
        </div>

    )
}