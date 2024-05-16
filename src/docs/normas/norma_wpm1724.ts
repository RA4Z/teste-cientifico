export const wpm1724 = `
TÉCNICAS WPM-1724 PT
Secao Planejamento da Producao Rev. 02
1. OBJETIVO
Esta norma estabelece o procedimento para ampliar e modificar materiais e listas técnicas para os centros.
2. INSUMOS E FORNECEDORES
ECM - Seção de Engenharia do Produto
Claim ZC e ZR - Seção Vendas
Claim ZZ - Todos os usuários do sistema SAP
3. PROCEDIMENTO
O QUE?	QUEM?	COMO?
Receber Claim e/ou ECM	Projetista PCP - Seção Planejamento da Produção	
Recebendo através do claim e/ou ECM a informação de liberação da Lista técnica do ambiente de engenharia.
Nota: O ECM do dia está no link: Q:/GROUPS/BR_SC_JGS_WM_ENG_PRODUTOS/DEPTO/APOIO SAP/ECM.
Verificar informações descritas no claim e/ou ECM	Projetista PCP - Seção Planejamento da Produção	Verificando informações descritas no claim e/ou ECM.
Identificar o centro pertinente para as listas técnicas	Projetista PCP - Seção Planejamento da Produção	
Para listas técnicas novas, buscando o centro produtivo através de telas do SAP.
Para modificações de lista técnicas, buscando os centros produtivos, onde a lista técnica está válida.
Identificar materiais que devem ser ampliados para os respectivos centros produtivos	Projetista PCP - Seção Planejamento da Produção	Identificando nas listas técnicas novas ou modificadas os materiais que devem ser ampliados para os centros produtivos, através de telas do SAP.
Preencher solicitação de ampliação dos materiais identificados	Projetista PCP - Seção Planejamento da Produção	Preenchendo solicitação de ampliação de material e encaminhando para a Central de cadastro informando material modelo, através de telas do SAP.
Ampliar material	Atendente Central de Cadastro	Através da transação SAP ZTMM022.
Verificar se há diferenças nas listas técnicas	Projetista PCP - Seção Planejamento da Produção	Comparando as listas técnicas do centro produtivo com as listas técnicas do ambiente da engenharia através de telas do SAP.
Criar Claim	Projetista PCP - Seção Planejamento da Produção	Criando Claim e encaminhado para as pessoas responsáveis pela medida.
Verificar Claim	Projetista PCP - Seção Planejamento da Produção	Verificando se as atividades do claim estão para as pessoas responsáveis nos respectivos centros produtivos e ou encaminhando para as mesmas medidas.
Ampliar listas técnicas novas e modificadas para o centro pertinente	Projetista PCP - Seção Planejamento da Produção	Disponibilizando a lista técnica com seus respectivos materiais, através de telas do SAP, informando no claim o centro para o qual as listas foram ampliadas e ou modificadas.
Liberar fluxo Claim	Projetista PCP - Seção Planejamento da Produção	Encaminhando o fluxo do claim para engenharia industrial para execução do roteiro de fabricação, através de telas do SAP.
Executar roteiro de fabricação	Analista - Seção de Engenharia Industrial	Conforme norma TSQ-231.
Receber materiais manufaturados no workflow de materiais	Projetista PCP - Seção Planejamento da Produção	Recebendo os materiais manufaturados no workflow de materiais, com seus respectivos roteiros, através de telas do SAP.
Verificar e corrigir parâmetros de planejamento	Projetista PCP - Seção Planejamento da Produção	Verificando e corrigindo parâmetros de planejamento, através de telas do SAP.
Liberar materiais manufaturados no workflow de materiais	Operador de Computador - Departamento de Sistemas e Informação	Conforme Job Z_EPP_0070_ 010_D_MRP, executado diariamente.
Executar a programação das necessidades - MRP	Operador de Computador - Departamento de Sistemas e Informação	Conforme Job Z_EPP_0070_ 010_D_MRP, executado diariamente.
Identificar o centro pertinente para o kit ou partes de peças	Projetista PCP - Seção Planejamento da Produção	Verificando em qual centro produtivo o kit ou partes de peças será produzido com base nas informações descritas no claim.
Preencher solicitação de cadastro do material do kit ou partes de peças	Projetista PCP - Seção Planejamento da Produção	Encaminhando solicitação de criação de material para a central de cadastro, informando material modelo, características e peso.
Cadastrar material	Atendente Central de Cadastro	Norma central de cadastro. Através da transação SAP ZTMM022.
Criar a lista técnica do kit ou partes de peças	Projetista PCP - Seção Planejamento da Produção	Criando as listas técnicas no centro produtivo com base na informação descrita no Claim, através de telas do SAP.
Concluir o Claim	Projetista PCP - Seção Planejamento da Produção	Informando no Claim o número do material criado para o kit ou partes de peças e concluir a medida.
Liberar o fluxo do Claim	Projetista PCP - Seção Planejamento da Produção	Encaminhando o fluxo do Claim para o solicitante.
Executar a programação das necessidades - MRP	Operador de Computador - Departamento de Sistemas e Informação	Conforme Job Z_EPP_0070_ 010_D_MRP, executado diariamente.
4. RESULTADO DO PROCESSO
Materiais ampliados nos centros com seus respectivos parâmetros do MRP.
Listas técnicas ampliadas e corrigidas conforme informações da engenharia do produto e ou industrial.
5. CLIENTES
Seção de Engenharia Industrial
Seção de Qualidade
Seção de Suprimentos
Seções de Produção
Seção de Vendas
Observações:
O processo de criação de novas listas técnicas e/ou modificação de listas técnicas existentes segue um fluxo específico, com etapas definidas e responsáveis por cada atividade.
As listas técnicas são essenciais para o controle e organização da produção, garantindo que os materiais necessários estejam disponíveis no local e momento certos.
A utilização do sistema SAP é fundamental para o processo de ampliação e modificação de materiais e listas técnicas, permitindo a gestão eficiente e integrada das informações.
Os Jobs Z_EPP_0070_ 010_D_MRP são utilizados para automatizar a programação das necessidades (MRP), agilizando o processo e garantindo a atualização constante das informações.
Recomendações:
Manter a atualização constante das listas técnicas, garantindo a precisão das informações e evitando falhas no processo produtivo.
Treinar os usuários do sistema SAP sobre as funcionalidades e procedimentos para o processo de ampliação e modificação de materiais e listas técnicas.
Monitorar o desempenho do processo, identificando possíveis gargalos e buscando soluções para otimizar o fluxo de trabalho.
Assegurar que todos os departamentos envolvidos no processo estejam cientes das normas e procedimentos, garantindo a qualidade e eficiência da gestão da produção.
Glossário:
ECM: Engenharia de Controle de Mudanças
MRP: Material Requirements Planning (Planejamento das Necessidades de Materiais)
Claim: Solicitação formal de mudança
SAP: Sistema de Planejamento de Recursos Empresariais
Job: Tarefa automatizada no sistema SAP
Referências:
Norma TSQ-231
Job Z_EPP_0070_ 010_D_MRP
Transação SAP ZTMM022
`