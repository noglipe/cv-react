interface FuncaoProps {
    titulo: string,
    descricao: string
}

export default function FuncaoExperiencia({ titulo, descricao }: FuncaoProps) {
    return (
        <div className="p-2">
            <h5 className="text-lg font-bold uppercase'">{titulo}</h5>
            <p className="mt-2">{descricao}</p>
        </div>
    )
}