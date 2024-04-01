export interface AutomationType {
    id: string,
    arquivo_zip: string,
    caminho_groups: string,
    data_desenvolvimento: string,
    descricao: string,
    desenvolvedor: string,
    empresa: string,
    fluxograma: string,
    imagem: string,
    nome: string,
    pseudocodigo: string,
    solicitante: string,
    manual: boolean
}

export interface HistoryType {
    id: string,
}

export interface HistoryItemType {
    id: string,
    duracao: string,
    horaExec: string,
    quantidade: number
}