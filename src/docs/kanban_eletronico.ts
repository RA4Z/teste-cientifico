const sistemas = 'Robert Aron Zimmermann'
const secretaria = 'Ester Caroline Vieira Dias'

export const kanbanDoc = `
MANUAL EXPLICATIVO DO KANBAN ELETRÔNICO
O manual do kanban eletrônico se encontra na pasta: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Processos com Automatização/11 - Kanban digital

1. METODOLOGIA
O método kanban é utilizado na WEG Energia para programar e acompanhar a produção das máquinas eletro girantes e turbinas. Este método consiste em programar as máquinas “de trás para frente” a partir da data da ordem de venda.
2. KANBAN ELETRÔNICO – MEG
O kanban eletrônico é atualizado diariamente a cada 3 horas de forma automática, sem a necessidade de intervenção manual. Além dos monitores localizados pela fábrica, ele pode ser acessado através do link: https://app.powerbi.com/view?r=eyJrIjoiNzRiNDk3NDYtNGNlMi00ODkwLTlmOWEtODYwNTJmMDc0NDczIiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9
Qualquer situação que envolva atualização do quadro deve ser tratada com ${sistemas}.
2.1. LAYOUT
Imagem 1 - Cabeçalho Kanban MEG
Apresenta os dados segredados por montagem;
Lista de todos os processos acompanhados pelo kanban.
Lead time: Lead time, em dias, de produção daquele processo.
Campo de visão: Campo de visão, em dias, para aquele processo;
Indicador de atendimento ao kanban;
Base de dados onde a fábrica informa o status do material na fábrica;
Projetos paralisados. Estes não são contabilizados no indicador de atendimento;
Legenda;
Imagem 2 - Atalhos Kanban MEG
Página principal do kanban eletrônico;
Indicadores das áreas;
Kanban eletrônico pela data início dos projetos;
Imagem 3 - Projetos Kanban MEG
Projetos em atraso;
Projetos que devem ser entregues, conforme data de cada quadrante;
Visão antecipada de projetos. Ocorre quando lead time do PS está maior que o lead time da norma WPS-21319.
2.2. PLANEJAMENTO
O PCP recebe o claim com solicitação de vendas para planejar a máquina, o Planejamento Mestre, seguindo a norma WPS-21319 Padronização, Programação e Controle do Lead Time para Roteiros de Fabricação - programa a máquina e as tarefas que a compõe. O lead time de cada tarefa está pré setado nos templates utilizados para o planejamento.
2.3. PROGRAMAÇÃO
O programador kanban é responsável em manter a programação nivelada de forma que a fábrica mantenha as entregas e a produtividade. É feita também a análise dos principais componentes e na falta de algum item, é consensado entre PCP e Suprimentos se a máquina será reprogramada conforme data de entrega.
Função realizada por Sergio Gonçalves de Jesus.
O programador de cada área é responsável em liberar as ordens de produção. Esta liberação é norteada pela Planilha de Acasalamento disponível em <Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Acasalamento Montagem A, B, C/Acasalamento_Auto>. As ordens são liberadas diariamente.
Usinagem: Baseia-se na coluna CC Div Usi > MTM.
Planejadores: 204, 206, 207, 209, 211, 212, 213, 214, 215, 218, 221, 224, 225 e 226
Caldeiraria: Baseia-se na coluna BY (DIV Cald Usi) e CA (Cald MTM). A data da planilha segue regra abaixo:
Montagem A: -13 dias úteis*
Montagem B: -15 dias úteis*
Montagem C: -17 dias úteis*
Descontado da data fim do PS
Planejadores: 100, 108 e 109
Pacotes:
Montagem A: 6 dias úteis pra trás. Coluna AA (Pac)
Montagem B: 12 dias úteis
Montagem C: 14 dias úteis
Planejadores:
MRP Pacotes: 410, 411, 403, 412, 413, 401, 415, 430, 301 ,304, 305, 350, 404
Kanban: 400 e 414
Turbinas: 038, 432, 099, 051, 081, 180, 403, 233, 080, 234
Bobinagem:
Bobina. Baseia-se na coluna AE (Bob). A conforme regras:
Montagem A: Descontar 7 dias úteis
Montagem B: Descontar 11 dias úteis
Montagem C: Descontar 17 dias úteis
Estator: Baseia-se na coluna AE (Bob). Liberação descontando 5 dias úteis.
Planejadores: 422, 300, 405, 421, 431, 433, 402 e 082
Montagem: Libera conforme MRP.
Planejadores: 005, 008, 011, 012, 030, 031, 035 e 036
2.4. APONTAMENTO
Para que o apontamento da ordem de produção esteja vinculado com o apontamento no PS é necessário que ambos possuam cadastrado o Local de Referência. Caso algum documento esteja com este campo em branco o apontamento não irá ocorrer no PS, logo não irá sair do Kanban Eletrônico e acarretará em atraso.
Imagem 4 - Local de Referência Ordem de Produção
Imagem 5 - Local de Referência PS
2.5. VÍNCULO KANBAN ELETRÔNICO COM PS
KANBAN	PS	CÓDIGO
Bobina Estator	Bobina do Estator	BE
Bobina Seriados	Segue MRP	-
Planejador 302 e 405	-	-
Caixa Ventilação	Trocador de Calor Soldado/Cx Vent	TRO
Carcaça com Tubo	Carcaça com Tubos	CCT
Carcaça Pré Usinada	Carcaça Pré Usinada	CPU
Carcaça Soldada	Carcaça Bruta	CS
Carcaça Usinada	Carcaça Usinada	CUSI
Dispositivo - Caldeiraria	Segue MRP	-
Planejador 081	-	-
Dispositivo - Usinagem	Segue MRP	-
Planejador 080	-	-
Diversos Caldeiraria p/ Montagem	Diversos Caldeiraria p/ Montagem	CALD-MTM
Diversos Caldeiraria p/ Usinagem	Data Tampa Usinada - 9 dias	-
Eixo Pré-Usinado	Eixo Pre-Usinado	EPU
Eixo Soldado	Eixo Soldado	ESL
Eixo Usinado	Eixo Usinado	EU
Diversos Caldeiraria p/ Usinagem	Data Tampa Usinada - 9 dias	-
Estator Bobinado BT	Segue MRP	-
Planejador 303	-	-
Estator Completo	Prensar Carcaça no Estator	IMOT
Inclusão Engenharia - Caldeiraria	Segue MRP	-
Planejador 199	-	-
Montar Pacote Estator	Montar Pacote Estator	MPE
Pacote Estator	Pacote do Estator	PE
Pacote Rotor Bobinado	Montar Pacote do Rotor	MPR
Estator Bobinado BT	Segue MRP	-
Planejador 303	-	-
Polo Soldado	Polo Rotor Soldado	PRS
Polo Usinado	Base do Polo do Rotor	PRU
Preparação Caixa de Ventilação	Preparação Caixa Ventilação	PTRO
Preparação Carcaça	Preparar Materiais Carcaça Soldada	PCS
Preparação Eixo Soldado	Preparar Materiais Eixo Soldado	PESL
Preparar Diversos Caldeiraria p/ Usinagem	Preparar Diversos Caldeiraria p/ Usinagem	PTS
Polo Soldado	Polo Rotor Soldado	PRS
Preparar Diversos p/ Montagem	Diversos Usinagem p/ Montagem	USI-MTM
Preparar Diversos p/ Usinagem	Diversos Caldeiraria p/ Usinagem - 13 dias	-
Roda Polar Soldada	Roda Polar Soldada	RPS
Roda Polar Usinada	Roda Polar Usinada	RPU
Rotor Completo Bobinado	Rotor completo	RC
Rotor Completo Caldeirado	Rotor completo	RC
Diversos Caldeiraria p/ Usinagem	Diversos Caldeiraria p/ Usinagem	TDS
Tampa Usinada	Tampas Usinadas	TDU
Usinar Pacote Estator	Usinar Pacote Estator	UPE
Z - Acabamento	Acabar e Embalar	MOT
Z - Montagem Final	Montar Tampas e Mancais	MTM
Z - Teste Final	Testar	TES
2.6. INDICADORES
Tarefas medidas pelo Kanban Eletrônico.
Caldeiraria
| Seção | Código | Componente | Montagem |
|---|---|---|---|
| | ARS | Aranha Soldada | CS |
| | CS | Carcaça Soldada | ESL |
| | ESL | Eixo Soldado | RPS |
| | RPS | Roda Polar Soldada | TDS |
| | TDS | Tampa Soldada | TRO |
| | TRO | Trocador de Calor | CCT |
| | CCT | Carcaça com Tubos | - |
| Preparação | PESL | Preparar Materiais Eixo Soldado | - |
| | PTRO | Preparar Materiais Trocador Soldado | - |
| | PCS | Preparar Materiais Carcaça Soldada | - |
| | PTS | Preparar Materiais Tampa Soldada | - |
| Pacotes | MPR | Rotor Soldado | - |
| | PE | Pacote Estator | - |
| | PRS | Polo Soldado | - |
| | RC-CAL | Rotor de Barras (CAL) | - |
Usinagem
| Seção | Código | Componente | Pesada |
|---|---|---|---|
| | ARU | Aranha Usinada | CPU |
| | CPU | Carcaça Pré Usinada | CUSI |
| | CUSI | Carcaça Usinada | EPU |
| | EPU | Eixo Pré Usinado | EU |
| | EU | Eixo Usinado | PRU |
| | PRU | Polo Usinado | RPU |
| | RPU | Roda Polar Usinada | - |
| Leve | TDU | Tampa Usinada | - |
Bobinagem
| Seção | Código | Componente | Bobinas |
|---|---|---|---|
| | BE | Jogo de Bobinas | - |
| Estatores | IMOT | Carcaça c/ Estator Bob. | EC |
| | EC | Estator Completo | - |
| Rotores | PR | Polo Bobinado | RC-BOB |
| | RC-BOB | Rotor Bobinado | - |
Montagem
Seção	Código	Componente	Montagem A
MTM-A	Montagem A	-
Montagem B	MTM-B	Montagem B	-
Montagem C	MTM-C	Montagem C	-
Acabamento AT	MOT-AT	Acabamento AT	-
Acabamento BT	MOT-BT	Acabamento BT	-
Ensaio
| Seção | Código | Componente | Baixa Tensão |
|---|---|---|---|
| | TES-BT | Ensaio BT | Alta Tensão |
| | TES-AT | Ensaio AT | - |
O indicador é atualizado semanalmente e enviado por e-mail para as áreas.
Dúvidas entrar em contato com ${secretaria} ou ${sistemas}
Imagem 6 - Indicador Kanban Semanal
3. KANBAN ELETRÔNICO - TURBINAS
O kanban eletrônico é atualizado diariamente a cada 3 horas de forma automática, sem a necessidade de intervenção manual. Além dos monitores localizados pela fábrica, ele pode ser acessado através do link: https://app.powerbi.com/view?r=eyJrIjoiZmY0ZTc4MDgtYWFlMi00ZTBiLWJlNTYtOTdlMzQ3YjI5YWM2IiwidCI6Ijg4NjY2NmE2LWE4ZDItNDYwNC1hMDAyLTk1YjYyMmNiN2UxOCIsImMiOjR9
Qualquer situação que envolva atualização do quadro deve ser tratada com ${sistemas}.
3.1. LAYOUT
Imagem 7 - Kanban Turbinas Página Inicial
Kanban eletrônico com as tarefas da fábrica;
Indicadores de Produção;
Acompanhamento da montagem por componente;
Última atualização;
Imagem 8 - Kanban Turbinas Cabeçalho
Lista todos os processos acompanhados pelo kanban;
Departamento responsável;
Projetos em atraso;
Imagem 9 - Kanban Eletrônico Projetos
Filtro por tipo de turbina;
Projetos em andamento;
Projetos que devem ser entregues, conforme data de cada quadrante.
3.2. PLANEJAMENTO
O PCP recebe o claim de aprovação com solicitação de vendas para planejar a máquina, e programa a máquina e as tarefas que a compõe. O lead time de cada tarefa está pré setado nos templates utilizados para o planejamento.
3.3. PROGRAMAÇÃO
O programador kanban é responsável em manter a programação nivelada de forma que a fábrica mantenha as entregas e a produtividade. É acompanhado a data de entrega dos fundidos verificando se o componente será entregue no prazo. Caso a data não atenda é verificado a possibilidade de postergação.
O programador do centro 1206 é responsável em liberar todas as ordens do centro 1206 seguindo a data início do MRP e esta deve ser coerente com a data do kanban eletrônico que segue o template do PS. As ordens são liberadas diariamente com uma semana de antecedência.
3.4. APONTAMENTO
Para que o apontamento da ordem de produção esteja vinculado com o apontamento no PS é necessário que ambos possuam cadastrado o Local de Referência. Caso algum documento esteja com este campo em branco o apontamento não irá ocorrer no PS, logo não irá sair do Kanban Eletrônico e acarretará em atraso.
Imagem 10 - Local de Referência Ordem de Produção
Imagem 11 - Local de Referência PS
3.5. VÍNCULO KANBAN ELETRÔNICO COM PS
KANBAN	SISTEMA	CÓDIGO
1 - Cotovelo Caldeirado	1 – Sistema de Sucção	CTC
2 - Cotovelo Usinado	1 – Sistema de Sucção	CTU
3 - Cotovelo Pintado	1 – Sistema de Sucção	CTP
4 - Cotovelo Conj Caldeirado	1 – Sistema de Sucção	CTCC
5 - Cone Caldeirado	1 – Sistema de Sucção	CONC
6 - Cone Usinado	1 – Sistema de Sucção	CONU
7 - Cone Pintado	1 – Sistema de Sucção	CONP
8 - Tubo Caldeirado	1 – Sistema de Sucção	TUEC
9 - Tubo Usinado	1 – Sistema de Sucção	TUEU
10 - Tubo Pintado	1 – Sistema de Sucção	TUPI
11 - Pré-Montagem	1 – Sistema de Sucção	SUPM
12- Acabamento	1 – Sistema de Sucção	SUCA
13 - Tubo/Tampa Caldeirado	2 – Pré Distribuidor	TPDC
14 - Tubo/Tampa Usinado	2 – Pré Distribuidor	TPDU
15 - Tubo/Tampa Pintado	2 – Pré Distribuidor	TPDP
16 - Curva Caldeirada	2 – Pré Distribuidor	CUC
17 - Curva Usinada	2 – Pré Distribuidor	CUU
18 - Pre Caldeirado (BULBO)	2 – Pré Distribuidor	PDC
19 - Pre Dist. Usinado	2 – Pré Distribuidor	PDU
20 - Pre Dist. Pintado	2 – Pré Distribuidor	PDCP
21 - Caixa Esp Caldeirada	2 – Pré Distribuidor	CEC
22 - Caixa Esp Usinada	2 – Pré Distribuidor	CEU
23 - Teste Hidrostatico	2 – Pré Distribuidor	THN
24 - Caixa Esp Pintada	2 – Pré Distribuidor	CEP
25 - Acabamento	2 – Pré Distribuidor	APD
28 - Desv Cald	3 - Distribuidor/Injetor - Desviador Jato Pelton	DC
29 - Desv Usi	3 - Distribuidor/Injetor - Desviador Jato Pelton	DU
30 - Tampa Ext/LOR Caldeirada	3 - Distribuidor/Injetor - Desviador Jato Pelton	TORC
31 - Tampa Ext/LOR Usinada	3 - Distribuidor/Injetor - Desviador Jato Pelton	TORU
32 - Tampa Ext/LOR Pintada	3 - Distribuidor/Injetor - Desviador Jato Pelton	TOP
33 - Ta Int/LR Caldeirada	3 - Distribuidor/Injetor - Desviador Jato Pelton	TLRC
34 - Ta Int/LR Usinada	3 - Distribuidor/Injetor - Desviador Jato Pelton	TLRU
35 - Ta Int/LR Pintada	3 - Distribuidor/Injetor - Desviador Jato Pelton	TIP
36 - Pá Diretriz	3 - Distribuidor/Injetor - Desviador Jato Pelton	PADU
37 - Anel Regulagem Caldeirado	3 - Distribuidor/Injetor - Desviador Jato Pelton	ARC
38 - Anel Regulagem Usinado	3 - Distribuidor/Injetor - Desviador Jato Pelton	ARU
39 - Anel Regulagem Pintado	3 - Distribuidor/Injetor - Desviador Jato Pelton	ARP
40 - Montagem (PRÉ+DIST.)	3 - Distribuidor/Injetor - Desviador Jato Pelton	MTPD
41 - Acabamento	3 - Distribuidor/Injetor - Desviador Jato Pelton	ACD
42 - Pa Rotor	4 - Sistema Linha de Eixo	PARU
43 - Cubo Usinado	4 - Sistema Linha de Eixo	CRU
44 - Anel Usinado	4 - Sistema Linha de Eixo	AU
45 - Rotor Montado	4 - Sistema Linha de Eixo	RM
46 - Rotor Usinado	4 - Sistema Linha de Eixo	RU
47 - Eixos	4 - Sistema Linha de Eixo	EAU
48 - Eixos Pintados	4 - Sistema Linha de Eixo	EAP
49 - Ogiva Caldeirada	4 - Sistema Linha de Eixo	OGC
50 - Ogiva Usinada	4 - Sistema Linha de Eixo	OGU
51 - Ogiva Pintada	4 - Sistema Linha de Eixo	OGCP
52 - Aro Camara Caldeirado	4 - Sistema Linha de Eixo	ACC
53 - Aro Camara Usinado	4 - Sistema Linha de Eixo	ACU
54 - Aro Camara Pintado	4 - Sistema Linha de Eixo	ACCP
55 - Montagem	4 - Sistema Linha de Eixo	LEM
56 - Acabamento	4 - Sistema Linha de Eixo	ALE
57 - Vedação Eixo Usi	5 - Vedação	VEU
58 - Vedação Eixo Acabamento	5 - Vedação	VEA
60 - Sobrevelocidade	6 - Auxiliares	VMC
61 - Lubrificação dos Mancais	6 - Auxiliares	VMU
62 - Sistemas Auxiliares Acabados	6 - Auxiliares	VMP
63 - Virola Montante Caldeirada	7 - Valvula Borboleta	JDC
64 - Virola Montante Usinada	7 - Valvula Borboleta	JDU
65 - Virola Mont Pint Cald	7 - Valvula Borboleta	JDP
66 - Junta Desmontagem Caldeirada	7 - Valvula Borboleta	CVBC
67 - Junta Desmontagem Usinada	7 - Valvula Borboleta	CVBU
68 - Junta Desmontagem Pint Cald	7 - Valvula Borboleta	CVP
69 - Corpo Caldeirado	7 - Valvula Borboleta	OC
70 - Corpo Usinado	7 - Valvula Borboleta	OU
71 - Corpo Valv Pint Cald	7 - Valvula Borboleta	OP
72 - Obturador / Esfera Caldeirado	7 - Valvula Borboleta	VBM
73 - Obturador / Esfera Usinado	7 - Valvula Borboleta	VBA
74 - Obturador / Esfera Pintado	7 - Valvula Borboleta	VMC
75 - Montagem	7 - Valvula Borboleta	VMU
76 - Acabamento	7 - Valvula Borboleta	VMP
78 - Montagem Completa	8 - Montagem	mtm
3.6. INDICADORES
Tarefas medidas pelo Kanban Eletrônico.
Caldeiraria
Código	Componente
ARC	ANEL REGULAGEM CALD
ACC	ARO CAMARA CALD
BC	BIFURCACAO CALD
BIC	BOCAL INJETOR CALD
BVC	BRAÇO DA VALVULA CALD
CEC	CAIXA ESPIRAL CALD
CAC	CARCACA CALD
CC	CONDUTO CALD
CONC	CONE CALD
COC	CORPO OBTURADOR CALDEIRADO
CVBC	CORPO VALV BORB CALD
CTC	COTOVELO CALD
CUC	CURVA CALDEIRADA
CPDC	CURVA PRE DISTRIBUIDOR CALD
EAC	EIXO ARVORE CALD
FPC	FLANGE E PA FIXA CALD
JDC	JUNTA DESMONTAGEM CALDEIRADO
OC	OBTURADOR CALD
OGC	OGIVA CALD
PC	PAINEL CALD
PFC	PECAS FIXAS CALD
PDC	PRE DISTRIBUIDOR CALD
RC	ROTOR CALD
DC	SIST DESVIADOR CALD
INC	SIST INJECAO CALD
SUCA	SIST SUCCAO ACAB
SUCC	SIST SUCCAO CALD
SAC	SISTEMA ACIONAMENTO CALDEIRADO
SEC	SISTEMA EQUALIZADOR CALD
SCC	SUPORTE DO CILINDRO CALD
TCC	TAMPA DA CARCACA CALD
TAEC	TAMPA EXT CALD
TORC	TAMPA LOR CALD
TLRC	TAMPA LR CALD
TRC	TRANSICAO CALD
TUEC	TUBO DE ENTRADA CALD
TPDC	TUBO PRE DISTR CALD
VPC	VIGA PESCADORA CALD
VJC	VIROLA JUSANTE CALD
VMC	VIROLA MONTANTE CALD
Usinagem
Código	Componente
AU	ACOPLAMENTO US
AR	ANEL DO ROTOR
ARU	ANEL REGULAGEM US
ACU	ARO CAMARA US
BU	BIFURCACAO US
BIU	BOCAL INJETOR USI
BVU	BRAÇO DA VALVULA USI
CEU	CAIXA ESPIRAL US
CAU	CARCACA US
CONU	CONE USI
COU	CORPO OBTURADOR USINADO
CVBU	CORPO VALV BORB US
CTU	COTOVELO USI
CRU	CUBO ROTOR US
CUU	CURVA USINADA
EAU	EIXO ARVORE US
ETU	EIXO TURBINA USINADO
FPU	FLANGE E PA FIXA USI
JDU	JUNTA DESMONT US
UM	MANCAL USINADO
OU	OBTURADOR US
OGU	OGIVA USI
PADU	PA DIRETRIZ US
PARU	PA ROTOR US
PU	PAINEL US
PFU	PECAS FIXAS US
PDU	PRE DISTRIBUIDOR US
RPU	ROTOR PRÉ USINADO
RU	ROTOR US
DU	SIST DESVIADOR US
INU	SIST INJECAO US
VEU	SIST VEDACAO EIXO USI
S.A.U	SISTEMA ACIONAMENTO USINADO
SEU	SISTEMA EQUALIZADOR USI
SUCU	SUCCAO USINADO
SCU	SUPORTE DO CILINDRO USI
TCU	TAMPA DA CARCACA USI
TAEU	TAMPA EXT US
TAIU	TAMPA INT US
TORU	TAMPA LOR US
TLRU	TAMPA LR US
TUEU	TUBO DE ENTRADA USI
TPDU	TUBO PRE DISTR USI
VPU	VIGA PESCADORA US
VJU	VIROLA JUSANTE US
VMU	VIROLA MONTANTE US
VIU	VOLANTE INERCIA US
Montagem
Código	Componente
APD	ACAB PRÉ DISTRIBUIDOR
ACD	ACABAMENTO CONJUNTO DISTRIBUIDOR
ACAB	ACABAR E EMBALAR
ALE	ACABAR LINHA DE EIXO
ACR	ACIONAMENTO REGULAGEM
CEA	CAIXA ESPIRAL ACAB
CAM	CARCACA MONT
CAA	CILINDRO ACION ACAB
CA	CONDUTO ACAB
VBA	CONJ VALV BORB ACAB
VBM	CONJ VALV BORB MONT
MA	MANCAL ACAB
MTD	MONT CONJ DISTRIBUIDOR
MTM	MONTAGEM
MTPD	MONTAGEM DISTRIBUIDOR + PRÉ DISTRIBUIDOR
MTC	MONTAGEM DO SISTEMA CARCACA
MRPC	MONTAGEM ROTOR / PÁS CALD
PA	PAINEL ACAB
PM	PAINEL MONT
PFA	PECAS FIXAS ACAB
PFM	PECAS FIXAS MONT
PREP	PREPARAR MATERIAIS
RM	ROTOR MONT
ACFA	SIST AUX CASA FORCA ACAB
ATA	SIST AUX TURBINA ACAB
DA	SIST DESVIADOR ACAB
DM	SIST DESVIADOR MONT
INA	SIST INJECAO ACAB
INM	SIST INJECAO MONT
LEM	SIST LINHA EIXO MONT
LEPM	SIST LINHA EIXO PRE MONT
LMM	SIST LUBRIF MANCAL MONT
SSM	SIST SOBREVELOCIDADE MONT
SUPM	SIST SUCCAO PRE MONT
VEM	SIST VEDACAO EIXO MONT
SAA	SISTEMA ACIONAMENTO ACABADO
VEA	SISTEMA VEDACAO EIXO ACABAMENTO
THM	TESTE HIDROSTATICO MONTAGEM
TAM	TUBULACAO ACIONAM PRE MONT
VAEA	VALVULA ESFERICA ACABADA
VAEM	VALVULA ESFERICA MONTADA
VPA	VIGA PESCADORA ACAB
VPM	VIGA PESCADORA MONT
`