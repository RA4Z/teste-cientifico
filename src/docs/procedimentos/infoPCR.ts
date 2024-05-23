export const infoPCR = `
O arquivo com todas as informações da PCR se encontra no Sharepoint do PCP, no link: https://intranet.weg.net/br/energia-wm/pcp/PCR/Forms/AllItems.aspx

WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
1 
Data: 18.03.2024 
INTRODUÇÃO 
Este documento tem como objetivo apresentar as definições, conceitos, regras, 
fluxograma e detalhes sobre cada etapa da PCR utilizada para modificação de produto 
na WEG Energia. Nele não estarão contemplados os procedimentos de execução das 
atividades, os quais estarão em instruções de trabalhos de cada área. 
A implantação desta ferramenta de PCR foi realizada em janeiro de 2023 e a sua 
implantação foi aprovada na Ata 06/2021 da Comissão De Processos Gestão Da Cadeia 
Integrada, no dia 22/04/2021. 
SUMÁRIO 
INTRODUÇÃO ................................................................................................................. 1
SUMÁRIO ......................................................................................................................... 1
1. DEFINIÇÕES ............................................................................................................. 3
1.1. A ferramenta ........................................................................................................... 3
1.2. Escopo.................................................................................................................... 3
1.3. Fora do escopo ....................................................................................................... 3
2. CONCEITOS ............................................................................................................. 3
3. REGRAS GERAIS ..................................................................................................... 7
4. FLUXOGRAMA .......................................................................................................... 8
4.1. Fluxograma das fases do Início do Processo ......................................................... 8
4.2. Fluxograma das fases do Grupo de Modificação: .................................................. 8
4.3. Fluxograma das fases das Tarefas ........................................................................ 9
4.4. Fluxograma da fase 335 ....................................................................................... 10
5. ETAPAS DO PROCESSO ....................................................................................... 11
5.1. Fases do Início do Processo ................................................................................ 11
5.1.1. Fase 101 – Elaboração do Processo ................................................................ 11
5.1.2. Fase 102 – Acompanhamento do Processo ..................................................... 12
5.1.3. Fase 198 – Processo cancelado ....................................................................... 14
5.1.4. Fase 199 – Processo concluído ........................................................................ 15
5.2. Fases do Grupo de Modificação: .......................................................................... 15
5.2.1. Fase 200 – Pré-liberação do projeto/ECM ........................................................ 15
Fase 205 – Liberação do projeto/ECM ........................................................................... 16
5.2.2. Fase 210 – Correção do projeto ........................................................................ 17
Fase 220 – Ampliação lista técnica (RPA) ..................................................................... 18
5.2.3. Fase 235 – Notificação projeto para cliente ...................................................... 19
5.2.4. Fase 240 – Notificação impacto embalagem .................................................... 20
5.2.5. Fase 298 – Grupo de modificação cancelado ................................................... 21
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
2 
5.2.6. Fase 299 – Grupo de modificação concluído .................................................... 21
5.3. Fases de Tarefas dos Workflows ......................................................................... 22
5.3.1. Fase 300 – Verificação do impacto da modificação .......................................... 22
5.3.2. Fase 310 – Avaliação necessidade bloqueio roteiro ......................................... 23
5.3.3. Fase 315 – Revisão de roteiro de fabricação .................................................... 24
5.3.4. Fase 320 – Criação registro início info operação .............................................. 25
5.3.5. Fase 325 – Verificação de dúvidas processos .................................................. 26
5.3.6. Fase 335 – Finalização nível superior BOM ...................................................... 27
5.3.7. Fase 340 – PCP Avaliação impacto modificação .............................................. 28
5.3.8. Fase 345 – Impressão documento do projeto ................................................... 30
5.3.9. Fase 350 – Execução da modificação projeto ................................................... 31
5.3.10. Fase 355 – Armazenamento de material sobrante ........................................ 32
5.3.11. Fase 360 – DQF avaliação impacto modificação ........................................... 33
5.3.12. Fase 361 – Finalização da cotação................................................................ 35
5.3.13. Fase 365 – Compras avaliação impacto modificação .................................... 35
5.3.14. Fase 375 – Execução do workflow do material .............................................. 37
5.3.15. Fase 399 – Processo concluído ..................................................................... 38
6. TRANSAÇÕES SAP ................................................................................................ 40
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
3 
1. DEFINIÇÕES 
1.1. A ferramenta 
A PCR (process change request) é uma ferramenta que faz a gestão de todo o 
processo de modificação de produto, onde os fluxos de trabalho são customizados e 
automatizados, de acordo com regras para atender cada area envolvida. Ela permite a 
rastreabilidade de todo processo, desde a solicitação até os seus impactos no estoque, 
sendo possível extrair de forma clara o histórico, para geração de indicadores. 
Na WEN o tipo de processo é o PS210, onde o fluxo envolve as áreas de 
Engenharia de Produto, Engenharia Industrial, PCP, Suprimentos e Fabricação. 
1.2. Escopo 
- Centro: 1200; 
- Máquinas das linhas de produto: M, S e GENSET especiais (via PEP). 
1.3. Fora do escopo 
- Demais centros. Exemplo: 1201, 1206, 6100, 6200; 
- Modificação de sobressalentes. Exemplo: Instrumentos e peças sobressalentes; 
- Itens faturados em separado do FERT. Exemplo: caixa ou rotor faturado 
separados, que não estão na lista do FERT; 
- Modificações em massa, inclusive do escopo acima. Exemplo: conjuntos que usam 
em vários projetos. 
2. CONCEITOS 
- ECM: Engineering Change Management é uma ferramenta do SAP utilizada como 
chave para realizar modificação em documentos e lista técnica de materiais. 
- Processo: Tipo de atividade configurada e customizada dentro da PCR, para as 
áreas envolvidas. Ela é identificada por um número sequencial, gerado 
automaticamente pelo sistema, o qual representa a identificação de cada PCR 
criada. 
- Operação: Cada nova atividade de modificação dentro de uma PCR, que pode ser 
identificada na aba “Modificação“. 
- Fase: Etapa do processo identificada por algarimos numéricos e sequenciais, que 
identifica a posição no workgrupo e workflow e representam uma atividade a serem 
executadas por cada área. 
- Fluxo: Tipo de sequencia de tarefas pré definida para cada macro etapa da PCR. 
Para a PCR de modificação de produto da WEN, os fluxos são so seguintes: 
 Fluxo do processo: PS210; 
 Fluxo do workgrupo: WF201; 
 Fluxo de workflow: WF301 e WF304. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
4 
- Workgrupo: Fluxo de tarefas sequenciais criadas a partir de uma novo processo 
gerada para um material FERT. Ele é identificado por um número sequencial 
gerado automaticamente pela PCR e também pode ser considerado como 
“Eventos de modificação“. 
- Workflow: Sequencia de tarefas encaminhada para um material ou um 
agrupamento de materiais definidos por caracteristicas que atendem determinados 
critério dentro de um fluxo. Ele é identificado por um número sequencial gerado 
automaticamente pela PCR. 
- Workitem: Etapa a ser executada dentro de um workflow e identificada pelo 
número da fase. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
5 
- Tarefa: Etapa a ser executada por um responsável, dentro de um Workitem. Em 
alguns casos são geradas tarefas para mais de um usuário, dentro de um mesmo 
Workitem. Também pode haver mais de um responsável dentro de uma mesma 
tarefa. 
- Cenário MRP: Situação das necessidades e estoques dos materiais, de acordo 
com a interpretação do cenário apresentado no SAP (trasação MD04). 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
6 
- Impacto MRP: Situação do material indentificada pelo sistema, a partir da 
definição do destino, parte sugerido pelo SAP, parte definido pelo criador do 
processo de modificação. 
- Código de Fábrica: Código referente ao agrupamento de materiais para criação 
dos diferentes workflows, baseados nos Planejadores MRP, podendo ser 
identificados através da transação ZTPCR102: 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
7 
- Grupo de planejamento: Código utilizado para direcionar o envio de tarefas ao 
responsáveis cadastrados para cada Planejador MRP, podendo ser identificados 
através da transação ZTPCR106: 
- Nível MRP: Nível onde um material da PCR se encontra na lista técnica, 
considerando também a origem sequencial dos materiais acima da estrutura. 
 
3. REGRAS GERAIS 
- As PCR’s do tipo de processo PS210 devem ser utilizadas para todas as máquinas 
(materiais do tipo FERT) que possuem ordem de produção. 
- Em modificações que há alteração de material (filho) usado em várias listas 
técnicas de outros materiais (pai), com e sem ordem de produção, a modificação 
pode ser enviada através de ECM, porém deve ficar claro se contemplará ou não 
os que já em fabricação (com ordens liberadas). 
- Deve ser criada uma PCR para cada máquina, onde deve ser contempladas todas 
as modificações da máquina ligada a ela. 
- Toda modificação nos materiais, listas técnicas e documentos deve ser executada 
e registrada em um ECM e a PCR fará a sua leitura, buscando todos os dados 
pertinentes. Para alteração de classificação, a alteração é feita através de outras 
transações no SAP, porém o material deve estar ligado ao ECM na aba “Material“. 
- Para cada modificação (processo) nova, deve ser utilizado apenas um ECM e não 
pode ser utilizado um, que não foi ou será enviado através de PCR, como o ECM 
do dia/ZBOM. Pode ser utilizado sim, um ECM com máquinas ligadas a outras 
PCR‘s. 
- A criação do número da fase é criada automaticamente e representa uma 
sequencia, a partir de um workgrupo, que manterá a ordem nos workflows gerado 
a partir dele. Quando gerado um novo workgrupo, ele seguirá a sequencia do 
ultimo workflow criado. 
- A PCR apresenta os registros de todas as fases onde os fluxos de workgrupo e 
workflow passaram, porém não é possível visualizar na PCR para onde será 
direcionada, enquanto a fase atual não for concluída. 
- Os destino de envio das tarefas pode ser feito para usuários fixos, cadastrados 
como responsáveis pelos planejadores MRP, para grupo de usuários, para o job 
(BATCH) que o sistema roda periodicamente ou para códigos que o sistema 
identifica os responsáveis em outras transações do SAP. Ex.: RESP_REQ, que 
identifica requerente do projeto na trasação CJ20N. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
8 
4. FLUXOGRAMA 
A seguir está o fluxograma do processo de modificação PS210, divididos pelo tipo 
de fluxo: 
4.1. Fluxograma das fases do Início do Processo 
4.2. Fluxograma das fases do Grupo de Modificação: 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
9 
4.3. Fluxograma das fases das Tarefas 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
10 
4.4. Fluxograma da fase 335 
O fluxo específico da fase 335 está sendo apresentado neste tópico, pois esta fase faz a 
liberação de um novo workflow a partir de outro que contem materiais que estão em um 
nível acima da lista técnica, podendo haver vários workflows, de acordo com a 
distribuição de materiais. 
As linhas tracejadas representam cada workflow criado, conforme a separação de 
materiais e consequentemente os níveis em que se encontram na lista técnica. 
Nota: Para fácil entendimento, o fluxograma acima representa um exemplo de sequência 
de tarefas padrões, onde no intervalo entre elas, podem haver outras, conforme 
apresentado no fluxograma 4.3. Além dos workflows apresentados, também pode haver 
outros ou até mesmo, não ter todos apresentados acima. Ex.: Pode haver um material 
comprado (5º workflow) que está direto na lista técnica do motor (1º workflow). 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
11 
5. ETAPAS DO PROCESSO 
A seguir estão apresentadas as fases do processo PS210, as quais estão contempladas 
nos fluxogramas do tópico anterior, onde consta: 
 FUNÇÃO: Descrição do objetivo da fase e responsável pela execução; 
 RESPONSÁVEL: Área para qual é enviada a tarefa e é responsável pela execução 
das atividades pertinentes a ela e pelo envio para próxima fase. Quando está 
identificada como BATCH, quer dizer que é um job que o sistema executa 
automaticamente e quando está “Não aplicável”, que dizer que não há ação e é 
apenas para exibir um status da PCR. 
 REGRAS: Descrição de regras gerais, como os critérios que levaram à PCR 
direcionar para referida fase ou detalhes relevantes para execução da fase. 
 ORIGEM: Representa as possíveis fases anteriores à que está sendo mencionada. 
Neste tópico estará uma imagem com exemplos de sequência de fases já 
executadas, até a fase atual, à qual o tópico está se referindo. 
 DESTINO: Representa as possíveis próximas fases à que está sendo mencionada. 
Neste tópico estará uma imagem com as opões de envio, quando a próxima fase 
deve ser definida manualmente pelo usuário da fase atual. Caso a definição do 
destino seja feita automaticamente, não aparecerá imagem. 
5.1. Fases do Início do Processo 
5.1.1. Fase 101 – Elaboração do Processo 
 FUNÇÃO: Etapa onde é realizado o processo inicial de criação da PCR. 
 RESPONSÁVEL: Engenharia de Produto. 
 REGRAS: 
i. Nessa etapa é inserido o material FERT ligado à PCR e feita a sua classificação. 
Antes da criação de uma PCR nova, deve-se pesquisar se já há alguma criada 
para o material FERT desejado. Caso já tenha, deve utilizar a PCR já existente. 
ii. Nesta etapa, caso deseja-se encerrar o processo, a PCR será alterada 
automaticamente para “Processo cancelado” (fase 198). Caso haja alguma tarefa 
pendente, será informado através de mensagem, porém permitirá o cancelamento. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
12 
 ORIGEM: Não aplicável. 
 DESTINO: Fase 102 e 198. 
Direcionada selecionando a fase seguinte disponível: 
5.1.2. Fase 102 – Acompanhamento do Processo 
 FUNÇÃO: Etapa onde ficam concentradas todas as informações da PCR, sendo 
que a partir dela, pode-se pesquisar todos os processos e seus dados (eventos, 
tarefas, fases, responsáveis, materiais, etc.). 
 RESPONSÁVEL: Não aplicável. 
 REGRAS: 
i. Nesta etapa é onde a Engenharia de Produto cria um processo novo, realiza a 
modificação através de um ECM (criado pela PCR ou pela transação CC01) e 
carrega todas as informações do ECM para PCR. O ECM deve ser criado e 
mantido com data futura, mesmo depois da concussão desta fase. 
ii. A partir das informações carregadas na PCR, na aba “Modificações ECM”, a 
Engenharia define o destino dos materiais que não foram propostos pelo sistema 
ou altera os que já foram. A definição feita pela Engenharia é uma sugestão, a 
partir de como o material se encontra no sistema, cabendo as áreas que aplicam 
a modificação avaliarem em suas etapas (fases 350 ou 365), como os materiais 
estão realmente na prática. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
13 
A seguir estão as definições de cada uma das opões acima: 
- Sucatear: Usado quando o componente removido da lista técnica não pode ser 
utilizado futuramente. 
- Enviar para estoque padrão: É utilizado quando uma regra da PCR, de forma 
automática define, a partir de um fator de consumo, que o material é de uso comum 
e utilizado com frequência. Neste caso, geralmente não há necessidade de 
intervenção do usuário para definição. Ex.: parafuso. 
- Enviar para estoque BA01: Usado quando o componente removido da lista 
técnica é utilizado com pouca frequência. Nesse caso, é feita uma avaliação para 
identificar se ele tem a possibilidade de ser utilizado em outra máquina 
futuramente. 
- Novo: Usado quando é adicionado um componente novo na lista técnica, o qual 
precisa ser produzido ou comprado. Neste caso, a PCR define automaticamente 
e geralmente não há necessidade de intervenção do usuário. 
- Recuperar: Utilizado quando a modificação necessita ser executada na prática. 
Ou seja, quando há uma transformação física do material, a partir de uma 
modificação de documento ou característica do material. 
- Recuperar a partir.: Utilizado quando o novo material adicionado na lista técnica, 
pode ser obtido a partir da transformação de um material removido. Esta opção é 
utilizada no item novo, que entra na lista técnica e no item que sai, deve ser 
utilizada a opção “Recuperar”. Ao usar esta opção, deve ser explicado no campo 
texto da PCR o que deve ser feito na fábrica para efetivar a transformação. 
- Projetos futuros: Utilizado quando na prática, a modificação já foi executada na 
fábrica e a modificação trata-se apenas de uma adequação do projeto à situação 
da máquina fisicamente. Nesse caso, se surgirem novas ordens de produção, o 
projeto da máquina já estará de acordo com a alteração feita. 
iii. Ao concluir essa fase, libera o próximo workflow, que inicia na fase 200. Para 
passar para a fase 200, deve ser criada e indicada (selecionada) uma nova 
operação na aba “Modificação” e executado o ícone “Liberar novos grupos de 
modificação”. 
iv. Nesta etapa, ao encerrar a PCR, o status será alterado automaticamente para 
“Processo concluído” (fase 199). Caso haja alguma tarefa pendente, será 
informado através de mensagem, porém permitirá a conclusão. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
14 
 ORIGEM: Fase 101. 
 DESTINO: Fases 199 e 200. 
Direcionada automaticamente ao liberar para a próxima fase. 
5.1.3. Fase 198 – Processo cancelado 
 FUNÇÃO: Etapa onde o sistema apresenta que todo o processo foi cancelado. 
 RESPONSÁVEL: Não aplicável. 
 REGRAS: 
i. Para essa fase não é gerado um workitem e não é possível identifica-la na aba 
“Etapas do processo”. Portanto pode ser considerada apenas como um status e 
pode ser visualizada somente no cabeçalho da PCR. 
 ORIGEM: Fase 101. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
15 
 DESTINO: Não aplicável. 
5.1.4. Fase 199 – Processo concluído 
 FUNÇÃO: Etapa onde o sistema apresenta que todo o processo foi concluído. 
 RESPONSÁVEL: Não aplicável. 
 REGRAS: 
i. Para essa fase não é gerado um workitem e não é possível identifica-la na aba 
“Etapas do processo”. Portanto pode ser considerada apenas como um status e 
pode ser visualizada somente no cabeçalho da PCR. 
ii. Ao concluir todo o processo (todas as tarefas na fase 399) da PCR, este status é 
incluído automaticamente. 
 ORIGEM: Fase 102 e 399. 
 DESTINO: Não aplicável. 
5.2. Fases do Grupo de Modificação: 
5.2.1. Fase 200 – Pré-liberação do projeto/ECM 
 FUNÇÃO: Etapa inicial do workgrupo, onde o sistema verifica se todos os 
requisitos estão preenchidos corretamente pelo fluxo anterior e gerar as próximas 
tarefas. 
 RESPONSÁVEL: BATCH. 
 REGRAS: 
i. Essa fase é criada automaticamente, a partir da conclusão da fase 102 e quando 
o sistema identifica que o fluxo WF201 está na fase 199. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
16 
ii. Para cada modificação é gerado apenas um workgrupo, que segue uma sequência 
linear até a sua conclusão. 
 ORIGEM: Fase 102. 
 DESTINO: Fase 205. 
Direcionada automaticamente ao liberar para a próxima fase. 
Fase 205 – Liberação do projeto/ECM 
 FUNÇÃO: Etapa onde o liberador ou gestor verificam e aprovam ou reprovam a 
modificação. 
 RESPONSÁVEL: Engenharia de Produto. 
 REGRAS: 
i. Nesta fase serão criadas duas tarefas, uma para o liberador e outra para o gestor, 
porém para seguir para a próxima fase, basta um deles concluir a tarefa. 
 ORIGEM: Fase 200. 
 DESTINO: Fases 210 ou 220. 
Direcionado a partir da aprovação ou reprovação da modificação: 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
17 
i. Caso a modificação seja aprovada, seguirá para a fase 220; 
ii. Caso a modificação seja reprovada, seguirá para a fase 210; 
5.2.2. Fase 210 – Correção do projeto 
 FUNÇÃO: Etapa onde é corrigido o projeto, devido a algum erro identificado pelo 
liberador ou pelo responsável pela ampliação da lista técnica. 
 RESPONSÁVEL: Engenharia de Produto. 
 REGRAS: 
i. Esta tarefa é recebida automaticamente pelo responsável pela criação do 
processo, identificado pelo seguinte código de destino 
ii. Após execução desta fase, será encaminhada novamente uma tarefa para a 
liberação do projeto (fase 205). 
iii. Nesta etapa, o processo pode ser encerrado e a PCR será alterada 
automaticamente para “Grupo de modificação cancelado” (fase 298). 
 ORIGEM: Fases 205, 220. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
18 
 DESTINO: Fase 205 ou 298. 
Direcionada selecionando a fase seguinte disponível: 
Fase 220 – Ampliação lista técnica (RPA) 
 FUNÇÃO: Etapa onde é ampliada a lista técnica para o centro onde será fabricada 
a máquina e validada a data do ECM utilizado na modificação. 
 RESPONSÁVEL: Engenharia Industrial. 
 REGRAS: 
i. Ao concluir esta fase, será liberado o próximo workflow, que inicia na fase 300. 
 ORIGEM: Fase 205. 
 DESTINO: Fase 210, 235, 240, 299, 300 e 345.
Direcionado a partir da aprovação ou reprovação da modificação: 
i. Caso a modificação seja aprovada e não tenha documento do cliente alterado, 
seguirá direto para a fase 299; 
ii. Caso a modificação seja aprovada tenha documento do cliente alterado, seguirá 
para a fase 235 e também para 299. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
19 
iii. Caso a modificação seja reprovada, a Engenharia Industrial deve encaminhar para 
a fase 210. 
Obs.: Fases 225 e 230 não são utilizadas. 
5.2.3. Fase 235 – Notificação projeto para cliente 
 FUNÇÃO: Etapa onde o responsável pelo projeto toma conhecimento que foi 
alterado algum documento do cliente e passa as devidas informações a ele. 
 RESPONSÁVEL: BATCH. 
 REGRAS: 
i. Nesta etapa é enviado um email para “Requerente” cadastrado na aba 
“DdsBásicos” do PS, quando há alguma alteração em documento ligado ao 
projeto. 
ii. Esta etapa é concluída e alterada para fase 299 automaticamente, no mesmo 
instante que é recebida. O “Requerente” recebe as informações via email e não 
tem ação a ser executada na PCR. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
20 
 ORIGEM: Fase 220. 
 DESTINO: Fase 299. 
Direcionada automaticamente ao liberar para a próxima fase. 
5.2.4. Fase 240 – Notificação impacto embalagem 
 FUNÇÃO: Etapa onde é recebida a informação para atualizar o projeto da 
embalagem. 
 RESPONSÁVEL: Engenharia Industrial. 
 REGRAS: 
i. Esta etapa é recebida pelo projetista da Engenharia Industrial, responsável por 
atualizar o projeto da embalagem quando a Engenharia de Produto preenche com 
valor “Sim” a resposta para característica “Tem impacto na embalagem? ”, na aba 
“Modificação”. 
 ORIGEM: Fase 220. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
21 
 DESTINO: Fase 299. 
Direcionada automaticamente ao liberar para a próxima fase. 
5.2.5. Fase 298 – Grupo de modificação cancelado 
 FUNÇÃO: Etapa onde o sistema apresenta que todo workgrupo foi cancelado. 
 RESPONSÁVEL: Não aplicável. 
 REGRAS: 
i. Para essa fase não é gerado um workitem e não é possível identifica-la na aba 
“Etapas do processo”. Portanto pode ser considerada apenas como um status. 
 ORIGEM: Fase 210. 
 DESTINO: Não aplicável. 
5.2.6. Fase 299 – Grupo de modificação concluído 
 FUNÇÃO: Etapa onde o sistema apresenta que todo o workgrupo foi concluído. 
 RESPONSÁVEL: Não aplicável. 
 REGRAS: 
i. Para essa fase não é gerado um workitem e não é possível identifica-la na aba 
“Etapas do processo”. Portanto pode ser considerada apenas como um status. 
ii. Ao concluir todas etapas do workgrupo (todas as tarefas na fase 399), este status 
é incluído automaticamente. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
22 
 ORIGEM: Fases 220, 235, 240. 
 DESTINO: Não aplicável. 
5.3. Fases de Tarefas dos Workflows 
5.3.1. Fase 300 – Verificação do impacto da modificação 
 FUNÇÃO: Etapa onde o sistema avalia a situação e agrupa os materiais, criando 
os workflows necessários, com a fase inicial de cada um. 
 RESPONSÁVEL: BATCH. 
 REGRAS: 
i. Essa fase é criada automaticamente, a partir da conclusão da fase 220 e quando 
o sistema identifica que o fluxo WF201 está na fase 299. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
23 
ii. Para cada modificação podem ser gerados vários workflows, onde os materiais 
são agrupados de acordo com a combinação de Tipo de fluxo, Código de Fábrica 
e Nível MRP. 
 ORIGEM: Fase 220. 
 DESTINO: Fases 310, 315, 335, 375 e 399. 
Direcionada automaticamente ao liberar para a próxima fase, conforme as regras 
de destino a seguir: 
i. Fase 310: Irá quando os materiais manufaturados (tipo de suprimento = E) estão 
classificados com o Impacto MRP = CAN ou REM. 
ii. Fase 315: Irá quando os materiais manufaturados (tipo de suprimento = E) estão 
classificados com o Impacto MRP = ALT, INC, INF, MOD, NEW, RET, REV ou 
TXT. 
iii. Fase 375: Irá quando os materiais comprados (tipo de suprimento = F) tem alguma 
pendência em workflow, que podem ser identificadas na transação ZTMM069, ou 
quando os materiais manufaturados (tipo de suprimento = E) não se enquadram 
nas regras de envio para as fases 310 e 315. 
iv. Fase 399: Irá quando os materiais manufaturados (tipo de suprimento = E) são 
dos planejadores APA, APB, APC e APR ou quando materiais comprados (tipo de 
suprimento = F) são de planejadores ligados ao código de fábrica FB20000080. 
v. Fase 335: Irá quando não identifica regras de envio para as fases 310, 315, 375 e 
399. 
5.3.2. Fase 310 – Avaliação necessidade bloqueio roteiro 
 FUNÇÃO: Etapa onde o sistema bloqueia o roteiro dos materiais manufaturados 
que serão removidos da lista técnica. 
 RESPONSÁVEL: BATCH. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
24 
 REGRAS: 
i. Nesta fase o sistema altera automaticamente o status do roteiro para 1 - “Fase de 
criação (Bloqueado)”, nos materiais manufaturados que estão classificados com o 
Impacto MRP = CAN ou REM. 
 ORIGEM: Fase 300. 
DESTINO: Fase 335. 
Direcionada automaticamente ao liberar para a próxima fase. 
5.3.3. Fase 315 – Revisão de roteiro de fabricação 
FUNÇÃO: Etapa onde é realizada a criação ou modificação dos roteiros de 
fabricação dos materiais. 
 RESPONSÁVEL: Engenharia Industrial. 
 REGRAS: Não aplicável. 
 ORIGEM: Fases 300, 320, 325. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
25 
 
 DESTINO: Fases 320, 325, 335 e 375. 
Direcionada selecionando as fases seguintes disponíveis: 
Obs.: Fase 328 não é utilizada. 
 
i. Fase 320: Enviada quando há necessidade de passar a informação para o 
fornecedor de algum material que possui operação de subcontratação e o DQF 
precisa criar ou atualizar o registro info, onde consta os parâmetros desta 
operação. 
ii. Fase 325: Enviada quando há dúvidas sobre a modificação ou necessidade de 
ajustes no projeto. 
iii. Fase 335: Enviada quando a alteração do roteiro estiver concluída e não tem 
pendencia no workfow. 
iv. Fase 375: Enviada quando a alteração do roteiro estiver concluída e os materiais 
tem pendência em workflow, que podem ser identificadas na transação ZTMM069. 
5.3.4. Fase 320 – Criação registro início info operação 
 FUNÇÃO: Etapa onde é criado ou atualizado o contrato junto ao fornecedor, de 
materiais que possuem operação de subcontratação. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
26 
 RESPONSÁVEL: DQF. 
 REGRAS: 
i. O envio desta fase é feito para o colaborador responsável pelo planejador MRP do 
material ligado ao workflow. 
 ORIGEM: Fase 315. 
 DESTINO: Fase 315. 
Direcionada selecionando a fase seguinte disponível: 
5.3.5. Fase 325 – Verificação de dúvidas processos 
 FUNÇÃO: Etapa onde são esclarecidas dúvidas do responsável pela atualização 
do roteiro, sobre o projeto. 
 RESPONSÁVEL: Engenharia de Produto. 
 REGRAS: 
i. Esta fase é recebida pelo criador do workflow, responsável pela modificação do 
projeto. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
27 
 ORIGEM: Fase 315 
 DESTINO: Fase 315 
Direcionada selecionando a fase seguinte disponível: 
5.3.6. Fase 335 – Finalização nível superior BOM 
 FUNÇÃO: Etapa onde é verificado se a fase que contém um material que está um 
nível acima na BOM, já possui a todo o workflow concluído, para liberação do 
próximo workflow. 
 RESPONSÁVEL: BATCH. 
 REGRAS: 
i. A conclusão desta fase é feita automaticamente quando o sistema identifica que o 
material de um nível superior da BOM, que está em um outro workflow, já foi 
alterado para o status “Ação executada” e teve a fase 340 concluída, conforme 
fluxograma do tópico 4.4. 
ii. Quando esta fase é concluída e as regras direcionam direto para a fase 399, é 
alterado o status da ação dos materiais impactados para “Ação executada”, 
permitindo a liberação da fase 335 de workflows de materiais que estão em níveis 
inferiores da lista técnica, conforme mostrado no fluxograma do tópico 4.4. Esta 
ação só ocorre para aqueles materiais que não irão passar pelas fases 340, 360 e 
365. Ex.: Materiais fantasmas. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
28 
 ORIGEM: Fase 300, 310, 315 e 375.
 DESTINO: Fases 340, 399, 360, 365. 
Direcionada automaticamente ao liberar para a próxima fase, conforme as regras 
de destino a seguir: 
i. Fase 340: Irá sempre que houver impacto em materiais manufaturados (tipo de 
suprimento = E) e que não sejam fantasmas (Suprimento especial ≠ 50). 
ii. Fase 399: Irá quando sempre que houver impacto em materiais manufaturados 
(tipo de suprimento = E) e que sejam fantasmas (Suprimento especial = 50). 
iii. Fase 360: Irá quando os materiais comprados (tipo de suprimento = F) estão 
classificados com Impacto MRP = ALT, MOD, REV ou NEW. 
iv. Fase 365: Irá quando os materiais comprados (tipo de suprimento = F) estão 
classificados com Impacto MRP = CAN, INC ou REM. 
5.3.7. Fase 340 – PCP Avaliação impacto modificação 
 FUNÇÃO: Etapa onde os programadores atualizam as ordens de produção. 
 RESPONSÁVEL: PCP 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
29 
 REGRAS: 
Esta tarefa é sempre recebida pelos programadores de acordo com os 
planejadores MRP de cada área, conforme a seguir: 
i. Recebido pelo programador dos itens manufaturados FERT, quando os materiais 
estão com ordens de produção liberadas e são dos planejadores de máquinas 
agrupados pelo Código de fábrica FB20000043. O responsável por receber esta 
tarefa é conforme o cadastro no Grupo de Planejamento GP60000281. 
ii. Recebido pelos programadores de itens manufaturados, quando os materiais 
estão com ordens de produção liberadas e são dos planejadores de componentes 
agrupados pelos Códigos de fábrica FB20000041, FB20000042 e FB20000044. O 
responsável por receber esta tarefa é conforme o cadastro no Grupo de 
Planejamento GP60000281. 
iii. Transferido pelo responsável do planejador do item FERT, o qual recebe conforme 
regra i, para o responsável da cadeia de ajuda, quando o material está com ordem 
de produção planejada; 
iv. Quando esta fase é concluída e direcionada para qualquer uma das próximas 
fases (350 ou 399), é alterado o status da ação dos materiais impactados para 
“Ação executada”, permitindo a liberação da fase 335 de workflows de materiais 
que estão em níveis inferiores da lista técnica, conforme mostrado no fluxograma 
do tópico 4.4. 
 ORIGEM: Fases 300 e 335. 
 
 DESTINO: Fases 350 e 399. 
Direcionada selecionando as fases seguintes disponíveis: 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
30 
i. Para que seja encaminhada para a fase 350, tem que ser definido os destinatários 
na aba “Parceiros”. Como destinatário pode ser criado um usuário, um grupo ou 
até ser selecionado grupos pré-definidos. 
5.3.8. Fase 345 – Impressão documento do projeto 
 FUNÇÃO: Etapa onde os apontadores avaliam quais operações do processo 
foram impactadas e imprimem as ordens de produção atualizadas. 
 RESPONSÁVEL: PCP. 
 REGRAS: 
i. O envio para esta fase é feito automaticamente sempre que algum material que 
sofreu modificação tem ordem de produção liberada. 
ii. A geração desta fase é feita assim que concluída a fase 340, porém com trata-se 
de um outro fluxo (WF304) ela não seguirá o mesmo workflow do fluxo anterior 
(WF301). 
iii. Assim que esta fase for concluída, o sistema automaticamente alterará para a fase 
399. 
iv. Esta fase envia uma mesma tarefa para mais de um responsável (apontadores), 
porém basta um liberar para a próxima fase, que concluirá o worktiem e a 
pendencia de todos. 
 ORIGEM: Fase 340. 
 DESTINO: Fase 399. 
Direcionada automaticamente ao liberar para a próxima fase. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
31 
5.3.9. Fase 350 – Execução da modificação projeto 
 FUNÇÃO: Etapa onde os técnicos ou preparadores recebem as informações e 
efetivam na prática (fisicamente), as alterações feitas nos projetos e ordens de 
produção e dão destino aos materiais removidos da lista técnica. 
 RESPONSÁVEL: Montagem e Fabricação de componentes. 
 REGRAS: 
i. A definição dos responsáveis que receberão esta fase é feita na fase 340, 
selecionando os destinatários na aba “Parceiros” da PCR. 
ii. No caso de ter mais de um responsável (preparadores ou técnicos) para uma 
mesma tarefa, basta um deles liberar para a próxima fase que concluirá o worktiem 
e a pendencia de todos. 
iii. No caso de ter mais de uma tarefa para este workitem, é necessário que 
primeiramente um dos responsáveis conclua a sua tarefa, para que o último 
consiga encaminhar para próxima fase. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
32 
 ORIGEM: Fase 340. 
 DESTINO: Fase 355 e 399. 
Direcionada selecionando as fases seguintes disponíveis: 
i. O envio para a fase 355 é feito a partir da avaliação dos técnicos e/ou 
preparadores, a qual é feita manualmente baseando-se na situação real dos 
materiais, usando apenas como sugestão a “Ação do Usuário, definida na aba 
“Lista de ações”, principalmente para os casos E01, E02 e E05: 
5.3.10. Fase 355 – Armazenamento de material sobrante 
 FUNÇÃO: Etapa onde é dado o destino (fisicamente) aos componentes que foram 
removidos da lista técnica. 
 RESPONSÁVEL: Almoxarifado. 
 REGRAS: Não aplicável. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
33 
 ORIGEM: Fases 350 e 365. 
 DESTINO: Fase 399. 
Direcionada selecionando a fase seguinte disponível: 
5.3.11. Fase 360 – DQF avaliação impacto modificação 
 FUNÇÃO: Etapa onde é avaliada a necessidade de realizar o desenvolvimento e 
cotação de novos materiais comprados. 
 RESPONSÁVEL: DQF. 
 REGRAS: 
i. Recebido pelo planejador dos itens comprados, quando os materiais são 
agrupados pelos Códigos de fábrica FB20000045 até FB20000055. O responsável 
por receber esta tarefa é conforme o cadastro no Grupo de Planejamento 
GP60000270. 
ii. No caso de ter mais de uma tarefa para este workitem, é necessário que 
primeiramente um dos responsáveis conclua a sua, para que o último consiga 
encaminhar para próxima fase. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
34 
 ORIGEM: 300, 335 e 365. 
 
 DESTINO: Fases 361 ou 365. 
Direcionada selecionando as fases seguintes disponíveis: 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
35 
5.3.12. Fase 361 – Finalização da cotação 
 FUNÇÃO: Etapa onde está pendente com o fornecedor, a avaliação sobre a 
viabilidade de modificação e desenvolvimento de materiais, bem como a cotação. 
 RESPONSÁVEL: DQF. 
 REGRAS: 
i. Esta fase foi criada para caracterizar que as pendencias estão com o fornecedor 
e não contabilizar o tempo de ação efetiva do DQF, que é feito na fase 360. 
ii. Esta fase é criada automaticamente para o responsável da fase 360. 
 ORIGEM: Fase 360. 
 DESTINO: Fase 365.
Direcionada selecionando a fase seguinte disponível: 
5.3.13. Fase 365 – Compras avaliação impacto modificação 
 FUNÇÃO: Etapa onde são feitos ou cancelados os pedidos de materiais 
comprados impactados na modificação. 
 RESPONSÁVEL: Compras. 
 REGRAS: 
i. Recebido pelo planejador dos itens comprados, quando os materiais são dos 
planejadores de materiais agrupados pelo Códigos de fábrica FB20000045 até o 
FB20000055. O responsável por receber esta tarefa é conforme o cadastro no 
Grupo de Planejamento GP60000271. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
36 
ii. Quando esta fase é concluída e direcionada para as fases 355 ou 399, é alterado 
o status da ação dos materiais impactados para “Ação executada”. 
 ORIGEM: Fases 300, 335, 360 e 361. 
 
 
 DESTINO: Fases 355, 360 e 399. 
Direcionada selecionando as fases seguintes disponíveis: 
i. O envio para a fase 355 é feito baseando-se na situação real dos materiais 
(estoque, pedidos, etc.), usando apenas como sugestão a “Ação do Usuário, 
definida na aba “Modificações ECM”, principalmente para os casos E01, E02 e 
E05: 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
37 
ii. O envio para a fase 360 é feito quando identificado que ainda há pendências no 
desenvolvimento do material, onde o DQF deve atuar junto como fornecedor. 
iii. Envia para fase 399 quando esta etapa estiver concluída. 
5.3.14. Fase 375 – Execução do workflow do material 
 FUNÇÃO: Etapa onde o sistema aguarda a conclusão de alguma pendencia de 
workflow (ampliação de material, lista técnica, custos, etc.). 
 RESPONSÁVEL: BATCH 
 REGRAS: 
i. A conclusão desta tarefa é feita automaticamente, quando um job, que roda 
periodicamente, identifica que as pendencias da ZTMM069 foram sanadas. 
ii. A quantidade de tarefas enviadas para essa fase é relativa à quantidade de 
materiais com workflows pendentes e a conclusão do workitem será feita somente 
quando todos os materiais não tiverem mais pendencias. 
iii. O envio desta fase é automático para a próxima, porém enquanto ela não for 
concluída, o sistema paralelamente também não permite a liberação das fases 
340, 360 e 365. 
 ORIGEM: Fases 300, 315. 
 DESTINO: Fase 335. 
Direcionada automaticamente ao liberar para a próxima fase. 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
38 
5.3.15. Fase 399 – Processo concluído 
 FUNÇÃO: Etapa onde o sistema apresenta que todo o workflow foi concluído. 
 RESPONSÁVEL: Não aplicável. 
 REGRAS: 
i. Para essa fase não é gerado um workitem e não é possível identifica-la na aba 
“Etapas do processo”. Portanto pode ser considerada apenas como um status. 
ii. Ao concluir todas etapas em cada workflow (todos os workitens), este status é 
incluído automaticamente. 
 ORIGEM: Fases 300, 335, 340, 345, 350, 355 e 365 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
39 
WEG EQUIPAMENTOS ELÉTRICOS S.A. – WEN 
Departamento Planejamento e Controle da Produção 
PCR - Fluxo, regras e procedimentos 
40 
 DESTINO: Não aplicável. 
6. TRANSAÇÕES SAP 
Todas as transações relativas a PCR’s estão agrupadas em pastas no menu de 
transações SAP, separadas por funcionalidades, conforme a seguir: 
Essa lista pode ser buscada digitando “PCR“ no campo para pesquisa, no topo 
da tela inicial do SAP: 
`