import classNames from "classnames";

interface ButtonsProps {
    link: string;
    icon: React.ElementType;
    titulo: string;
    color: 'green' | 'blue' | 'red' | 'gray';
}

const colorClasses = {
    green: 'text-green-800 hover:bg-green-800',
    blue: 'text-blue-800 hover:bg-blue-800',
    red: 'text-red-800 hover:bg-red-800',
    gray: 'text-gray-800 hover:bg-gray-800',
};

export default function ButtonsLink({ link, icon: Icon, titulo, color }: ButtonsProps) {
    console.log(color)
    return (
        <a href={link}
            target="_blank"
            className={classNames(
                'flex flex-none w-[120px] gap-1 mb-0 border-2 rounded items-center text-center p-1',
                colorClasses[color],
                'hover:text-white'
            )}
        >
            <Icon size={25} />
            <p>
                {titulo}
            </p>
        </a>
    )
}