import FuncaoExperiencia from "./funcaoExperiencia";
import TituloExperiencia from "./tituloExperiencia";

export default function ContainerExperiencia() {
    return (
        <>
            <div className="flex flex-col w-full ">
                <TituloExperiencia
                    empresa="Viação Praia Sol"
                    periodo="02/2019 - 04/2024"
                />
                <FuncaoExperiencia
                    titulo="ELABORAÇÃO DE PLANILHAS"
                    descricao="Criação de planilhas utilizando VB e formulás que automativam a importação de dados de forma automática categorizando cada uma das informações recebidas. Esta planilha era utilizada para alimentar um BI onde se podia contabilizar o serviço realizado e a taxa de sucesso na resolução dos problemas"
                />
                <FuncaoExperiencia
                    titulo="ELABORAÇÃO DE RELATÓRIOS"
                    descricao="Utilizava o Power Bi para criar relatórios utilizados nas reuniões de diretoria. Criei uma aplicação em python no Google Colab que ao executar solicitava alguns relatórios que ao processar os dados gerava uma relatório em html onde continha estes as informações principais de forma objetiva e visual para ser utilizados em audiências jurídias da empresa."
                />
                <FuncaoExperiencia
                    titulo="ELABORAÇÃO DE FERRAMENTAS"
                    descricao="Através do python criava pequenas ferramentas para automatizar algumas tarefaz como: Enrar no sistema online utilizado para obter e responder as reclamações do usuário e verificar o status e contabilizar a quantidade de responstas positivas e negativas obtidas"
                />
            </div>
            <div className="flex flex-col w-full ">
                <TituloExperiencia
                    empresa="Igreja Batista Vida e Paz"
                    periodo="06/2023 - até o momento"
                />
                <FuncaoExperiencia
                    titulo="DESENVOLVIMENTO DE SISTEMA"
                    descricao="Criação de um Sistema Online para controle finaneiro. A primeira verssão do sistema foi toda feita com Django no BackEnd e FrontEnd. Já a segunda verssão utiliza o Django-Rest-Framework no BackEnd para criação de API e do Next.JS no Front consumindo a API. O Banco de dados utilizado é o Postgress e para armazenamento de arquivos utilizo o S3 da Amazom"
                />
                <FuncaoExperiencia
                    titulo="ELABORAÇÃO DE RELATÓRIOS"
                    descricao="Emito alguns relatórios de BI com o Looker da Google"
                />
            </div>
        </>


    )
}