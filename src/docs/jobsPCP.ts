export const jobsPCP = `
Lista com todos os JOBS do PCP:
Caminho com a lista atualizada de todos os JOBS da WEG: Q:/APPS/SAP/EP0/JOB_UC4
Os principais arquivos dos jobs do PCP se encontram nas pastas Q:/APPS/SAP/EP0/Indicadores PCP_WEN e Q:/APPS/SAP/EP0/PCP_WEN

Nome do job	Descricao	Programa SAP	Variante	Periodicidade	Destinatario	Usuário	Impacto
AT_PP_000056	---	ZPPPR_036	TF_OP_MT_ANO	Job execution start in 2021-07-13	/Indicadores_PCP_WEN/OP_MONTAGEM_ANO	josefj	---
BR_MM_000009	---	ZPMMR_401	/EST_120D_1208	Diariamente as 02:15hs	/PCP_WEN/Estoque sem consumo/Dados_1208	Lucas Moraes dos Santos	---
BR_MM_002277	---	ZPMMR_401	/EST_120D_1200	Diariamente as 02:16hs	/PCP_WEN/Estoque sem consumo/ESTOQUE_1200	ivanrl	---
BR_MM_002314	---	ZPMMR_401	/EST_120D_6201	Diariamente as 03:22hs	/PCP_WEN/Estoque sem consumo/DADOS_6201	valmirj@weg.net	---
BR_MM_003340	Busca os kanbans solcitados via Kanban do centro 1206	ZPMMR_432	/KBN_ELE_SOLIC	Dias uteis a cada 2 horas das 04:01 as 21:00hs	/Indicadores PCP_WEN/KANBANS_SOLICITADOS_1206	josefj@weg.net	Nao atualizacao do kanban de turbinas
BR_MM_003701	Atualizar informação de estoque para indicador Power BI utilizado para reuniões entre gestores	ZPMMR_401	WEN_PCP	Segunda a sexta-feira a cada 30 minutos/ das 00:05hs as 23:05hs	/PCP_WEN/Estoque ZTMM402	robertn	As informações utilizadas no GR estão desatualizadas para as reuniões
BR_MM_0580_196_D_EST_120D_3200	Materiais em estoque a mais de 120 dias	ZPMMR_401	/EST_120D_3200	Diariamente as 01:40hs	/PCP_WEN/Estoque sem consumo/Dados_3200	valmirj@weg.net	Nao ira gerar relatorio de materiais em estoque
BR_MM_0580_198_D_EST_120D_1206	Materiais em estoque a mais de 120 dias	ZPMMR_401	/EST_120D_1206	Diariamente as 01:10hs	/PCP_WEN/Estoque sem consumo/Dados_1206	valmirj@weg.net	Nao ira gerar relatorio de materiais em estoque
BR_MM_0580_201_D_EST_120D_1220	Materiais em estoque a mais de 120 dias	ZPMMR_401	/EST_120D_1220	Diariamente as 01:25hs	/PCP_WEN/Estoque sem consumo/Dados_1220	valmirj@weg.net	Nao ira gerar relatorio de materiais em estoque
BR_MM_0580_202_D_EST_120D_6200	Materiais em estoque a mais de 120 dias	ZPMMR_401	/EST_120D_6200	Diariamente as 01:50hs	/PCP_WEN/Estoque sem consumo/Dados_6200	valmirj@weg.net	Nao ira gerar relatorio de materiais em estoque
BR_MM_0580_203_D_EST_120D_1201	Materiais em estoque a mais de 120 dias	ZPMMR_401	/EST_120D_1201	Diariamente as 01:20hs	/PCP_WEN/Estoque sem consumo/Dados_1201	valmirj@weg.net	Nao ira gerar relatorio de materiais em estoque
BR_MM_0580_204_D_EST_120D_1200	Materiais em estoque a mais de 120 dias	ZPMMR_401	/EST_120D_1200	Diariamente as 01:05hs	/PCP_WEN/Estoque sem consumo/Dados_1200	valmirj@weg.net	Nao ira gerar relatorio de materiais em estoque
BR_PP_000006	---	PPIO_ENTRY	/INDICADOR MRP	Diariamente as 04:12hs	/PCP_WEN/	Eliane de Araujo	---
BR_PP_002445	---	ZPPPR_036	WEN_ZPP107	Diariamente as 05:11hs	/Indicadores PCP_WEN/ORDENS_ZTPP107	josefj	---
BR_PP_002529	---	ZPPPR_036	/Tarefas_OP	Diariamente as 03:13hs	/Indicadores PCP_WEN/TAREFAS_DE_ORDENS_ZTPP107	josefj	---
BR_PP_002596	---	ZPPPR_036	KANBAN_VESTAS	Diariamente as 04:12hs	/Indicadores PCP_WEN/KANBAN_VESTAS_ZTPP107	josefj	---
BR_PP_002609	---	ZPPPR_036	KANBAN_WMO	Diariamente as 04:56hs	/Indicadores PCP_WEN/KANBAN_WMO_ZTPP107	josefj	---
BR_PP_002630	---	ZPPPR_036	KANBAN_DISPOS	Diariamente as 05:19hs	/Indicadores PCP_WEN/KANBAN_DISPOSITIVOS_ZTPP107	josefj	---
BR_PP_002651	---	ZPPPR_036	/TAREFAS_OP_EN	Diariamente as 06:18hs	/Indicadores PCP_WEN/TAREFAS_COMPLETO_ENS	josefj@weg.net	---
BR_PP_002652	---	ZPPPR_036	/TF_OP_EN_ANO	Diariamente as 06:19hs	/Indicadores PCP_WEN/TAREFAS_MAQ_ANO	josefj@weg.net	---
BR_PP_002662	---	ZPPPR_036	/TF_OP_MT_ANO	Diariamente as 06:11hs	/Indicadores PCP_WEN/MONTAGEM_COMPLETO	josefj@weg.net	---
BR_PP_002811	---	ZPPPR_036	/KANBAN_CONJ	Job execution start in 2021-10-06	/Indicadores PCP_WEN/KANBAN_CONJ_ZTPP107	josefj@weg.net	---
BR_PP_002899	O Job deve criar uma base de dados com as ordens do Vestas para que essas sejam mapeadas pelo Kanban eletronico	ZPPPR_036	KBN_VESTAS_NEW	Diariamentes as 06:01 Hrs	/Indicadores PCP_WEN/KBN_VESTAS_ZTPP107_RELEASED_12_2021	josefj@weg.net	Falha na programacao do Vestas possiveis problemas na producao
BR_PP_003005	Coleta as ordens de producao ativas de TURBINAS	ZPPPR_036	WENHISA_ZPP107	Diariamentes as 01:01 Hrs	/Indicadores PCP_WEN/ZTPP107_1206	josefj@weg.net	Nao atualizacao do Kanban Eletronico possivel falha na programacaoacompanhamento de projetos
BR_PP_003012	Job necessario para atualizacao do kanban eletronico	PPIO_ENTRY	/PREPARA_KBN	Diariamentes as 06:02 Hrs	/Indicadores PCP_WEN/APONTAMENTOS_KANBAN	josefj@weg.net	Nao atualizacao do Kanban eletronico
BR_PP_003025	Atualizacao de ordens do centro 1206	ZPPPR_036	KBN_ELE_1206	Diariamentes as 06:06 Hrs	/Indicadores PCP_WEN/ORDENS_ZTPP107_1206	josefj@weg.net	Nao atualizacao do kanban eletronico
BR_PP_003145	Job busca a lista de projetos ativos do eolico	ZPPPR_036	KBN_ELE_1220	Diariamentes as 06:01 Hrs	/Indicadores PCP_WEN/ORDENS_ZTPP107_1220	josefj@weg.net	PCP  Fabrica
BR_PP_003155	Descricao da ordem PEP para o Kanban eletronico	ZPPPR_036	/DES_ORD_PEP	Em intervalos/ a cada 240 minuto(s)/ iniciando as 04:00 e encerrando as 20:20	/Indicadores PCP_WEN/DESCRICAO_ORDEM_PEP	josefj@weg.net	Nao atualizacao das nomenclaturas no kanban eletronico
BR_PP_003156	Job que coleta as informacoes da operacoes realizadas para insercao da informacao no kanban eletronico	ZPPPR_036	/OP_p_KBN_02	Em intervalos/ a cada 240 minuto(s)/ iniciando as 04:00 e encerrando as 20:00	/Indicadores PCP_WEN/OPERACOES_1206	josefj@weg.net	Nao atualizacao das operacoes e acompanhamento da fabrica
BR_PP_003185	Job responsavel pela criacao de base de dados dos materiais incluidos pela engenharia para a fabrica	ZPPPR_036	KBN_ELE_ENG	Em intervalos/ a cada 120 minuto(s)/ iniciando as 03:00 e encerrando as 22:30	/Indicadores PCP_WEN/KANBAN_INCLUSAO_ENGENHARIA	josefj@weg.net	Nao atualizacao do kanban eletronico
BR_PP_003204	LT de turbinas para consumo de informacao no kanban eletronico	ZPPLMR_013	/LISTA_TURBINA	Diariamentes as 06:01 Hrs	/Indicadores PCP_WEN/LT_TURBINAS	josefj@weg.net	Nao atualizacao do kanban eletronico possiveis problemas de producao
BR_PP_003216	Operacoes das ordens do eolico para kanban eletronico V02	ZPPPR_036	/DESORDPEP1220	Em intervalos/ a cada 120 minuto(s)/ iniciando as 05:00 e encerrando as 20:00	/Indicadores PCP_WEN/DESCRICAO_ORDEM_PEP_1220	josefj@weg.net	Nao atualziacao do kanban v02
BR_PP_003217	Busca todas operacoes em aberto do centro 1220	ZPPPR_036	/OP_P_KBN_1220	Em intervalos/ a cada 120 minuto(s)/ iniciando as 05:01 e encerrando as 20:00	/Indicadores PCP_WEN/OPERACOES_1220	josefj@weg.net	Nao atualizacao do kanban eletronico V02
BR_PP_003218	Lista de materiais pendentes para as operacoes do Kanban eletronico	PPCMP000	/KBN_ELE_V02	Em intervalos/ a cada 120 minuto(s)/ iniciando as 05:00 e encerrando as 20:01	/Indicadores PCP_WEN/MATERIAIS_PENDENTES	josefj@weg.net	Nao atualizacao do kanban eletronico
BR_PP_003238	Base de dados com todos projetos para composicao do Kanban de planejamento	ZPPPR_036	KBN_PLANEJAMEN	Diariamentes as 13:01 Hrs	/Indicadores PCP_WEN/ORDENS_ZTPP107_PLANEJAMENTO	josefj@weg.net	Nao atualizacao do kanban possivel falha no planejamento
BR_PP_600029	Estoque 1100	ZPMMR_401	/EST_120D_1100	Diariamentes as 04:01 Hrs	/PCP_WEN/Estoque sem consumo/DADOS_1100	josefj@weg.net	nao acompanhamento dos materiais  de 180 dias
BR_PP_600068	Base de dados das ordens para kanban eletronico da WSB	ZPPPR_036	/JOB_WEN_WSB	Em intervalos/ a cada 120 minuto(s)/ iniciando as 03:01 e encerrando as 22:02	/Indicadores PCP_WEN/ORDENS_ZTPP107_1201	josefj@weg.net	nao atualizacao da programacao
BR_PP_600137	Extrair os dados de Retrabalho da Area de Ensaios	ZPPPR_036	/TF_OP_ENS_RT	Diariamentes as 06:08 Hrs	/Indicadores PCP_WEN/TAREFAS_RETRABALHO_ANO	lucaslf@weg.net	Falta de informacao nos Indicadores
BR_PP_600170	Ordens confirmadas de alternadores mas sem ENCE e ENTE	ZPPPR_036	WEG-ALTERNADOR	Em intervalos/ a cada 30 minuto(s)/ iniciando as 05:00 e encerrando as 23:30	/Indicadores PCP_WEN/ALTERNADORES_EM_ABERTO	josefj@weg.net	falha de apontamento
BR_PP_600174	Busca lista de materiais pendentes dos centros 1200 1206 e 1220	PPCMP000	/PENDENCIAS_SU	Em intervalos/ a cada 240 minuto(s)/ iniciando as 05:00 e encerrando as 18:00	/Indicadores PCP_WEN/QUADRO_SUPRIMENTOS_MATERIAIS_PENDENTES	josefj@weg.net	Nao atualizacao do quadro de compras
BR_PP_600175	Ordens de producao das maquinas seriadas	ZPPPR_036	/SERIADOS_ORDE	Em intervalos/ a cada 360 minuto(s)/ iniciando as 05:00 e encerrando as 17:00	/Indicadores PCP_WEN/QUADRO_SUPRIMENTOS_ORDENS_SERIADOS	josefj@weg.net	nao atualizacao do quadro de suprimentos
BR_PP_600177	CO24 Pendencias de suprimentos para outras areas	PPCMP000	/POR_AREA_1200	Em intervalos/ a cada 120 minuto(s)/ iniciando as 05:00 e encerrando as 19:00	/Indicadores PCP_WEN/QUADRO_SUPRIMENTOS_PENDENCIAS_POR_AREA_1200	josefj@weg.net	Nao atualizacao dos prazos para a fabrica
BR_PP_600178	Atualizacao das pendencias de suprimentos para as areas	PPCMP000	/POR_AREA_1206	Em intervalos/ a cada 120 minuto(s)/ iniciando as 05:00 e encerrando as 05:00	/Indicadores PCP_WEN/QUADRO_SUPRIMENTOS_PENDENCIAS_POR_AREA_1206	josefj@weg.net	Nao atualizacao dos prazos
BR_PP_600205	Base de dados para diversos Kanban	PPIO_ENTRY	/DIVERSOS_KBN	Em intervalos/ a cada 120 minuto(s)/ iniciando as 02:02 e encerrando as 20:00	/Indicadores PCP_WEN/DIVERSOS_CALDEIRARIA	josefj@weg.net	nao atualizacao do kanban eletronico
BR_PP_600206	Base de dados para diversos Kanban	PPIO_ENTRY	/DIV_KBN_1201	Em intervalos/ a cada 120 minuto(s)/ iniciando as 02:03 e encerrando as 20:02	/Indicadores PCP_WEN/DIVERSOS_KANBAN_DIARIO	josefj@weg.net	nao atualizacao do kanban eletronico
BR_PP_600247	Busca  materiais com estoque de seguranca	ZPMMR_401	/ESTOQUE_SEGU	Diariamentes as 06:01 Hrs	/Indicadores PCP_WEN/ESTOQUE_DE_SEGURANCA	josefj@weg.net	Nao atualizacao do quadro de compras
BR_PP_600299	Objetivo do JOB e trazer a informacao de ordemPEP	ZPPPR_036	LISTA_ORDEM	Diariamentes as 04:01 Hrs	/Indicadores PCP_WEN/LISTA_ORDENS	josefj@weg.net	Nao atualizacao do quadro de compras de suprimentos
BR_PP_600338	Base de dados para acompanhamento da PCR   WEN	ZPPCRR_R04	/PCR_MOD_WEN	Em intervalos/ a cada 120 minuto(s)/ iniciando as 05:00 e encerrando as 23:30	/Indicadores PCP_WEN/PCR_MOD_WEN	alisson@weg.net	Nao atualizacao do indicador
BR_PP_600345	Job para geracao de relatorio diario das pendencias de Modificacao de Produto da WEN	ZPPCRR_004	/PCR_MOD_WEN_D	Em intervalos/ a cada 60 minuto(s)/ iniciando as 05:00 e encerrando as 23:00	/Indicadores PCP_WEN/PCR_MOD_WEN_ZTPCR004	alisson@weg.net	Atualizacao de indicador diario
BR_PP_600440	Buscar relatorio de transacao para dados usados em Kanban	ZPPPR_036	/KANBAN_SBC	Diariamentes as 03:25 Hrs	/Indicadores PCP_WEN/KANBAN_SBC_ZTPP107	robertn@weg.net	Os dados nao serao atualizados e a fabrica nao sabera da pendencia
BR_PP_600771	JOB busca uma base de dados da COHV que e utilizada no indicador da programacao para reuniao com os programadores do PCP WEN toda segunda quarta e sexta.	PPIO_ENTRY	WEN_ORD_LIBJGS	Diariamentes as 00:05 Hrs	/PCP_WEN/ORDENS_LIB_COHV	robertn@weg.net	Indicador nao e atualizado
BR_PP_600774	OP 1050 de preparacao de diversos para montagem	PPIO_ENTRY	/PREP_DIVERSOS	Em intervalos/ a cada 60 minuto(s)/ iniciando as 02:00 e encerrando as 23:00	/Indicadores PCP_WEN/PREPARACAO_KANBAN	rogeriohs@weg.net	Nao atualizacao da programacao da fabrica
BR_PP_600837	Quadro de compras da WSB	PPCMP000	/PENDENCIASWSB	Diariamente as 06:18hs	/Indicadores PCP_WEN/QUADRO_SUPRIMENTOS_MATERIAIS_PENDENTES_WSB	karolinel	Não atualização das pendencias de compras
BR_PP_600901	Relatorio de ordens do centro 1201.	ZPPPR_036	ZTPP107_SBC_2	Diariamentes as 04:01 Hrs	/PCP_WEN/ORDENS_WSB_ZTPP107	valmirj@weg.net	Informacoes de indicadores nao serao atualizadas
BR_PP_600902	Atualiza informacoes de um indicador Power BI utilizado para reunioes	PPIO_ENTRY	WM_PCP_WSB	Diariamentes as 02:01 Hrs	/PCP_WEN/ORDENS_DE_PRODUCAO_WSB	valmirj@weg.net	Relatorio nao e atualizado
BR_PP_600920	Buscar informacoes do SAP para desenvolvimento de um indicador	PPIO_ENTRY	/ITAJAI_REL_21	Diariamentes as 00:05 Hrs	/PCP_WEN/RELATORIO_FIOS	robertn@weg.net	O indicador nao sera atualizado impedindo uma analise importante que deve ser feita diariamente
BR_PP_600926	Atualizar dados para usarmos em uma macro que e executada diariamente	ZPPSR_006	PROJ 1200	Diariamentes as 00:05 Hrs	/PCP_WEN/ZTPS022_DADOS	robertn@weg.net	Nao sera possivel executar nossa macro
BR_PP_600944	Busca materiais para serem usados na aba de diversos do kanban eletrônico de SBC	PPIO_ENTRY	/DIVERSOS_SBC	Segunda a sexta-feira a cada 30 minutos/ das 00:30hs as 23:30hs	/Indicadores PCP_WEN/DIVERSOS_CALDEIRARIA_SBC	robertn	As informações do kanban de São Bernardo não estarão atualizados corretamente para visualização da fábrica
BR_PP_600982	Atualizar as informacoes do Vestas para o Kanban Eletronico	ZPPPR_036	/KBN_VESTAS	Em intervalos/ a cada 60 minuto(s)/ iniciando as 00:05 e encerrando as 23:05	/Indicadores PCP_WEN/KANBA_VESTAS_JGS	robertn@weg.net	As informacoes de pendencias nao serao atualizadas
BR_PP_601050	JOB de atualizacao de informacoes para o kanban eletronico de turbinas	ZPPPR_036	/KBN_ELE_1206	Em intervalos/ a cada 120 minuto(s)/ iniciando as 00:01 e encerrando as 23:59	/Indicadores PCP_WEN/KBN_ELE_1206_V1	rogeriohs@weg.net	Nao e atualizado o kanban eletronico de turbinas.
BR_PP_601054	Coletar dados para atualizacao de indicador que e utilizado em reuniao diaria	ZPPPR_036	/ORD. PENDENTE	Em intervalos/ a cada 240 minuto(s)/ iniciando as 00:00 e encerrando as 23:59	/Indicadores PCP_WEN/ACOMPANHAMENTO_GR_PROG_SBC	robertn@weg.net	O indicador ficara desatualizado
BR_PP_601066	Coletar dados de coletores estatores e rotores excitatrizes	ZPPPR_036	/KBN_EXCITATRI	Em intervalos/ a cada 120 minuto(s)/ iniciando as 00:30 e encerrando as 23:30	/Indicadores PCP_WEN/KANBAN_EXCITATRIZES	robertn@weg.net	Dados nao serao atualizados
BR_PS_002200	---	RPSISVG000	/JOB_WEN	Diariamente as cada 6 horas/ das 05:05hs as 18:59hs	/Indicadores PCP_WEN/PROJETOS_CN47N	ivanrl	---
BR_PS_002649	---	RPSISVG000	/JOB_WEN_ENS	Diariamente as 06:17hs	/Indicadores PCP_WEN/PROJETOS_CN47N_OV	josefj@weg.net	---
BR_PS_002826	Job traz todas as tarefas apontadas ou nao de todos os projetos do centro 1206	RPSISVG000	/JOB_WEN_1206	Diariamentes as 01:01 Hrs	/Indicadores PCP_WEN/CN47N_1206	josefj@weg.net	Falha na atualizacao do kanban eletronico de turbinas
BR_PS_002827	Atraso IEA Processos	RPSISVG000	CINTIAE	Diariamentes as 07:12hs	/Indicadores PCP_WEN/RELATORIO_DE_COBRANCA_IEA	cintiae@weg.net	PCP
BR_PS_002828	Tarefas do centro 1206 para atualizacao do kanban eletronico	RPSISVG000	/JOB_WEN_1206	Diariamentes as 06:20 Hrs	/Indicadores PCP_WEN/PROJETOS_CN47N_1206	josefj@weg.net	Nao atualizacao do kanban digital de turbinas
BR_PS_002836	Realizar transacao CN47N para coleta de informacoes de um indicador no qual e realizada uma reuniao diariamente.	RPSISVG000	/PCP_WEN_PLAN	Diariamentes as 03:01 Hrs	/PCP_WEN/CN47N	robertn@weg.net	A reuniao acaba sendo atrapalhada devido a falta de informacoes atualizadas.
BR_PS_002838	Traz os projetos e tarefas que sao externos a WEG JGS para o Kanban eletronico	RPSISVG000	/EXTERNOS	Em intervalos/ a cada 120 minuto(s)/ iniciando as 04:00 e encerrando as 18:00	/Indicadores PCP_WEN/EXTERNOS_PROJETOS_CN47N	josefj@weg.net	PCP
BR_PS_002839	Coletar a informacao da transacao IQS9 para ser utilizada em uma reuniao no comeco da manha.	RIQSMEL2	WM_PCP_INDICAD	Diariamentes as 04:01 Hrs	/PCP_WEN/IQS9	robertn@weg.net	A informacao nao fica atualizada na hora da reuniao no comeco do dia
BR_PS_002841	Atualizar informacao para indicador	RPSISVG000	/PCP_WEN_WSB	Diariamentes as 01:08 Hrs	/PCP_WEN/PROG_WSB_CN47N	robertn@weg.net	O indicador nao e atualizado
BR_PS_002842	Atualizar dados para indicador.	ZPQMR_038	WM_PCP_QM_WSB	Diariamentes as 01:13 Hrs	/PCP_WEN/PROG_WSB_ZTQM046	robertn@weg.net	O indicador fica desatualizado.
BR_PS_002843	Coleta de informacoes para indicador	RIQSMEL2	WM_PCP_SBC_IND	Diariamentes as 01:01 Hrs	/PCP_WEN/PROG_WSB_IQS9	robertn@weg.net	O indicador fica desatualizado
BR_PS_002848	Busca as informacoes do Cliente para o Kanban eletronico	RPSISPE000	/OBRAS_KANBAN	Diariamentes as 12:01 Hrs	/Indicadores PCP_WEN/CLIENTE_PROJETO	josefj@weg.net	Nao atualizar de lista
BR_PS_002850	Atualiza base de dados para indicador PCP em Power BI	PPIO_ENTRY	WEN_ORD_LIBJGS	Diariamentes as 02:01 Hrs	/PCP_WEN/PROG_JGS_COHV	robertn@weg.net	As informacoes do indicador ficam desatualizadas para as reunioes
BR_PS_002854	Lista de materiais pendentes para acompanhamento do PCP	PPCMP000	/PENDENCIA_PCP	Diariamentes as 06:01 Hrs	/Indicadores PCP_WEN/PENDENCIAS_PCP	josefj@weg.net	nao acompanhamento das pendencias
BR_PS_002858	Base de dados para criacao do kanban eletronico da WSB	RPSISVG000	/JOB_WEN_WSB	Em intervalos/ a cada 120 minuto(s)/ iniciando as 03:00 e encerrando as 22:01	/Indicadores PCP_WEN/WSB_PROJETOS_CN47N	josefj@weg.net	nao programacao dos componentes manufaturados da fabrica
BR_PS_002864	Pega maquinas finalizadas no dia anterior	PPIO_ENTRY	/APONT_ONTEM	Diariamentes as 03:01 Hrs	/PCP_WEN/APONTADOS_ONTEM	robertn@weg.net	Os dados para a gerencias nao serao atualizados
BR_PS_002874	Lista de projetos externos	RPSISVG000	/LISTA_EXTERNO	Diariamentes as 05:01 Hrs	/Indicadores PCP_WEN/LISTA_DE_PROJETOS_EXTERNOS	josefj@weg.net	Falha na programacao
BR_PS_002875	Tarefas kanban para atendimento semanal	RPSISVG000	/TURBINAS	Diariamentes as 05:01 Hrs	/Indicadores PCP_WEN/ATENDIMENTO_KANBAN	rogeriohs@weg.net	Nao atualizacao de indicador diario
BR_PS_002882	Busca as datas da montagem para acompanhamento do quadro de compras	RPSISVG000	/INICIO_MONTAG	Diariamente as 05:01hs/ exceto no primeiro dia do mes	/Indicadores PCP_WEN/DATAS_MONTAGEM	josefj@weg.net	Nao atualizacao do quadro
BR_PS_002903	Atualizar projetos que possuem o codigo BE	RPSISVG000	/COMPARAR_BT	Em intervalos/ a cada 120 minuto(s)/ iniciando as 00:00 e encerrando as 23:00	/Indicadores PCP_WEN/CN47N_BE	robertn@weg.net	Os dados nao atualizaram e ira atrapalhar a bobinagem BT
BR_PS_0070_115_D_ATRASO_ENGENH	Relatorio para cobrar atraso da engenharia	RPSISVG000 	/AK0015	Dias uteis as 02:42hs	/Indicadores PCP_WEN/RELATORIO_PARA_COBRAR_ATRASO_DA_ENGENHARIA	cintiae	Nao sera possivel fazer o acompanhamento da performance da ENG
BR_PS_0070_120_M_INDICADOR_PWQP	Indicador PWQP	RPSISVG000 	/AK0027	Segundo dia util as 22:42hs	/Indicadores PCP_WEN/INDICADOR_PWQP	andersonpl@weg.net	Nao sera possivel fazer o indicador ate o quinto dia util de cada mes
BR_PS_0070_132_D_IND_ATD_KANBAN	Indicador KANBAN Diario AK0040	RPSISVG000 	/AK0040	Diariamente as 01:25 hs	/PCP_WEN_Indicadores/BR_PS_0070_132_S_IND_ATD_KANBAN	czeiser	Nao sera possivel fazer o indicador que e diario
BR_PS_0070_133_S_IND_ATD_KANBAN	Indicador KANBAN Diario FC0001	RPSISVG000 	/FC0001	Domingo as 19:43hs	PCP_WEN/Indicador_Kanban_Diario_WSB	czeiser	Nao sera possivel fazer o indicador que e diario
BR_PS_0070_187_D_KANBAN_TURB	Gerar atendimento de kanban do departamento de Turbinas	RPSISVG000 	/KANBAN_TURB	Diariamente as 01:20 hs	/PCP_WEN_Indicadores/Turbinas	czeiser	Nao ira gerar relatorio de atendimentos de kanban
BR_QM_001440	Atualiza base de dados de indicador PCP	ZPQMR_038	WM_PCP_QM	Diariamente as 01:29hs	/PCP_WEN/Relatorio das QM's	robertn	Indicador não atualiza para as reuniões da equipe
BR_QM_002454	JOB para atualizacao de dashboard de maquinas de servicos de SBC	RIQMEL30	MEDIDASBC	Diariamentes as 08:01 Hrs	/PCP_WEN/DASHBOARD	karolinel@weg.net	Falta de atualizacao de dados
BR_QM_0050_001_S_CUSTO_CC_WEM	Informacao horas apontadas para centros de custo produtivo	RKAEP000	/CUSTO_CC_WEM	Domingos as 20:09 hs	/PCP_WEN_Indicadores/	czeiser	Não gerará informação de apontamento de horas para análise
BR_QM_0050_004_S_CUSTO_CC_WEN	Informacao horas apontadas para centros de custo produtivo	RKAEP000	/CUSTO_CC_WEN	Domingos as 22:07	/PCP_WEN/Custo_CC_WEN	czeiser	Não gerará informação de apontamento de horas para análise

`