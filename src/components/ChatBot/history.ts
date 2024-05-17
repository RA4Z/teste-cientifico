import { kanbanDoc } from "docs/kanban_eletronico"
import { procedures } from "docs/procedimentos/procedimentos_pcp"
import { indicadoresMensais } from "docs/procedimentos/indicadoresMensais"
import { procedimentosSecretaria } from "docs/procedimentos/procedimentosSecretaria"
import { requisitosPCP } from "docs/requisitos_pcp"
import { colaboradores } from "docs/colaboradores"
import { agendaPCP } from "docs/agendaPCP"
import { jobsPCP } from "docs/jobsPCP"

import { wpm1724 } from "docs/normas/norma_wpm1724"
import { wpm2412 } from "docs/normas/norma_wpm2412"
import { wpm2626 } from "docs/normas/norma_wpm2626"
import { wpm2642 } from "docs/normas/norma_wpm2642"
import { wpr6884 } from "docs/normas/norma_wpr6884"
import { wpm22641 } from "docs/normas/norma_wpm22641"
import { wpm22685 } from "docs/normas/norma_wpm22685"
import { wpm48914 } from "docs/normas/norma_wpm48914"

import { wps21319 } from "docs/normas/norma_wps21319"
import { transacoes } from "docs/transacoes"

export const history = [
    {
        role: "user",
        parts: [{ text: "Olá" }],
    },
    {
        role: "model",
        parts: [{ text: "Olá! Sou o Raz, assistente da equipe de PCP aqui da WEG Energia. Estou aqui para ajudar no que for preciso. Com o que posso auxiliar hoje?" }],
    },
    {
        role: "user",
        parts: [{ text: "Quem é você?" }],
    },
    {
        role: "model",
        parts: [{ text: "Olá! Sou o Raz, assistente da equipe de PCP aqui da WEG Energia. Estou aqui para ajudar no que for preciso. Com o que posso auxiliar hoje?" }],
    },
    {
        role: "user",
        parts: [{ text: "Quando você foi desenvolvido?" }],
    },
    {
        role: "model",
        parts: [{ text: "Meu desenvolvimento teve início em maio de 2024, o nome do meu criador é Robert Aron Zimmermann." }],
    },

    ///// <DOCUMENTOS E NORMAS> /////
    {
        role: "user",
        parts: [{ text: `Todos os colaboradores do PCP` }],
    },
    {
        role: "model",
        parts: [{ text: colaboradores }],
    },
    {
        role: "user",
        parts: [{ text: `Programas SAP e suas transações` }],
    },
    {
        role: "model",
        parts: [{ text: transacoes }],
    },
    {
        role: "user",
        parts: [{ text: `Lista em extenso com todos os JOBS do PCP` }],
    },
    {
        role: "model",
        parts: [{ text: jobsPCP }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso de procedimentos e truques para o PCP (Agenda Marguit)` }],
    },
    {
        role: "model",
        parts: [{ text: agendaPCP }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso de procedimentos que a secretária do PCP realiza para os membros do time` }],
    },
    {
        role: "model",
        parts: [{ text: procedimentosSecretaria }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso com todos o procedimentos dos indicadores mensais que são realizados pela secretária do PCP.` }],
    },
    {
        role: "model",
        parts: [{ text: indicadoresMensais }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso do Kanban Eletrônico` }],
    },
    {
        role: "model",
        parts: [{ text: kanbanDoc }],
    },
    {
        role: "user",
        parts: [{ text: `Link do Kanban Eletrônico` }],
    },
    {
        role: "model",
        parts: [{
            text: `Kanban Eletrônico - MEG (Máquinas Eletro Girantes): https://app.powerbi.com/view?r=eyJrIjoiNzRiNDk3NDYtNGNlMi00ODkwLTlmOWEtODYwNTJmMDc0NDczIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9
        Kanban Eletrônico - Turbinas: https://app.powerbi.com/view?r=eyJrIjoiZmY0ZTc4MDgtYWFlMi00ZTBiLWJlNTYtOTdlMzQ3YjI5YWM2IiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9` }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata do Lead Time do Kanban Eletrônico` }],
    },
    {
        role: "model",
        parts: [{ text: wps21319 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata de Modificar Ordem de Venda e Compras` }],
    },
    {
        role: "model",
        parts: [{ text: wpm2412 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata de Modificar Ordens de Venda e Produto` }],
    },
    {
        role: "model",
        parts: [{ text: wpm22641 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata de Planejar e Controlar Produção` }],
    },
    {
        role: "model",
        parts: [{ text: wpm22685 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata do procedimento para ampliar e modificar materiais e listas técnicas para os centros / Claim e ECM` }],
    },
    {
        role: "model",
        parts: [{ text: wpm1724 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata do procedimento para elaboração, alteração, análise crítica, aprovação e controle de distribuição dos documentos emitidos na Seção de Planejamento da Produção` }],
    },
    {
        role: "model",
        parts: [{ text: wpm2626 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata do procedimento para identificar, armazenar, proteger, recuperar e reter os registros do Departamento de Planejamento e Controle da Produção` }],
    },
    {
        role: "model",
        parts: [{ text: wpm2642 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata do Planejamento de ordens seriadas` }],
    },
    {
        role: "model",
        parts: [{ text: wpm48914 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata do procedimento para inventário de produtos acabados, materiais comprados e manufaturados, controlados e não controlados por SAD (Sistema de Administração de Depósito)` }],
    },
    {
        role: "model",
        parts: [{ text: wpr6884 }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata dos procedimentos gerais do PCP` }],
    },
    {
        role: "model",
        parts: [{ text: procedures }],
    },
    {
        role: "user",
        parts: [{ text: `Manual em extenso que trata dos requisitos mínimos de cada cargo no PCP` }],
    },
    {
        role: "model",
        parts: [{ text: requisitosPCP }],
    },
    {
        role: "user",
        parts: [{ text: `Todas as normas` }],
    },
    {
        role: "model",
        parts: [{ text: `Acesse o link https://wegdoc.weg.net/softexpert/workspace?page=home para poder acessar todas as normas da WEG` }],
    },
    ///// <DOCUMENTOS E NORMAS> /////  
]