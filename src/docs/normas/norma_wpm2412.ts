export const wpm2412 = `
WPM-2412 - Modificar Ordem de Venda e Compras
PT Secao Planejamento da Producao , Secao Programacao e Controle Rev. 03
1. OBJETIVO
Esta Norma estabelece o procedimento para Modificação de Ordem de Venda, Pedido de compra e Produto.
2. DEFINIÇÕES
2.1. Modificação Comercial: Solicitação de modificação em datas, quantidades ou alteração comercial do documento de vendas. As modificações são: antecipação, postergação, cancelamento, inclusão, alocação, alteração do tipo de frete, inconterms entre outros.
2.2. Modificação Técnica: Solicitação de modificação do produto. Nesta alteração a estrutura do produto é alterada, podendo impactar na alteração de lista técnica, roteiros e demais documentos da engenharia.
2.3. RP (Requisição de Produto): Solicitação de modificação de produtos acabados em estoque. Essas modificações podem ser para retrabalho de uma peça danificada, transformação de um produto em outro ou segregação de material para ensaio ou inspeção. Na execução da programação no SAP, a RP é a programação de uma Ordem de Produção de Retrabalho para um material já em estoque. As operações do roteiro e a lista de materiais da ordem de RP indicam quais as atividades a serem realizadas nas peças e os materiais que serão consumidos na ordem.
3. FLUXO
[Diagrama de Fluxo com entradas, saídas, tarefas, riscos e decisões]
4. PROCEDIMENTO
4.1. ENTRADA DA ATIVIDADE
Solicitação de modificação comercial ou técnica enviada via Claim (Vendas, Gestão de Projetos, Engenharia);
Solicitação de modificação técnica via ECM (Engenharia) ou PCR (JGS);
Solicitação de modificação técnica enviada via e-mail para RP (Reaproveitamento).
4.2. ANALISAR MODIFICAÇÃO
4.2.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Planejador Mestre da área de Planejamento da Produção.
4.2.2. Critérios
Tipo de Modificação (Comercial ou Técnica);
Documentos alterados;
Semana de planejamento dos materiais;
Ordens de Vendas/Pedidos impactados;
Motivo da solicitação;
Situação da produção dos componentes e itens finais;
Centros onde o material está ampliado;
Itens de estoque a serem modificados;
Aprovação da modificação.
Nota: Materiais previamente analisados pelas áreas:
Materiais comprados: Suprimentos e/ou Engenharia de Produto.
Materiais manufaturados: PCP, Engenharia de Produto e/ou Engenharia Industrial.
Produtos acabados: Vendas, PCP e/ou Engenharia de Produto.
4.2.3. Controle de Registros
Identificação do Registro	Tipo de Restrição de Acesso	Tempo de Retenção	Repositório/ Recuperação
Claim e ECM com a solicitação de modificação e registro da análise de modificação	Usuário com Login e Senha	Conforme WPR-7703	SAP/Servidor
Informativo da ata do Grupo de Estoque/Comissão específica da Unidade/Diretoria contendo a aprovação do sucateamento	Usuário com Login e Senha	5 anos	Pasta de Rede / Com Back-up
4.3. EXECUTAR A MODIFICAÇÃO NO SISTEMA
4.3.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Planejador Mestre da área de Planejamento da Produção.
4.3.2. Critérios
Refazer planejamento semanal;
Alterar agrupador do material (validar centros expandidos);
Bloquear ordem de produção quando não puder ser consumido materiais na mesma, ou apontado a ordem no estoque.
Nota: Solicitar aprovação de sucateamento para materiais sem necessidade futura e enviar estes materiais para depósitos de reaproveitamento (BA01) ou manter no depósito da área.
4.4. ENCAMINHAR SOLICITAÇÃO PARA AS ÁREAS ENVOLVIDAS
4.4.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Planejador Mestre da área de Planejamento da Produção.
4.4.2. Critérios
Avaliação da situação da lista técnica;
Áreas responsáveis para fabricação dos novos componentes.
4.4.3. Controle de Registros
Identificação do Registro	Tipo de Restrição de Acesso	Tempo de Retenção	Repositório/ Recuperação
E-mail de comunicação	Usuário com login	5 anos	Exchange / Servidor
4.5. EXECUTAR E ACOMPANHAR MODIFICAÇÃO NA PRODUÇÃO
4.5.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Planejador Mestre da área de Planejamento da Produção.
4.5.2. Critérios
Alteração a ser realizada;
Motivo da alteração (código de causa);
Número da solicitação (PCR, ECM, Claim), informar via e-mail;
Ordens de produção impactadas;
Atualizar ordens de produção;
Distribuir ordens atualizadas.
4.5.3. Controle de Documentos
Identificação de Documento	Quem Aprova o Documento	Critérios para Aprovação	Situação de Controle e Disponibilização do Documento	Tipo de Restrição de Acesso
Ordem de Produção	Programador e Apontador	Conforme plano mestre de produção	- Original: Sistema SAP Nota: nos casos de inclusão ou refugo reimprimir. - Cópia Não Controlada: Não se aplica. - Cópia Controlada: Distribuída para os respectivos centros de trabalho. - Cópias obsoletas: As revisões anteriores são imediatamente substituídas e eliminadas e, a atual é mantida até a conclusão da produção da peça e em seguida a mesma é descartada.	Usuário com acesso ao sistema
Desenho		Conforme WPM-2543	- Original: Sistema SAP - Cópia Não Controlada: Não se aplica. - Cópia Controlada: * Imprimindo as cópias conforme necessidade na ordem de produção Nota: Desenhos no tamanho A4 e A3 podem vir impressos automaticamente no verso na nota de operação. * Cópia impressa com carimbo da área de PCP segue para a área produtiva acompanhando ordem de produção. Nota: Na eventualidade de uso deve ser solicitado a reimpressão do desenho. - Cópias obsoletas: Devem ser descartados	Usuário com acesso ao sistema / CV04N
4.6. ALGUM ESTOQUE A SER MODIFICADO? (Sim)
4.6.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Programador da área de Planejamento da Produção.
4.6.2. Critérios
Solicitação de alteração de estoque;
Modificação a ser realizada.
4.7. PROVIDENCIAR RP
4.7.1. Papéis e responsabilidades
Esta tarefa é realizada pelo Programador da área de Planejamento da Produção.
4.7.2. Critérios
Critérios	Alteração por solicitação do cliente	Alteração por erro interno
Data da ordem de RP definida	Criar conforme a data possível para produção ou compra dos componentes modificados	-
Data da OV / PC alteradas	Alterar conforme data da RP criada	Não alterar
Planejador da RP	1) Planejador original do material	
Nota 1): Produtos que são recuperados em locais diferentes do produtivo (exemplo: Produção em JGS e RP em SBC), devem ser criadas no planejador 399 destinado para controle do PCP, que não contabilizam na meta de atendimento da Fábrica.
4.7.3. Controle de Registros
Identificação do Registro	Tipo de Restrição de Acesso	Tempo de Retenção	Repositório/ Recuperação
Ordem de Venda confirmada	Usuário com acesso ao sistema	Permanente	SAP / Servidor
4.7.4. Controle de Documentos
Identificação de Documento	Quem Aprova o Documento	Critérios para Aprovação	Situação de Controle e Disponibilização do Documento	Tipo de Restrição de Acesso
Ordem de Produção	Planejador e Programador	Conforme item “executar programação diária”	- Cópia Original: Documento eletrônico: conforme WPR-7703; Documento impresso: arquivado durante o período mínimo de 1 semana. - Cópia Controlada: Imprimindo as cópias conforme listagem recebida pelo sistema, e distribuindo as ordens de produção Nota: nos casos de inclusão ou refugo a ordem de produção é impressa pelo apontador. - Cópia Não-Controlada: Não se aplica. - Cópias Obsoletas: As revisões anteriores são imediatamente substituídas e eliminadas e a revisão atual é mantida até a conclusão da produção da peça.	Eletrônico: Usuário com login Físico: PCP
4.8. SAÍDA DA ATIVIDADE
Modificação realizada;
Número da RP criada;
Material sucateado;
Material disponível para produção;
Documentação atualizada na fábrica.
`