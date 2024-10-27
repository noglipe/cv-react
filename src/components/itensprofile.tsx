interface ContentProps {
    icon: React.ElementType;
    title: string;
    content: string;
}
export default function ItenProfile({ icon: Icon, title, content }: ContentProps) {
    return (
        <div className="flex flex-row mb-4">
            <div>
                <Icon size={30} className="text-destaque" />
            </div>
            <div>
                <p className="font-bold pl-3">{title}</p>
                <p className="pl-3">{content}</p>
            </div>
        </div>
    )
}