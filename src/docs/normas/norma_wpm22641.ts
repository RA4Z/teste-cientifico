export const wpm22641 = `
Modificar Ordens de Venda e Produto WPM-22641 PT
Seção Planejamento da Produção
Rev. 02
1. Objetivo
Esta Norma estabelece o procedimento para modificar ordens de vendas e produtos.
2. Entradas para a Atividade
Ordens de Venda – Sistema SAP
Lista de trabalho – Medidas em geral – Sistema SAP
3. Procedimento
O QUE? QUEM E ONDE? COMO?
Receber Claim de Modificação
Programador (Sç Planejamento / Logística SBC)
Sistema SAP (Transação IQS9)
1. É Modificação de Produto?
SIM
Programador (Sç Planejamento)
Sistema SAP (Transação IQS9)
1.1. Avaliando as modificações de dados comerciais
Verificar se há modificações de prazo de entrega no caso de claim “ZR” conforme WPS-22477, ou inclusões de novas linhas de Ordem de Venda no caso de claim “ZZ” conforme WPS-22354, WPS-22355 e WPS-22356.
Aba "Síntese da Nota"
1.2. Criar medidas para criação de materiais
Programador (Sç Logística SBC)
Sistema SAP (Transação IQS9)
Criar medidas para as áreas responsáveis no claim "ZZ" através do sistema SAP Conforme WPS-22354, WPS-22355 e WPS-22356.
1.3. Incluir materiais na OV
Programador (Sç Logística SBC)
Sistema SAP (Transação VA02)
Receber claim "ZZ"
Incluir materiais e quantidades na Ordem de Venda através da transação VA02 do sistema SAP conforme WPS-22354, WPS-22355 e WPS-22356.
Avaliando as seguintes situações:
Andamento do produto na produção (postergar);
Viabilidade de antecipação de matérias primas envolvidas.
1.4. Solicitar Modificação de Produto
Programador (Sç Planejamento)
Sistema SAP (Transação IQS9)
Criar medidas no claim recebido, para engenharia de produto, engenharia industrial, CPA e Controle de Produção através da transação IQS9 do sistema SAP, conforme WPS-22477.
NÃO
Programador (Sç Planejamento)
Sistema SAP (Transação IQS9)
2. É Cancelamento?
SIM
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Verificar o andamento da Ordem de Produção na fábrica, através da transação MD04 do sistema SAP, conforme WPS-22477.
Geralmente a decisão para cancelamento é gerencial.
Avaliando a disposição dos componentes envolvidos.
2.1. A Ordem de Produção será afetada?
SIM
Programador (Sç Planejamento)
Sistema SAP
Enviar e-mail aos programadores para tomarem as devidas providências.
Cancelar a Ordem de Produção através do sistema SAP, conforme WPS-22477.
Enviar e-mail para os programadores a fim de tratar as ordens que já estão em produção.
Descrevendo no claim a ação que foi tomada e concluindo a medida pertinente ao planejamento conforme WPS-22477.
NÃO
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Colocar motivo de recusa na linha da Ordem de Venda, através da transação VA02 do sistema SAP.
Preencher o motivo de recusa conforme WPS-22477.
Descrevendo no claim a ação que foi tomada e concluindo a medida pertinente ao planejamento conforme WPS-22477.
2.2. A Ordem de Produção será Cancelada?
SIM
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Avaliando a disposição dos componentes envolvidos.
Enviar e-mail aos programadores para tomarem as devidas providências.
Cancelar a Ordem de Produção através do sistema SAP, conforme WPS-22477.
Enviar e-mail para os programadores a fim de tratar as ordens que já estão em produção.
Descrevendo no claim a ação que foi tomada e concluindo a medida pertinente ao planejamento conforme WPS-22477.
NÃO
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Colocar motivo de recusa na linha da Ordem de Venda, através da transação VA02 do sistema SAP.
Preencher o motivo de recusa conforme WPS-22477.
Descrevendo no claim a ação que foi tomada e concluindo a medida pertinente ao planejamento conforme WPS-22477.
NÃO
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Selecionando o claim "ZR" e ou "ZZ", clicando na função "Exibir Nota" e verificar se no texto está descrito a solicitação de cancelamento de linha de Ordem de Venda conforme WPS-22477.
Verificando se no texto da nota está descrito a solicitação de aplicação de agrupador de produto conforme WPS-22477.
Nota: Caso na síntese da nota houver também uma solicitação de dados comerciais, a mesma deve ser efetuada.
3. É Modificação de Prazo de Entrega?
SIM
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Alterar o prazo na Ordem de Venda através da transação VA02 do sistema SAP conforme WPS-22477.
Considerando que a ordem de produção pode estar planejada com folga em relação ao prazo da Ordem de Venda;
3.1. A Modificação de Prazo foi Aceita?
SIM
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Descrevendo no claim a ação que foi tomada e concluindo a medida pertinente ao planejamento conforme WPS-22477.
NÃO
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Colocar motivo de recusa na linha da Ordem de Venda, através da transação VA02 do sistema SAP.
Preencher o motivo de recusa conforme WPS-22477.
Descrevendo no claim a ação que foi tomada e concluindo a medida pertinente ao planejamento conforme WPS-22477.
NÃO
Programador (Sç Planejamento)
Sistema SAP (Transação VA02)
Selecionando o claim "ZR" e ou "ZZ", clicando na função "Exibir Nota" e verificar se no texto está descrito a solicitação de cancelamento de linha de Ordem de Venda conforme WPS-22477.
Verificando se no texto da nota está descrito a solicitação de aplicação de agrupador de produto conforme WPS-22477.
Nota: Caso na síntese da nota houver também uma solicitação de dados comerciais, a mesma deve ser efetuada.
4. Aplicar o Agrupador
Programador (Sç Planejamento)
Sistema SAP (Transação VA02 e MM02)
Aplicar o agrupador informado no claim na Ordem de Venda, pela transação VA02 e no material pela transação MM02 do sistema SAP conforme WPS-22477.
5. Arquivar Registros
Programador (Sç Planejamento)
Sistema SAP (Transação IQS9)
Descrevendo no claim a ação que foi tomada e concluindo a medida pertinente ao planejamento conforme WPS-22477.
Arquivando os registros conforme WPM-2642.
4. Saídas da Atividade
Ordens de Venda modificadas;
Solicitação de modificação geradas para engenharia de produto;
Cancelamentos de Ordem de Produção.
`