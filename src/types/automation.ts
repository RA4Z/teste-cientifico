import { Timestamp } from '@firebase/firestore-types';

export interface AutomationType {
    id: string,
    arquivo_zip: string,
    caminho_groups: string,
    data_desenvolvimento: Timestamp,
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

export interface IndicadoresType {
    NOME: string,
    DESCRIÇÃO: string
    CRIADO_POR: string,
    CRIADO_EM: string,
    DATABASES: string[],
    ATUALIZACAO: string,
    FILE_TYPE: string
    USABILIDADE: string,
    LINK_GROUPS: string,
    LINK_WEB: string,
}