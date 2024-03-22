export interface AutomationType {
    id: string,
    arquivo_zip: string,
    caminho_groups: string,
    data_desenvolvimento: string,
    descricao: string,
    desenvolvedor: string,
    imagem: string,
    nome: string,
    solicitante: string
}

export interface HistoryType {
    id:string,
}

export interface HistoryItemType {
    id: string,
    duracao: string,
    horaExec: string,
    quantidade: number
}