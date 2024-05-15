export const wpm22685 = `
PLANEJAR E CONTROLAR PRODUÇÃO – WEN WPM-22685 PT
Seção Programação e Controle; Seção Planejamento da Produção
Rev. 03
1. Objetivo
Estabelecer o procedimento para planejamento, programação e controle de produção.
2. Fluxo
[Diagrama do fluxo faltando no PDF, mas contém a sequência: Entrada da Atividade > Analisar e Planejar Demandas > Implantar Fechamento da Programação > Executar Programação Diária > Gerenciar Ordens > Alguma Modificação ou Atraso? > Providenciar Ações > Fechar Ordens > Saída da Atividade]
3. Procedimento
3.1. Entrada da Atividade
Entrada da Atividade Máquinas carcaça >355 Alternadores Eólico Turbinas KIT SBC Serviços SBC
Entrada	Máquinas	Carcaça >355	Alternadores	Eólico	Turbinas	KIT SBC	Serviços SBC
Claim ZC – Projetar Produto	X	X	X	X			
Claim ZO – Consulta técnica	X	X					
Medida CS - Serviços	X						
Claim de KIT de partes e peças					X		
Ordens de venda (OV) implantadas pelos departamentos de Vendas	X						X
Pedidos de compra (PC) implantados pelas filiais WEG;	X						
E-mail com prioridades e diferenciação de graus	X						
Solicitação das filiais via e-mail	X						
Entrada da Atividade Serviços TRB
Entrada	Nordex	Vestas	Serviços SZO	Turbinas a vapor	Redutores	Dispositivos
Claim ZC – Projetar produto	X	X	X	X		
Claim ZZ – Consulta de outras áreas	X	X	X			
Claim ZR – Consulta de modificações de OV (Quando da necessidade de programar acoplamento para redutores)			X			
Claim ZO – Consulta técnica	X	X	X			
Medida CS - serviços	X	X				
Ordens de venda (OV) implantadas pelos departamentos de Vendas	X	X	X	X		
Pedidos de compra (PC) implantados pelas filiais WEG;	X	X	X			
E-mail com prioridades e diferenciação de graus	X					
Solicitação das filiais via e-mail	X	X	X			
LEGENDA:
Símbolo	Descrição
ENTRADAS E SAÍDAS	Documentos
R	Registros
TAREFAS	
RISCO	
D	Decisão
RD	Regra de Decisão
3.2. Analisar e Planejar Demandas
3.2.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Planejador Mestre da área de Planejamento da Produção.
3.2.2. Critérios
Critérios Máquinas carcaça >355 Alternadores Eólico Turbinas KIT SBC Serviços SBC
Critérios	Máquinas	Carcaça >355	Alternadores	Eólico	Turbinas	KIT SBC	Serviços SBC
Análise carga de fábrica. Notas: 1) Comunicar vendas/gestão de projetos que o prazo solicitado não será atendido pois excede carga de fábrica. (produto novo/serviço). 2) Quando do planejamento de KITs planeja-se conforme disponibilidade de fábrica.	X	X	X	X			
Verificação de materiais especiais.	X	X	X	X			
Cálculo de tempo de engenharia. Nota: Não havendo capacidade fabril, realizar cotação/compra de dispositivo para fabricação externa.	X		X				
Capacidade por cotas. Nota: Excede: comunicar vendas que o prazo solicitado não será atendido	X						
Verificar prazo dos componentes Nota: Comunicar vendas/gestão de projetos que o prazo solicitado não será atendido pois o prazo do componente excede o prazo da OV (serviço).	X	X					
Material com lista técnica Nota: Não havendo lista técnica liberada encaminhar material para engenharia do produto	X	X	X				
Critérios Serviços TRB
Critérios	Nordex	Vestas	Serviços SZO	Turbinas a vapor	Redutores	Dispositivos
Análise carga de fábrica. Notas: 1) Comunicar vendas/gestão de projetos que o prazo solicitado não será atendido pois excede carga de fábrica. (produto novo/serviço). 2) Quando do planejamento de KITs planeja-se conforme disponibilidade de fábrica.	X	X	X	X	X	X
Verificação de materiais especiais.	X	X	X	X		
Cálculo de tempo de engenharia. Nota: Não havendo capacidade fabril, realizar cotação/compra de dispositivo para fabricação externa.	X	X	X	X		
Cálculo de tempo de engenharia IEA. Nota: Não havendo carga fabril, realizar cotação/compra de dispositivo para fabricação externa	X					
Verificar prazo dos componentes Nota: Comunicar vendas/gestão de projetos que o prazo solicitado não será atendido pois o prazo do componente excede o prazo da OV (serviço).	X	X	X			
Material com lista técnica Nota: Não havendo lista técnica liberada encaminhar material para engenharia do produto	X	X	X	X		
3.3. Implantar Fechamento da Programação
3.3.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Programador da Produção da área de Planejamento da Produção da fábrica de Alternadores.
3.3.2. Critérios
Demanda semanal total;
Programação diária na semana de fechamento conforme Planilha de distribuição;
Programação diária na semana de fechamento para máquinas de graus maiores.
Nota: O fechamento da programação se aplica somente para a fábrica de Alternadores.
3.3.3. Controle de Registros
Identificação do Registro	Tipo	Restrição de Acesso	Tempo de Retenção	Repositório/Recuperação
Fechamento da produção		Usuário com login	Conforme WPR-7703	
3.4. Executar Programação Diária
3.4.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Programador da área de Planejamento da Produção.
3.4.2. Critérios
Critérios	Ação de mitigação / Notas
Calendário de fábrica atualizado	
Workflow concluído	
Geração de ordens planejadas via MRP	
Roteiros liberados	
Carga de máquina disponível (recurso crítico)	Processos avisa com antecedência o programador kanban quando um recurso crítico entrará em produção.
Isento de mensagem de exceção	Verificar data e quantidade da ordem planejada e da necessidade
Planejamento de manutenções preventivas /preditivas	Analisar a disponibilidade no período solicitado, alternativas e informar previsão de data para disponibilização do equipamento à área de manutenção
Cadastro de área MRP onde necessário	
Material comprado faltante	Abertura de claim de material faltante conforme WPR-46350
Encerramento técnico	Analisar as pendências e solicitar tratativas das áreas
3.4.3. Controle de Registros
Identificação do Registro	Tipo	Restrição de Acesso	Tempo de Retenção	Repositório/ Recuperação
Ordem de Produção		Usuário com login	Conforme WPR-7703	
3.4.4. Controle de Documentos
Identificação de Documento	Quem Aprova o Documento	Critérios para Aprovação	Situação de Controle e Disponibilização do Documento	Tipo de Restrição de Acesso
Ordem de Produção	Planejador e Programador	Conforme item “executar programação diária”	a) Cópia Original: Documento eletrônico: conforme WPR-7703; Documento impresso: arquivado durante o período mínimo de 1 semana. b) Cópia Controlada: Imprimindo as cópias conforme listagem recebida pelo sistema, e distribuindo as ordens de produção Nota: nos casos de inclusão ou refugo a ordem de produção é impressa pelo apontador c) Cópia Não-Controlada: Não se aplica. d) Cópias Obsoletas: As revisões anteriores são imediatamente substituídas e eliminadas e a revisão atual é mantida até a conclusão da produção da peça.	Eletrônico: Usuário com login Físico: PCP
3.5. Gerenciar Ordens
3.5.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Programador e Apontador da área de Programação e Controle da Produção.
3.5.2. Critérios
Ordens liberadas e impressas.
Nota: Separar conforme orientação de cada departamento e entregar na produção
3.5.3. Controle de Registros
Identificação do Registro	Tipo	Restrição de Acesso	Tempo de Retenção	Repositório/ Recuperação
Ordem de Produção		Usuário com login	Conforme WPR-7703	
Relatórios de produção		Gestores e Técnicos	Semanal	Eliminado a cópia física.
3.6. Alguma Modificação ou Atraso?
3.6.1. Papéis e responsabilidades
Esta tarefa é realizada pelos Programadores da área de Programação e Controle da Produção.
3.6.2. Critérios
Critérios	Nota
Relatório de ordens em atraso	Gerar relatório e solicitar o preenchimento do motivo do atraso e data prevista de entrega
Modificação em ordem liberada	
3.7. Providenciar Ações
3.7.1. Papéis e responsabilidades
Esta tarefa é realizada pelo programador e apontador.
3.7.2. Critérios
Critérios	Notas
Refugo ou retrabalho	Refugo: Criar ordem QM e apropriar o custo contra a ordem do material (onde o mesmo está sendo utilizado) Retrabalho: Técnicos apontam as horas na QM RP: desmontagem de KITs
Modificações em ordens liberadas	Executar a modificação no sistema e fisicamente na fábrica para as ordens já impressas.
Nota: Nas unidades onde a metodologia BiQ está implementada os motivos de atraso são registrados conforme critérios definidos na WPR-49317.
3.8. Fechar Ordens
3.8.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Apontador (JGS/SBC/SZO), Programador (SBC/SZO) ou, Expedidor (JGS) da área de Programação e Controle da Produção.
3.8.2. Critérios
Itens transferidos no sistema (transferência entre depósitos e transferência entre centros).
Apontar ordens finalizadas conforme informação da fábrica.
Baixa de materiais (CO27)
Encerramento técnico sem operações pendentes de apontamento e consumo de matéria prima.
Nota: caso seja identificado pendências no encerramento técnico estas devem ser mapeadas e resolvidas com as áreas geradoras, preferencialmente antes da virada do mês de forma a evitar impacto em custos.
3.9. Saída da Atividade
Plano mestre de produção realizado
Calendário de fábrica ajustados;
Necessidades de produção agrupadas e produção otimizada;
Ordens de produção abertas, liberadas e impressas;
Ocupação das máquinas dentro da capacidade diária.
Situação da produção avaliada e publicada;
Ordens de produção apontadas;
Refugos e retrabalhos apontados e registrados;
Materiais transferidos para os depósitos de consumo.
4. Indicadores
4.1.1. Papéis e responsabilidades
Esta tarefa é de responsabilidade do gestor da área de Planejamento e Controle da Produção.
Indicador	Periodicidade
Acompanhamento ao Kanban – JGS/SBC	Diário
Acompanhamento das montagens – JGS/ SBC	Diário
Lista de materiais pendentes - JGS	Diário
Prazos para controle PCP - JGS	Semanal
Atendimento das OVS – JGS /SBC	Semanal
Fechamento das montagens - JGS	Semanal
Tabela Engenharia - JGS	Semanal
Atendimento Semanal Indicador Kanban - JGS	Semanal
CRP – (JGS. WSB, WII e WEM)	Semanal
OVs em aberto - JGS	Mensal
Fechamento dos Kanbans mensais – JGS/TRB/SBC	Mensal
Produtividade – JGS/SBC/WII/WEM/SZO	Mensal
Atendimento das OVs – JGS/SBC/WII/WEM/SZO	Mensal
Ordem de produção em atraso – JGS/SBC/WII	Mensal
SFM - JGS	Mensal
Horas Extras - JGS	Mensal
Ordens de Produção – prazo e dias de atraso – JGS	Mensal
Ordens de venda – prazo e dias de atraso – JGS	Mensal
Global ID Efficiency – JGS	Mensal
Indicadores de SZO
Indicador	Periodicidade
Ecm's abertos	Diário
Materiais criados 1212/1214/1215	Diário
Workflow 1212/1214/1215	Diário
Horas atraso engenharia 1212/1214/1215	Diário
Tarefas em atraso engenharia 1212/1214/1215	Diário
Tarefas em atraso Engenharia Industrial 1212/1214/1215	Diário
Tarefas em atraso PCP 1212/1214/1215	Diário
Horas atraso fábrica 1212/1214/1215	Diário
Ordens em atraso 1212/1214/1215	Diário
Ordens vencidas para liberar 1212/1214/1215	Diário
Mensagens cancelamento (estorno) 1212/1214/1215	Diário
Mensagens excesso de estoque 1212/1214/1215	Diário
Mensagens antecipação 1212/1214/1215	Diário
Mensagens postergação 1212/1214/1215	Diário
Requisições em aberto 1212/1214/1215	Diário
Liberação de ordens de produção dentro do prazo (if)	Mensal
Quantidade de workflow processado em até 2 dias	Mensal
Atendimento do prazo de entrega materiais FERT 1212 e 1214 (if)	Mensal
Atendimento das ordens de produção (inf)	Mensal
Tarefas do PCP no PS entregues no prazo (inf)	Mensal
Medidas/claims respondidas dentro do prazo (inf)	Mensal
Quantidade de ordens de produção impressas em até 2 dias	Mensal
Ordens de produção em atraso	Mensal
`