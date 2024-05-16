export const procedures = `
Manual de Procedimentos PCP
1. Objetivo: Estabelece o procedimento do inventário cíclico de produtos acabados na expedição de alternadores da WM.
2. Generalidades
2.1. Inventário Cíclico:
**2.1.1.** É um processo de auditoria que verifica a acurácia do estoque. A periodicidade da contagem dos materiais é definida pela classificação ABC, que usa os critérios de valor de utilização e/ou necessidades derivadas do MRP para definir a quantidade de contagens, conforme a tabela:

  **2.1.2.** Principais partes do coletor de dados:
3. DEFINIÇÕES
Coletor de dados: Equipamento usado em sistemas de WMS (Warehouse Management System) para ler o código de barras dos materiais e executar atividades no depósito.
Documento de inventário: Registro da contagem de materiais e posições, considerando a rotatividade do material no depósito. O critério para classificação de rotatividade é a curva ABC.
Unidade de Depósito (UD): Unidade agrupadora de itens (pallet, caixa ou grade). Possui etiqueta de identificação, associando cada item à etiqueta da UD.
Lost&Found: "Achados e perdidos". Depósito (999) para onde são transferidas as divergências encontradas na contagem do estoque.
3.1. Estoque Alternadores
**3.1.1. Atualizar classificação dos materiais:**

     **3.1.1.1.** Entrar na transação MIBC e preencher as informações na capa da transação:

        * Centro: 1200.
        * Tipo de material: FERT.
        * Marcar os campos:
           * Todos os produtos de depósito;
           * Consumos;
           * Considerar consumo de material das áreas MRP;
           * Atualizar sem lista.
     **Nota:** Atualizar a transação MIBC a cada três meses.

  **3.1.2. Criar documento de inventário rotativo:**

     **3.1.2.1.** Entrar na transação LX26 e preencher os campos:

     **3.1.2.2.** Clicar em "Ativar documento", conforme a imagem:

     **3.1.2.3.** Verificar a mensagem com o número do inventário criado.

  **3.1.3. Iniciar contagem do inventário rotativo:**

     **3.1.3.1.** Usar o coletor de dados para a contagem do inventário, conectando-se a ele com usuário e senha e pressionando ENTER.

     **3.1.3.2.** Clicar em "PROCES.INTERNOS" ou digitar "3" no campo "Sel." e teclar ENTER.

     **3.1.3.3.** Clicar em "Inventário" ou digitar "3" no campo "Sel." e teclar ENTER.

     **3.1.3.4.** Verificar as informações na tela do coletor e teclar ENTER.

     **3.1.3.5.** Bipar com o coletor na UD do pacote da posição indicada.

     **3.1.3.6.** Bipar com o coletor o código bidimensional da etiqueta do motor.

     **3.1.3.7.** Digitar a quantidade de motores encontrados no pallet e teclar ENTER.

     **3.1.3.8.** Verificar a mensagem na tela do coletor e pressionar "OK".

     **3.1.3.9.** Verificar na tela do coletor se retornou para a última contagem e pressionar "F7 RePo".
   
     **3.1.3.10.** Na nova janela, verificar a mensagem e clicar em "OK" para retornar à tela inicial.

  **3.1.4. Identificar divergências:**

     **3.1.4.1.** Entrar na transação LX03, preencher o nº do depósito (310), o tipo do depósito (999) e selecionar "Só posições com estoque".

     **3.1.4.2.** Verificar divergência no estoque.

     **Notas:**
        * Materiais em LOST&FOUND negativo: Mais motores no físico do que no sistema.
        * Materiais em LOST&FOUND positivo: Menos motores no físico do que no sistema.

     **3.1.4.3.** Recontar o estoque para confirmar a divergência e, em caso de furo de estoque, solicitar inventário conforme WPS-30326.

  **3.1.5. Exibir documento de inventário:**

     **3.1.5.1.** Entrar na transação LX22, preencher o nº do depósito, o nº do documento de inventário e pressionar Enter. Clicar no documento exibido.

     **3.1.5.2.** Verificar o histórico do documento de inventário.

     **Nota:** Identifica a data da contagem, posições verificadas e status da contagem. Para ver os itens contados, seguir para o próximo passo.

  **3.1.6. Exibir itens do documento de inventário:**

     **3.1.6.1.** Acessar a transação LI13N, preencher o número do depósito e o documento de inventário e pressionar Enter.

     **3.1.6.2.** Verificar itens contados.

     **Nota:** Mostra os itens, a posição do depósito e o usuário que fez a contagem.

  **3.1.7. Exibir percentual de itens contados no depósito:**

     **3.1.7.1.** Acessar a transação LX25 e preencher os campos:

        * Nº do depósito;
        * Tipo do depósito;
        * Período do inventário (do primeiro dia do ano até a data do último inventário).

     **3.1.7.2.** Executar a transação para ver a quantidade de material contado no período.

  **3.1.8. Salvar a contagem em planilha de Excel e enviar para aprovação:**

     **3.1.8.1.** Com os procedimentos dos tópicos 3.1.6 e 3.1.7, preencher a tabela de Excel:

        * Nº Depósito;
        * Nº do documento de inventário;
        * Data da contagem;
        * Quantidade de itens verificados;
        * Quantidade de itens encontrados;
        * Nome do responsável pela contagem.

     **PRENCHER INFORMAÇÕES NA PLANILHA NO LINK ABAIXO:**

     Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Francisco/Exp

     **Notas:**

        * Contar 50 itens por semana.

     **3.1.8.2.** Após preencher a planilha, enviar um e-mail para o gerente e o gestor do departamento de Programação e Controle de Produção, informando o nº do documento de inventário, a data da contagem, a quantidade verificada e encontrada, o nome do responsável e o percentual de itens contados (tópico 3.1.7).

3.2. Estoque da expedição da Baixa, Média e Alta Tensão
**3.2.1. Acessar a transação MB52 e preencher:**

     * Centro: 1200;
     * Depósito;
     * Layout: /EXP-WEN;
     * Manter os campos selecionados:
        * Sel. também estoque especiais;
        * Exibir estoques de lotes;
        * Sem linhas estoque zero;
        * Representação não hierárquica.
     **Nota:** O campo "depósito" pode ser preenchido com um ou mais depósitos. O depósito deve estar ligado à área a ser verificada.

  **3.2.2. Clicar em "programa" e em "executar em background".**
  **3.2.3. Digitar "EMAIL-TXT" no campo "Disposit.saída" e teclar ENTER. Informar o e-mail do usuário que receberá a informação na caixa de diálogo. Clicar em "OK".**
  **3.2.4. Clicar em "Imed.", "Verificar" e "Gravar".**
     **Nota:** Um relatório em formato TXT será enviado para o e-mail informado no item 3.2.3. Seguir os passos abaixo.

  **3.2.5. Verificar o e-mail recebido e salvar o anexo na área de trabalho.**
  **3.2.6. Abrir uma nova pasta de trabalho do Excel e clicar em "Dados" e "De texto".**
  **3.2.7. Selecionar a área de trabalho na nova janela e clicar duas vezes no arquivo recebido.**
  **3.2.8. Clicar em "Delimitado" e em "avançar" na nova janela.**
  **3.2.9. Selecionar "Outros" e digitar "|" (shift + /) na caixa de texto. Clicar em "Avançar" e em "Concluir".**
  **3.2.10. Verificar se a célula selecionada é o local desejado para os dados. Se não, clicar no botão de seleção, na célula desejada, novamente no botão de seleção e em "OK".**
  **3.2.11. Ajustar a planilha para facilitar o entendimento.**

  ****

  **Planilha gerada:**

  **Planilha ajustada:**

  **3.2.12. Realizar a contagem do estoque e comunicar ao gestor da equipe de expedição qualquer divergência entre o estoque do sistema e o físico.**

  **Nota:** Em caso de falta ou sobra de materiais, realizar o inventário conforme WPS-30326.

  **3.2.13. Identificar divergências:**

     **3.2.13.1.** Entrar na transação LX03, preencher o nº do depósito (310), o tipo do depósito (999) e selecionar "Só posições com estoque".

     **3.2.13.2.** Verificar divergência no estoque.

     **Notas:**
        * Materiais em LOST&FOUND negativo: Mais motores no físico do que no sistema.
        * Materiais em LOST&FOUND positivo: Menos motores no físico do que no sistema.

     **3.2.13.3.** Recontar o estoque para confirmar a divergência e, em caso de furo de estoque, solicitar inventário conforme WPS-30326.

  **3.2.14. Exibir documento de inventário:**

     **3.2.14.1.** Entrar na transação LX22, preencher o nº do depósito, o nº do documento de inventário e pressionar Enter. Clicar no documento exibido.

     **3.2.14.2.** Verificar o histórico do documento de inventário.

     **Nota:** Identifica a data da contagem, posições verificadas e status da contagem. Para ver os itens contados, seguir para o próximo passo.

  **3.2.15. Exibir itens do documento de inventário:**

     **3.2.15.1.** Acessar a transação LI13N, preencher o número do depósito e o documento de inventário e pressionar Enter.

     **3.2.15.2.** Verificar itens contados.

     **Nota:** Mostra os itens, a posição do depósito e o usuário que fez a contagem.

  **3.2.16. Exibir percentual de itens contados no depósito:**

     **3.2.16.1.** Acessar a transação LX25 e preencher os campos:

        * Nº do depósito;
        * Tipo do depósito;
        * Período do inventário (do primeiro dia do ano até a data do último inventário).

     **3.2.16.2.** Executar a transação para ver a quantidade de material contado no período.

  **3.2.17. Salvar a contagem em planilha de Excel e enviar para aprovação:**

     **3.2.17.1.** Com os procedimentos dos tópicos 3.2.15 e 3.2.16, preencher a tabela de Excel:

        * Nº Depósito;
        * Nº do documento de inventário;
        * Data da contagem;
        * Quantidade de itens verificados;
        * Quantidade de itens encontrados;
        * Nome do responsável pela contagem.

   

     **Notas:**

        * Armazenar a planilha no sistema conforme WPM-2642.
        * Contar 50 itens por semana.

     **3.2.17.2.** Após preencher a planilha, enviar um e-mail para o gerente e o gestor do departamento de Programação e Controle de Produção, informando o nº do documento de inventário, a data da contagem, a quantidade verificada e encontrada, o nome do responsável e o percentual de itens contados (tópico 3.2.16). Seguir a norma WPM-2626.

   

     **Nota:** Armazenar o e-mail na rede conforme WPM-2642.

3.3. Procedimento via terminal (computador)
3.3.1. Acessar a transação LI01N, preencher o campo "Nº do depósito", "Tipo de depósito" e pressionar Enter.

3.3.2. Entrar com o código da posição a ser inventariada, pressionar Enter, clicar em "Ativar" para ativar o inventário e anotar o número do documento criado.

Nota: Em caso de erro, verificar se a posição existe no sistema, se possui OT em andamento ou se está bloqueada. Modificar o documento na transação LI02N, se necessário.
3.3.3. Acessar a transação LI11N, inserir o número do inventário e pressionar Enter.

3.3.3.1. Posições sem nenhum material cadastrado:
* Incluir o material, lote (se necessário), centro, quantidade identificada no físico, UD e pressionar Enter.
  * Preencher "Depósito", "Data EM" e pressionar Enter.
  * Pressionar Enter na mensagem.
  * Clicar em "gravar".
3.3.3.2. Posições com materiais já cadastrados:
* Incluir item novo (antes de preencher a quantidade dos demais).
  * Inserir a posição, material, centro, quantidade contada, número da UD e pressionar Enter.
  * Preencher "Depósito" e "Data EM" e pressionar Enter.
  * Pressionar Enter na mensagem.
  * Clicar em "Síntese".
  * Preencher as quantidades de cada material ou selecionar "estoque nulo" (quantidade zero) e gravar.
  * Pressionar Enter para os materiais com quantidade modificada.
Nota: Modificar a quantidade gravada na LI11N através da LI12N.

3.3.4. Acessar a transação LI20, inserir o nº do depósito, o nº do documento de inventário e clicar em Enter.

3.3.5. (passo não descrito no texto)
3.3.6. Marcar a posição a ser ajustada e clicar em "Retificar" para ajustar a posição e efetuar o ajuste contábil da diferença.
3.3.6.1. Posições com apenas um material cadastrado:
* Gravar.
3.3.6.2. Posições com vários materiais cadastrados:
* Selecionar a linha da posição e clicar em "Retificar".
3.3.7. Efetuar a baixa em MM na transação LI21, preenchendo o nº do depósito, o tipo de depósito "999", o layout /INVENT.WNMO e executando.

3.3.8. Marcar a linha do material desejado e clicar em "Retificar".

Nota: Se o valor ultrapassar a alçada do usuário, enviar um e-mail com o número do documento de inventário para o chefe ou gerente executar o documento. O mesmo deve responder o e-mail com "OK" (executado) ou rejeitar o documento (eliminar via LI02N).
Após o inventário, enviar um e-mail para o grupo de estoque de cada unidade e para o chefe e gerente responsáveis pelo depósito, conforme exemplo.

3.4. Procedimento via coletor de dados
3.4.1. Acessar a transação LI01N no computador, preencher "Nº do depósito", "Tipo de depósito" e pressionar Enter.

3.4.2. Entrar com o código da posição, pressionar Enter, clicar em "Ativar" para ativar o inventário e anotar o número do documento.

Nota: Em caso de erro, verificar se a posição existe no sistema, se possui OT em andamento ou se está bloqueada. Modificar o documento na transação LI02N, se necessário.
3.4.3. No coletor de dados, selecionar "3.PROCES.INTERN. >" e pressionar Enter, em seguida selecionar "3.INVENTÁRIO ...".

3.4.4. Pressionar Enter para inserir os dados da contagem.

3.4.5. Ler o código de barras do pallet (UD).

3.4.6. Ler o código de barras da etiqueta do material.

3.4.7. Para materiais administrados por lote, cadastrar o número do lote, a quantidade e pressionar Enter.

3.4.8. Após contar todos os materiais da posição, a mensagem "Último registro alcançado" aparecerá. Pressionar Enter e "F7".

3.4.9. Pressionar Enter.

3.4.10. Efetuar a baixa em MM na transação LI21, preenchendo o nº do depósito, o tipo de depósito "999", o Layout /INVENT.WNMO e executando.

3.4.11. Selecionar a linha do material e clicar em "Retificar".

Após o inventário, enviar um e-mail para o grupo de estoque de cada unidade e para o chefe e gerente responsáveis pelo depósito, conforme exemplo.

4. Objetivo: Estabelecer o procedimento para enviar materiais para o depósito de reaproveitamento (BA01).
5. CONDIÇÕES NECESSÁRIAS
5.1. Documentos complementares:
* WPS-23796 – Controlar Produção;
  * WPS-6189 - Disposição de Resíduos Industriais Parque Fabril II;
  * WPS-29579 – Uso de equipamentos de proteção individual da seção de Programação e Controle.

5.2. SISTEMA E SOFTWARES:
* SAP – ECC – SBWP;
  * SAP – ECC – CC03;
  * SAP – ECC – MMSC;
  * SAP – ECC – QM01;
  * SAP – ECC – IQS22;
  * SAP – ECC – ZTQM004;
  * SAP – ECC – MB21;
  * SAP – ECC – MMBE.

6. PROCEDIMENTO
6.1. Cadastrando depósito remoto:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Identificar na disposição do ECM a necessidade de enviar o material para o BA01.	Verificando o texto descritivo da Engenharia conforme WPS-29385.
2	Modificar a lista de depósitos do material a ser enviado.	Entrando na transação MMSC e tornando o depósito IS99 "Remoto".
		
6.2. Criando QC para Envio:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Iniciar o preenchimento da QC.	Entrar na transação QM01 e digitar o tipo de nota (imagem não fornecida).
2	Preencher o cabeçalho da QM.	Preencher: Codificação: QM-REF / 005; Título Descrição: O número da modificação recebida; Descrição: O material a ser enviado para o BA01; Quantidade reclamada (sempre a quantidade de máquinas a serem modificadas); Defeito/Det: WEN-ACER / BA01.
3	Preencher a aba "Informações Adicionais".	Preencher o centro de trabalho do causador e do usuário.
4	Informar o item da máquina.	Informar o item da máquina modificada e o centro de produção.
5	Preencher a aba "itens".	Preencher todos os itens da QM a serem enviados para o BA01.
Nota: Repetir as informações iniciais e informar o item para cada item adicional.	
6	Incluir medidas na nota QC.	Incluir as medidas: Medida 1: GRP: QM; Código: 001; Texto: Para conhecimento; Responsável: Engenharia; Data: data após a abertura da QC. Medida 2: GRP: QM; Código: 001; Texto: Enviar para BA01; Responsável: Almoxarifado; Data: data após a abertura da QC. Medida 3: GRP: QM; Código: 001; Texto: Para conhecimento; Responsável: Célula de Modificação; Data: seis meses após a abertura da QC.
Nota: No texto da medida do almoxarifado, incluir o(s) item(ns) a ser(em) enviado(s) para o BA01.	
7	Liberar medidas para os usuários.	Selecionar as medidas e clicar em "Liberar".
8	Gravar nota QC.	Clicar em "gravar nota".
9	Apropriar custo da nota.	Clicar em "Apropriar custos" e apropriar contra o Centro de Custo (CCS) do causador da modificação.
6.3. Criar Reserva para o BA01:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Iniciar a criação da reserva.	Entrar na transação MB21 e preencher o tipo de movimento Z51 e o centro 1200.
2	Preencher o cabeçalho da reserva.	Informar a ordem QM, o(s) material(is), a quantidade e o depósito IS99 e teclar ENTER.
3	Finalizar o preenchimento.	Inserir a data da reserva (6 meses após a execução), conta razão 411010015 e o número da QM no campo "texto". Teclar ENTER.
4	Gravar reserva.	Clicar em "salvar".
5	Solicitar o envio do material.	Enviar um e-mail para a fábrica solicitando o envio do material para o BA01, aos cuidados do responsável.
6	Verificar a transferência do material.	Verificar na MMBE se o material foi transferido.
Nota: Solicitar a transferência ao responsável até que seja feita.	
7. OBJETIVO: Estabelecer o fluxo para a criação de ordens de transformação (RP).
8. SISTEMAS E SOFTWARES:
* SAP – ECC – IQS9;
  * SAP – ECC – CS14;
  * SAP – ECC – CS03;
  * SAP – ECC – CO01;
  * SAP – ECC – MD04;
  * SAP – ECC – MB1A.

9. PROCEDIMENTO:
9.1. Criar ordem para novo gerador "Para":
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Analisar o claim recebido.	Verificar o que será modificado, a quantidade de geradores e a data de entrega.
2	Comparar a LT na transação CS14.	Inserir o item da LT antiga ("De") à esquerda e da nova ("Para") à direita e clicar em "Comparç.diferenciada".
3	Ajustar os valores.	Ocultar os itens iguais e exibir apenas os diferentes entre as listas.
Notas:	
* Símbolos na CS14:	
* - Materiais iguais;	
* - Quantidade diferente;	
* - Materiais diferentes.	
* Clicar nos símbolos para ocultar ou exibir materiais.	
4	Verificar a LT do novo gerador.	Verificar na CS03 se a LT2 do novo gerador contém o gerador antigo. Se não, solicitar a inclusão à Engenharia.
5	Gerar a ordem na CO01.	Informar o item do novo gerador, o centro de produção 1200, o tipo de ordem ZTR1 e teclar Enter.
6	Preencher o cabeçalho da ordem.	Informar a quantidade e a data de início da fabricação.
Nota: Criar uma ordem para cada gerador se o claim solicitar mais de uma peça.	
7	Trocar o planejador.	Trocar para o planejador 021 na aba "atribuição".
8	Ajustar as operações.	Eliminar as operações desnecessárias, deixando apenas as necessárias para a transformação.
Nota: Operações paralelas desnecessárias podem ser eliminadas.	
9	Ajustar a lista de materiais.	Eliminar todos os materiais e incluir apenas os solicitados no claim e o item "De". Para conjuntos, incluir "0001" no campo "Versão de Produção" e a data atual ou futura no campo "Data de explosão".
Notas:	
* Trabalhar com o claim e a comparação da CS14. Ajustar a lista conforme o claim.	
* Agrupar todos os materiais em uma só operação.	
* Incluir um novo conjunto de etiqueta, mesmo que seja igual ao antigo, pois os dados foram modificados. Fazer o mesmo para o saco plástico da embalagem do gerador.	
* Incluir o item "De" após o capítulo 4.4.2 e efetuar a baixa conforme o capítulo 4.4.3.	
10	Preencher o campo "texto".	Clicar em "Texto descritivo" na tela inicial e preencher conforme as instruções (não fornecidas no texto).
11	Finalizar a ordem.	Clicar em "Liberar ordem" e em "salvar".
9.2. Verificar a Disponibilidade de Materiais:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a ordem de produção.	Acessar na transação CO02.
2	Verificar materiais faltantes.	Clicar em "Verificar disponib.material".
3	Enviar e-mail sobre materiais faltantes.	Cobrar os itens faltantes no e-mail do final do capítulo 4.6.
9.3. Criar ordem para devolução dos materiais para o estoque (quando necessário):
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Criar ordem de devolução.	Acessar a transação CO01, preencher o material do gerador "De", o centro e o tipo de ordem ZRE1.
2	Preencher quantidade e data.	Preencher a quantidade e a data atual e pressionar Enter.
3	Ajustar as operações.	Eliminar operações paralelas e principais desnecessárias, deixando apenas "Acabamento", "Inspeção" e "Apontamento".
4	Ajustar a lista de componentes.	Eliminar todos os componentes e incluir o item "De" para consumo e os itens a serem devolvidos ao estoque.
Notas:	
* Inserir o sinal "-" (negativo) e a quantidade para os materiais devolvidos ao estoque.	
* Os materiais devolvidos estarão disponíveis na comparação do capítulo 4.1, à esquerda. Devolver regulador, tampa, flange e roda de diodos. Avaliar a devolução de outros itens com a fábrica.	
* Conjuntos de peças usinadas incluem o item usinado e o bruto. Devolver apenas o item usinado.	
5	Liberar a ordem e salvar.
9.4. Tratativas com o item do gerador "De":
**9.4.1. Para RP que não precisa de ordem de devolução:**

     **9.4.1.1.** Para RPs sem devolução de componentes, baixar o item "De" diretamente na RP usando o número de série do claim. Não executar os capítulos 4.4.2 e 4.4.3.

  **9.4.2. Consumo do material "De" na ordem de devolução:**

  | SEQUÊNCIA DE ATIVIDADES | O QUE FAZER? | COMO FAZER? |
  |---|---|---| 
  | 1 | Entrar na transação MD04. | Acessar a transação com o item "De", localizar a reserva da ordem de devolução e copiá-la. |
  | 2 | Localizar e copiar o número de série. | Localizar e copiar o número de série no claim. |
  | 3 | Acessar a transação MB1A. | Acessar a transação e clicar em "Por reserva". |
  | 4 | Inserir o número da reserva. | Inserir o número copiado no campo "Nº reserva" e pressionar Enter. |
  | 5 | Verificar o item "De" e gravar. | Verificar se o item "De" a ser baixado aparece na tela e clicar em "gravar". |
  | 6 | Inserir o número de série. | Inserir o número de série no campo da tela e clicar em "OK". |

  **9.4.3. Entrada da ordem de devolução no estoque:**

  | SEQUÊNCIA DE ATIVIDADES | O QUE FAZER? | COMO FAZER? |
  |---|---|---| 
  | 1 | Copiar a ordem de devolução e apontá-la na CO11N. | Copiar o número da ordem e apontá-la na CO11N. |
  | 2 | Fornecer o item "De" no estoque na MB31. | Copiar o número da ordem e fornecer o item na MB31. |

  **9.4.4. Acessar a CO02 para obter o número de série:**

  | SEQUÊNCIA DE ATIVIDADES | O QUE FAZER? | COMO FAZER? |
  |---|---|---| 
  | 1 | Acessar a CO02. | Acessar a CO02 com a ordem de devolução, clicar em "Cabeçalho" e em "nº de série". |
  | 2 | Copiar o número de série. | Copiar o número de série e sair da transação. |

  **9.4.5. Baixar o item "De" na RP:**

  | SEQUÊNCIA DE ATIVIDADES | O QUE FAZER? | COMO FAZER? |
  |---|---||---| 
  | 1 | Consultar o nº da reserva a ser baixada. | Acessar a MD04 com o material do gerador incluído na RP e clicar duas vezes na reserva da ordem onde o gerador será consumido. |
  | 2 | Iniciar a baixa do gerador. | Copiar o número da reserva e inseri-lo na transação MB1A. Teclar Enter. |
  | 3 | Baixar o gerador. | Clicar em "registrar" para informar o nº de série e clicar em "OK". |
  |  | **Notas:**  | 
  |  | * Com ordem de devolução: usar o número de série do capítulo 4.4.3. |
  |  | * Sem ordem de devolução: usar o número de série do claim. |

  9.5. Localizar número de série pela MD04:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Entrar na MD04 com o material "De".	Acessar a transação com o item "De" e clicar duas vezes na peça em estoque.
2	Entrar na visão geral do estoque.	Clicar em "Visão geral do Estoque".
3	Entrar na opção "Equipamentos".	Clicar com o botão direito na quantidade em estoque e selecionar "Equipamentos/nº de série".
4	Copiar o número de série.	Copiar o número de série exibido na tela.
9.6. Responder e-mail e Claim:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Responder e finalizar o claim.	Responder com o número da RP e clicar em "Concluir" e "Gravar".
2	Enviar e-mail para os responsáveis.	Enviar um e-mail para Vendas e Expedição do GTA com o número da RP, da ordem de devolução, diferença entre os geradores, cobrança de itens faltantes, números de série baixados e comentários da Engenharia (claim).
10. OBJETIVO: Estabelecer o procedimento para apontar máquinas para o mercado interno da WEG Energia.
11. SISTEMAS E SOFTWARES:
SAP – ECC – LRF1
12. GENERALIDADES
12.1. Principais partes do coletor de dados:
****

12.2. Ligar o coletor pressionando POWER.
12.3. Inserir o login PCP-GERADOR e clicar em ENTER (usar o botão azul e o botão com vírgula para digitar o traço "-").
12.4. Inserir a senha MA1809 e clicar em ENTER.
12.5. Reiniciar o coletor pressionando CTRL + ESC simultaneamente.
12.6. Fazer logoff pressionando o botão vermelho + J (equivalente a "F10").
12.7. Conferir materiais para o mercado interno através de grupos de conferência criados no coletor. O grupo pode conter um ou mais transportes a serem conferidos simultaneamente.
13. DEFINIÇÕES
Coletor de dados: Equipamento usado em sistemas de WMS (Warehouse Management System) para ler o código de barras das mercadorias e executar atividades no depósito.
Unidade de Depósito (UD): Unidade agrupadora de itens (palete, caixa ou grade) com etiqueta de identificação, associando cada item à etiqueta da UD.
Ordem de Transferência (OT): Documento para movimentar mercadorias no WM (Warehouse Management).
Unidade Comercial (UC): Unidade física agrupadora de mercadorias ou embalagens, numeração dada a um palete com materiais, associando um material a uma embalagem.
14. PROCEDIMENTO
14.1. Habilitar o coletor de dados:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a transação LRF1.	Digitar ou selecionar LRF1 no SAP.
2	Informar o depósito.	Preencher o código "310".
3	Habilitar o login para apontamento.	Abrir a pasta "Entrada" e arrastar o usuário para o campo "Responsável".
4	Habilitar o login para picking.	Repetir o passo 3 na pasta "Saída".
14.2. Apontamento:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Selecionar "Entrada".	Digitar "1" no campo "Sel." e teclar ENTER.
2	Selecionar "Novo apontamento".	Digitar "2" no campo "Sel." e teclar ENTER.
3	Ler o código QR CODE.	Aproximar o leitor do código e pressionar SCAN.
4	Cadastrar a UD.	Ler o código de barras da UD e pressionar ENTER duas vezes.
5	Fixar a UD.	Fixar a UD na máquina apontada.
14.3. Cadastrar UD:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Iniciar o endereçamento.	Pressionar o botão vermelho + "F" ou clicar em "F6 Arma".
2	Ler o código da UD.	Pressionar SCAN e aproximar o leitor do código.
3	Informar o tamanho da máquina.	Preencher o campo "TUD": 001 para carcaças 160 e 161; 002 para carcaças 200 a 252; 003 para carcaças maiores que 252.
14.4. Confirmar OT e armazenar a máquina:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Iniciar a confirmação da OT.	Pressionar o botão vermelho + "C".
2	Selecionar a opção de confirmação.	Selecionar "3" no campo "Sel." e clicar em ENTER.
3	Selecionar a entrada da UD.	Digitar "1" no campo "Sel." e teclar ENTER.
4	Ler o código de barras.	Pressionar SCAN para ler o código de barras.
5	Identificar o gerador com a posição.	Escrever na máquina o número da posição gerada no coletor.
Notas:	
* Pressionar o botão vermelho + "A" para registrar a próxima OT.	
* Pressionar o botão vermelho + "C" para voltar à tela anterior.	
6	Armazenar o gerador.	Armazenar na posição determinada pelo sistema.
15. OBJETIVO: Estabelecer o procedimento para apontar máquinas para o mercado externo da WEG Energia.
16. SISTEMAS E SOFTWARES:
SAP – ECC – LRF1
SAP – ECC – ZTWM010
17. GENERALIDADES
17.1. Principais partes do coletor de dados:
****

17.2. Ligar o coletor pressionando POWER.
17.3. Inserir o login PCP-GERADOR e clicar em ENTER (usar o botão azul e o botão com vírgula para digitar o traço "-").
17.4. Inserir a senha MA1809 e clicar em ENTER.
17.5. Reiniciar o coletor pressionando CTRL + ESC simultaneamente.
17.6. Fazer logoff pressionando o botão vermelho + J (equivalente a "F10").
17.7. Conferir materiais para o mercado interno através de grupos de conferência criados no coletor. O grupo pode conter um ou mais transportes a serem conferidos simultaneamente.
18. DEFINIÇÕES
Coletor de dados: Equipamento usado em sistemas de WMS (Warehouse Management System) para ler o código de barras das mercadorias e executar atividades no depósito.
Unidade de Depósito (UD): Unidade agrupadora de itens (palete, caixa ou grade) com etiqueta de identificação, associando cada item à etiqueta da UD.
Ordem de Transferência (OT): Documento para movimentar mercadorias no WM (Warehouse Management).
Unidade Comercial (UC): Unidade física agrupadora de mercadorias ou embalagens, numeração dada a um palete com materiais, associando um material a uma embalagem.
Handly Unit (HU) ou Unidade de Manuseio: Documento que identifica o produto para exportação.
19. PROCEDIMENTO
19.1. Habilitar o coletor de dados:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a transação LRF1.	Digitar ou selecionar LRF1 no SAP.
2	Informar o depósito.	Preencher o código "310".
3	Habilitar o login para apontamento.	Abrir a pasta "Entrada" e arrastar o usuário para o campo "Responsável".
4	Habilitar o login para picking.	Repetir o passo 3 na pasta "Saída".
19.2. Apontamento:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Selecionar "Entrada".	Digitar "1" no campo "Sel." e teclar ENTER.
2	Selecionar "Novo apontamento".	Digitar "2" no campo "Sel." e teclar ENTER.
3	Ler o código QR CODE.	Aproximar o leitor do código e pressionar SCAN.
4	Cadastrar a HU.	Ler o código de barras da unidade comercial (HU) e pressionar ENTER até voltar à tela inicial.
19.3. Imprimir o mapa de transferência (HU):
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a transação de impressão.	Acessar a transação ZTWM010.
2	Preencher as informações.	Preencher: tipo de mensagem, centro e depósito (HUA3 ou WA03), clicar em "executar" ou F8.
Nota: O mapa será enviado para a impressora padrão, se houver algum para imprimir.	
19.4. Conferir a unidade comercial (posição da carreta) e finalizar o processo:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Selecionar "Processos internos" no coletor.	Selecionar a opção "Processos Internos".
2	Realizar a conferência da UC.	Selecionar a opção "4": Conferência UC.
3	Ler o código da UC.	Bipar o código da UC.
4	Ler o código da HU.	Bipar o código da HU.
5	Ler a etiqueta da máquina e gravar.	Bipar o código de barras da etiqueta da máquina e clicar em "Gravar".
6	Preparar a HU para colar na máquina.	Colar a UC na HU, proteger a HU com plástico e colar na máquina.
7	Enviar a máquina para a WEX.	Embarcar a máquina no transporte com destino à Seção de Exportação (WEX) para ser expedida.
20. OBJETIVO: Padronizar o procedimento para solicitar materiais kanban.
21. TRANSAÇÕES:
ZTMM292 - Formulário de solicitações de materiais
22. PROCEDIMENTO:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a transação ZTMM292.	Acessar a transação ZTMM292 no SAP.
2	Selecionar o local de entrega.	Clicar no Matchcode para visualizar a lista de locais e clicar duas vezes no local desejado.
3	Preencher o campo "prioridade".	Preencher com o código "000000015" e pressionar Enter.
4	Inserir nova linha.	Clicar em "Inserir Linha".
5	Preencher as informações.	Preencher os campos "Ordem" e "Operação".

23. OBJETIVO: Padronizar o fluxo de abastecimento de componentes do almoxarifado para a linha Vestas e Montagem B.
24. TRANSAÇÕES:
ZTPP035 – Relatório de Ordens de Produção
ZTMM292 – Formulário Solicitação de Materiais
25. PROCEDIMENTO
25.1. Emitir o relatório de programação da montagem Vestas:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a transação ZTPP035.	Acessar a transação ZTPP035 no SAP.
2	Selecionar a variante.	Clicar em "CHAMAR VARIANTE", inserir a variante "VALMIRJ" no campo "CRIADOR POR" e pressionar F8.
25.2. Solicitar material kanban:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a transação ZTMM292.	Acessar a transação ZTMM292 no SAP.
2	Preencher o campo "local de entrega".	Preencher com o código "000000002".
3	Preencher o campo "prioridade".	Preencher com o código "000000015" e pressionar Enter.
4	Inserir nova linha.	Clicar em "Inserir Linha".
5	Preencher as informações.	Preencher os campos "Ordem" e "Operação".
26. INFORMAÇÕES ADICIONAIS:
26.1. Solicitar material apenas se houver carrinhos disponíveis para abastecimento.
27. Objetivo: Estabelecer os parâmetros para verificar as modificações recebidas na programação.
28. SISTEMA E SOFTWARES:
SAP – ECC – IQS9;
SAP – ECC – SBWP;
SAP – ECC – CLM2;
SAP – ECC – CC03.
29. PROCEDIMENTO
29.1. Modificações via Claim:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a caixa de medidas de claims.	Acessar a caixa de entrada de medidas de claims na transação IQS9.
2	Preencher os campos necessários.	Preencher os campos conforme a figura (não fornecida no texto).
3	Selecionar o claim e editar a medida.	Selecionar a linha do claim, clicar em "Exibir/Editar" e em "Medida".
4	Avaliar a medida.	Clicar em "Nota" para avaliar a solicitação e prosseguir com a modificação.
5	Modificar os documentos e ordens.	Avaliar o texto da modificação e modificar as ordens e documentos conforme solicitado.
Nota: As modificações podem ser: modificação de documento, de lista técnica ou de roteiro.	
6	Responder à medida.	Descrever as ações tomadas no campo "texto" da medida.
7	Atualizar os documentos e ordens na fábrica.	Reimprimir os documentos e ordens modificados e atualizar na fábrica.
Nota: Reimprimir as ordens na cor amarela para projetos especiais sinalizados nas planilhas de produção.	
8	Registrar a modificação por e-mail.	Informar os responsáveis sobre a modificação por e-mail.
29.2. Modificações via ECM:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a caixa de medidas de ECMs.	Acessar a caixa de entrada de medidas de ECMs no "Work Place" (SBWP), conforme a imagem (não fornecida no texto).
2	Visualizar os documentos pendentes.	Expandir a pasta "Entrada" e clicar em "Documentos".
3	Avaliar os objetos modificados.	Selecionar a linha do ECM e visualizar o texto da modificação na janela abaixo.
4	Acessar o cabeçalho do ECM.	Clicar duas vezes na linha do ECM e clicar no ECM.
5	Acessar o texto descritivo da Engenharia.	Clicar em "Texto descritivo".
Notas:	
* Analisar o texto descritivo e o texto da Engenharia para verificar a modificação e o destino dos materiais.	
* O destino dos materiais deve ser descrito de forma clara no campo "texto". As opções são:	
* Recuperar: Reutilizar os materiais impactados pela modificação.	
* Sucatear: Sucatear os materiais irrecuperáveis, conforme o MA-0063 (Manual de Sucateamento de Materiais).	
* Enviar para BA01: Para materiais que fazem parte de planilhas de componente padrão, são usados em outras listas técnicas, são barras de eixo ou componentes específicos de projetos que podem ser reutilizados.	
* Utilizar no estado e consumir todo o estoque: Apenas para melhorias em projetos.	
* Devolver à Engenharia as modificações sem informações claras e objetivas, solicitando esclarecimentos.	
6	Avaliar a modificação.	Avaliar o ECM (texto descritivo e texto da Engenharia) e verificar a necessidade de executar a modificação no sistema.
Nota: Modificações para projetos futuros afetam apenas as próximas máquinas na programação, não as ordens já liberadas.	
7	Modificar os documentos e ordens.	Executar as alterações solicitadas em ordens e documentos.
Nota: As modificações podem ser: modificação de documento, de lista técnica ou de roteiro.	
8	Atualizar os documentos e ordens na fábrica.	Reimprimir os documentos e ordens modificados e atualizar na fábrica.
9	Registrar a modificação por e-mail.	Informar os responsáveis sobre a modificação por e-mail.
10	Responder à medida.	Clicar em "Fluxo de Documentos" no cabeçalho do ECM, em seguida em "Criar" e "Criar Nota".
11	Informar o responsável e a descrição da modificação.	Preencher o responsável no título da nota e a descrição na caixa de texto abaixo do título.
12	Eliminar o ECM respondido.	Voltar à tela inicial do "Work Place", selecionar a linha do ECM e clicar em "Eliminar".
30. Objetivo: Estabelece o procedimento de planejamento de materiais planejados pelo MPS do sistema SAP.
31. PROCEDIMENTO
31.1. Planejamento por MPS - Geradores linha G:
SEQUÊNCIA DE ATIVIDADES	O QUE FAZER?	COMO FAZER?
1	Acessar a transação ZTPP045.	Digitar ZTPP045 no SAP e pressionar Enter.
Nota: Ativa o parâmetro de Estoque de Segurança no planejamento. A transação MD74 será executada ao final para planejar os materiais do MPS com Estoque de Segurança apenas no dia do fechamento, evitando ordens diárias em atraso.	
2	Preencher os campos.	Preencher "Centro", "Período de planejamento", "Ano de planejamento" e "Depósito de produção". Alterar a semana de planejamento e pressionar F8.
3	Verificar a lista de materiais.	Verificar os materiais com saldo menor que o Estoque de Segurança.
4	Acessar a transação ZTPP176.	Digitar ZTPP176 no SAP e pressionar Enter.
5	Preencher os campos e executar a transação.	Preencher os campos e pressionar F8.
Nota: Tp.doc.compras: ZEXT, ZEXP, ZINT, ZIMP. Centro: conforme o planejamento. Período Planej.: conforme o planejamento. Ano Planejamento: ano vigente. Hierarq. de cotas 1: MQN. Hierarq. de cotas 2: MG1, MG2, MG3. Planejador MRP: 020, 02.	
6	Verificar a quantidade de máquinas geradas.	Verificar se a quantidade está dentro da capacidade de produção.
Nota: Observar a quantidade gerada, que deve estar dentro do limite da capacidade. Negociar com Vendas para priorizar e postergar a quantidade excedente para o próximo período, se necessário.	
7	Acessar a transação ZTPP018.	Digitar ZTP018 no SAP e pressionar Enter.
8	Preencher os campos.	Preencher todos os campos.
Notas:	
* Preencher a data conforme o período de avaliação para o fechamento da programação.	
* Essa transação exporta os materiais planejados para o Excel, salvando no arquivo especificado (não fornecido no texto).	
9	Executar em background.	Clicar em "Programa" e "Executar em background".
10	Avançar.	Clicar em "Avançar".
11	Clicar em "Imed." e gravar.	Clicar em "Imed" e pressionar F8.
Nota: O resultado será apresentado em dois arquivos básicos.	
12	Verificar os materiais no primeiro arquivo.	Verificar os materiais sem a coluna "A" preenchida.
13	Acessar a transação MC86.	Digitar MC86 no SAP e pressionar Enter.
14	Selecionar o grupo de produto.	Selecionar de acordo com a família do material, carcaça e polaridade. Clicar em Enter.
Nota: Grupos existentes: G2004P, G2004P/CAT, G2504P, G2504P/CAT, G1604P, G3154P, G3554P, G3154P/CAT, AG3154P, AG2504P, AG2804P, G-KIT. Usar a transação ZTPP176 para saber o que significa "/CAT".	
15	Preencher os campos.	Digitar o número do material em "Nº do elemento", preencher o "Centro" e clicar em "Enter" e em "Gravar".
Notas:	
* Repetir o procedimento para materiais de outros grupos de produto.	
* Incluir o material apenas uma vez, mesmo que se repita na transação.	
16	Acessar o segundo arquivo.	Abrir o segundo arquivo com o resumo de materiais por grupo de produto e suas quantidades.
17	Inserir nova planilha.	Inserir uma nova aba no arquivo (Plan1). Copiar os dados da planilha anterior, ordenar a coluna "A" em ordem crescente, inserir as datas para a distribuição semanal e dividir as quantidades conforme a capacidade de produção ou orientação da chefia do Planejamento.
Nota: Salvar o resultado da distribuição diária no arquivo: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Programação GTA/distribuicao-diaria	
18	Acessar a transação ZTPP008.	Digitar ZTPP008 no SAP e pressionar Enter.
19	Preencher os campos.	Preencher os campos.
Nota: Local do arquivo: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Programação GTA/distribuicao-diaria	
20	Acessar a transação ZTPP011.	Digitar ZTPP011 no SAP e pressionar Enter.
Nota: Verifica se as quantidades estão corretas.	
21	Preencher os campos e executar.	Preencher os campos e pressionar F8.
Nota: Preencher "Data planejamento" de acordo com a semana de planejamento.	
22	Acessar a transação ZTPP025.	Digitar ZTPP025 no SAP e pressionar Enter.
23	Preencher os campos e executar.	Preencher os campos, selecionar "Executar materiais do Período" e pressionar F8. O campo "Período" deve ser preenchido de acordo com a semana de planejamento.
24	Gerar o relatório e fechar a transação.	Gerar o relatório e fechar a transação.
25	Acessar a transação MD74.	Digitar MD74 no SAP e pressionar Enter.
26	Preencher os campos e executar.	Preencher os campos, selecionar "Eliminar versões inativas antes data fixada" e pressionar F8. Preencher "Data fixada" para o domingo após o fechamento.
27	Gerar o relatório e fechar a transação.	Gerar o relatório e fechar a transação.
Nota: Essa transação, em conjunto com a ZTPP045, faz com que o MRP não considere o estoque de segurança após a reorganização das necessidades independentes.	
28	Acessar a transação ZTPP107.	Digitar ZTPP107 no SAP e pressionar Enter.
29	Preencher os campos e executar.	Preencher os campos e pressionar F8.
Notas:	
* Preencher "Data base de início" com a data do período de planejamento.	
* Usar a variante "/MARCOSGTA" para preencher os campos automaticamente.	
30	Verificar o relatório.	Verificar as ordens programadas e fixadas para o período.
Notas:	
* Comparar o resultado com o da transação ZTPP176, verificando se as quantidades são iguais.	
* Materiais sem roteiro associado terão o campo "Fim prog." em branco. Enviar e-mail para a seção CPA para a criação do roteiro.	
* Materiais sem roteiro podem não ter lista técnica válida. Verificar na transação CS03. Avisar Vendas por e-mail. A lista técnica deve ser criada até as 10h do dia seguinte, ou o material será removido da semana de planejamento.	
31	Acessar a transação ZTMM119.	Digitar ZTMM119 no SAP e pressionar Enter.
32	Preencher os campos e executar.	Preencher os campos: Material: copiar a lista da ZTPP176. Classe: "ENERGIA" (localizar pelo match code). Clicar em "Listar Características" para selecionar. Executar a transação pressionando F8.
33	Verificar o relatório.	Verificar os materiais e programar/dia: Grau3: 3; Grau2: 4; Grau1,5: 5; Cat: 12; Carac>280 programar 25/dia, com produção de 80/dia.
34	Acessar a transação ZTPP012.	Digitar ZTPP012 no SAP e pressionar Enter.
Nota: Verifica os kits.	
35	Preencher os campos e executar.	Preencher os campos e pressionar F8.
Nota: "Data de Planejamento": usar o intervalo de 01/01/2008 até o fechamento do período.	
36	Verificar o relatório.	Verificar os materiais com quantidade negativa na coluna "+/-".
37	Acessar a transação COHV.	Digitar COHV no SAP e pressionar Enter.
Nota: Verifica os geradores.	
38	Preencher os campos e executar.	Preencher os campos e pressionar F8.
39	Verificar as ordens fixadas.	Ordenar a coluna "Fixação" e verificar se todas as ordens estão fixadas.
40	Liberar a próxima medida.	Marcar a próxima medida, clicar em "Liberar" e salvar (Ctrl+S).
Nota: Liberar a próxima medida em claims do tipo "ZC".	
32. Objetivo: Estabelece o procedimento para o apontamento de ordens de produção e ou seu estorno, criação de ordens de retrabalho sem material, movimentos de mercadoria e suas pendências, bem como o encerramento técnico das ordens de produção.
33. Sistemas e softwares:
SAP – ECC – CO02;
SAP – ECC – CO11N;
SAP – ECC – MB31;
SAP – ECC – IQS9;
SAP – ECC – ZTQM004;
SAP – ECC – CO07;
SAP – ECC – MD04;
SAP – ECC – MB5T;
SAP – ECC – MIGO;
SAP – ECC – MF60;
SAP – ECC – MB1B;
SAP – ECC – CO27;
SAP – ECC – COGI;
SAP – ECC – COHV;
SAP – ECC – MBST;
SAP – ECC – CO13.
34. Procedimento:
34.1. Modificações em Ordens de Produção:
**34.1.1. Consultas gerais nas ordens de produção:**

  **34.1.1.1.** Consultar parâmetros como data, operações, lista de materiais, etc., conforme WPS-22683.

34.2. Modificações em Listas de Materiais na Ordem de Produção:
**34.2.1. Digitar CO02 no SAP e pressionar Enter.**
  **34.2.2. Digitar o número da ordem no campo "Ordem" e pressionar Enter.**
  **34.2.3. Executar os subcapítulos 3.2.1 e 3.2.2 e selecionar "Síntese de componentes".**
  **34.2.4. Avaliar as informações destacadas e verificar se os componentes já foram consumidos na ordem através da coluna "Quantidade retirada". Sair da síntese pressionando F3.**
  **34.2.5. Incluir novos materiais em linhas em branco, informando o item SAP, quantidade necessária, categoria do item, operação e sequência. Pressionar Enter.**
  **Notas:**

     * Todos os materiais incluídos devem estar na lista técnica do item principal.
     * Não modificar as quantidades sem que a mesma alteração ocorra na lista técnica.
     * Não incluir materiais em operações já apontadas ou ordens já fornecidas.
     * Categorias de item: C – Unidade Compatível; L – Item Inventariado; M – Intramaterial; N – Item não Inventariado; R – Item de Dimensão Bruta; T – Item de Texto. Usar apenas "L – Item Inventariado" para itens com movimentação de estoque normal e "T – Item Texto" para itens informativos sem movimentação de estoque.

  **34.2.6. Eliminar materiais desnecessários selecionando-os e clicando na lixeira.**

34.3. Modificações em Listas de Operações:
**34.3.1. Executar os subcapítulos 3.2.1 e 3.2.2 e selecionar "Síntese de operações".**
  **34.3.2. Verificar o "centro de trabalho", as "chaves de controle", o "Status do Sistema" e a "quantidade confirmada" em cada operação. Sair da síntese pressionando F3.**
  **Notas:**

     * Chaves de controle: ZPP9 – Apontamento opcional; PP01 – Apontamento obrigatório; PP03 – Apontamento obrigatório com entrada automática em estoque; PP02 – Operação subcontratada.
     * Usar a transação MB31 para receber material em estoque se a última operação tiver a chave de controle "PP01".

  **34.3.3. Incluir novas operações em linhas em branco informando o número, o centro de trabalho, o centro de produção, a chave de controle e a descrição. Pressionar Enter.**
  **34.3.4. Informar o número de pessoas necessárias para a operação e teclar Enter.**

**34.3.5. Informar o tempo de setup e de mão de obra conforme solicitado e teclar Enter.**

**34.3.6. Selecionar o campo "partição Obrigatória" e pressionar Enter nas janelas que surgirem.**

**34.3.7. Eliminar as operações desnecessárias selecionando-as e clicando na lixeira.**

34.4. Apontamento de Ordens de Produção/Operações:
**34.4.1. Digitar CO11N no SAP e pressionar Enter.**

**Nota:** Esta transação pode ser executada manualmente ou por leitor de código de barras.

  **34.4.2. Execução manual:** preencher os campos "Ordem" e "Operação" e pressionar Enter.

**34.4.3. Execução por leitor de código de barras (nota de operação):** ler o campo "Ordem /Operação" da ordem de produção.

**34.4.4. Execução por leitor de código de barras (cartão de apontamento):** ler o campo "Apontamento" da ordem de produção.

**34.4.5. Conferir os campos e gravar a transação (Ctrl+S).**

**Notas:**

     * Se o campo "Quantidade boa" não for preenchido automaticamente, apontar a operação anterior pendente.
     * YELLOW ORDER (ordem com ou sem material de retrabalho): disponibilizar em mural específico na sala do diretor industrial.

34.5. Apontamento de Ordens de Produção no Estoque:
**34.5.1. Digitar MB31 no SAP e pressionar Enter.**

**34.5.2. Preencher os campos e pressionar Enter.**

**Notas:**

     * O campo "Imprim." deve estar em branco.
     * Usar o movimento 102 para estornar um recebimento de mercadoria por ordem.

  **34.5.3. Ajustar a quantidade para o estoque e gravar a transação (Ctrl+S).**

**34.5.4. Verificar a seleção de números de série, marcar o número de série e pressionar Enter.**

**Nota:** Após concluir a transação, se for a quantidade total da ordem, verificar se todas as operações foram confirmadas (subcapítulo 3.1). Se houver operações em andamento, executar o subcapítulo 3.2.

34.6. Consulta de Medidas, Notas QM:
**34.6.1. Digitar IQS9 no SAP e pressionar Enter.**

**34.6.2. Preencher os campos e executar a transação (F8).**

**34.6.3. Verificar a listagem, marcar a nota "QC", clicar em "Modificar" e em "Medida".**

**34.6.4. Clicar no ícone "Nota".**

**34.6.5. Interpretar a nota e tomar as providências (criar ordem de retrabalho, consumir material, criar novas ordens de produção, avisar o comprador para comprar material, modificar ordens e documentos, etc.).**

**34.6.6. Informar a ação tomada para a nota QC e concluir a medida (ícone "Concluir medida").**

34.7. Consumo de Materiais para Ordem QM:
**34.7.1. Digitar ZTQM004 no SAP e pressionar Enter.**

**34.7.2. Preencher o campo "Nota", clicar em "Apropriar custos" e avaliar a regra de liquidação da nota QC.**

**Nota:** A regra de liquidação para a baixa de materiais deve ser contra a ordem de produção válida: o material deve estar ligado à ordem, a ordem não deve estar encerrada e deve ter consumos para não gerar estorno de crédito.

  **34.7.3. Clicar em "Consumo de materiais".**

**34.7.4. Preencher o campo "Tipo movimento", os campos "Centro", "Material", "Quantidade", "Unidade" e "Depósito" para os materiais a serem consumidos. Clicar em "OK, continuar" para finalizar o consumo.**

**Nota:** Verificar o item 3.8 para estornos necessários antes do consumo contra a QM.

34.8. Estornos de Materiais via Transação MBST:
**34.8.1. Acessar a transação MB51 e localizar o movimento a ser estornado.**

**Nota:** Usar o documento gerado na baixa da ordem para a qual o estorno foi solicitado.

  **34.8.2. Acessar a transação MBST, inserir o número do documento e teclar ENTER.**

**34.8.3. Desmarcar todos os itens do documento, localizar e marcar o item a ser estornado.**

**34.8.4. Clicar em "gravar" para efetuar o estorno.**

**Notas:**

     * Após o estorno, tratar o material (baixa contra QC, alterações de depósitos ou projetos, consumos em outras ordens, etc.).
     * Transferir os materiais estornados para depósitos de suprimentos que não serão retirados na sequência para o depósito de fábrica ou comunicar o almoxarifado sobre o estorno.

34.9. Abertura de Ordem de Retrabalho:
**34.9.1. Digitar CO07 no SAP e pressionar Enter.**

**34.9.2. Preencher os campos "Centro" e "Tipo de ordem" e pressionar Enter.**

**34.9.3. Preencher os campos "Descrição", "Qtd.total", "Unidade" e "Fim" e acessar a aba "Atribuição".**

**34.9.4. Selecionar "Gerar operação".**

**34.9.5. Atualizar a norma de apropriação de custos (contra centro de custo, elemento PEP, ordem de produção, QM ou serviço) e voltar à transação (F3).**

**34.9.6. Preencher os campos "Planejador MRP" e "Centro de lucro", selecionar "Síntese de operações" e preencher os campos "CenTrab" e "ChvMod" para cada operação. Liberar a ordem (ícone "Liberar ordem") e gravar a transação (Ctrl+S).**

**Notas:**

     * Imprimir a ordem manualmente ou pelo job de impressão de documentos.
     * Imprimir em folha rosa as ordens solicitadas pela "Cadeia de Ajuda" e entregar ao solicitante.


34.10. Verificação de Disponibilidade de Material:
**34.10.1. Digitar MD04 no SAP e pressionar Enter.**

**34.10.2. Digitar o código do material, preencher o centro produtor e pressionar Enter.**

**34.10.3. Avaliar a situação do estoque do material. Se o saldo for negativo, providenciar a reposição enviando um e-mail ao comprador ou programador responsável.**

**34.10.4. Clicar em "Expandir detalh.cabeç." e verificar o tipo de suprimento ("Comprado = F" ou "Manufaturado = E"). Sair da transação (F3).**

34.11. Consulta de Materiais em Trânsito:
**34.11.1. Digitar MB5T no SAP e pressionar Enter.**

**34.11.2. Preencher os campos "Centro receptor" e "Centro Fornecedor". Preencher o campo "material" para consultas individuais. Executar a transação (F8).**

**34.11.3. Marcar a linha do material, clicar em "Histórico do pedido" e copiar o valor do campo "Referência". Sair da transação (F3). Repetir o passo 34.11.3 para os demais materiais.**

**Nota:** Usar o valor do campo "Referência" na transação MIGO para receber o material.


34.12. Entrada de Mercadorias:
**34.12.1. Digitar MIGO no SAP e pressionar Enter.**

**34.12.2. Preencher os campos, usando a informação do campo "Referência" (subcapítulo 3.10.4). Desmarcar o campo "Impressão via controle de mensagens". Executar a transação (Enter).**

**34.12.3. Gravar a transação.**

34.13. Transferência de Material entre Depósitos Conforme Necessidade:
**34.13.1. Execução manual:**

     **34.13.1.1. Digitar MF60 no SAP e pressionar Enter.**
   **34.13.1.2. Preencher os campos "Centro", "Depósito de retirada" e "Depósito reabastec.". Desconsiderar a mensagem "A seleção deveria ser mais restringida" (Enter).**
   **Nota:** Preencher "Depósito de retirada" com um valor ou intervalo, pois o sistema sugere a transferência conforme as necessidades.

     **34.13.1.3. Clicar em "Elementos reabastecm.".**
   **34.13.1.4. Marcar todos os materiais ("Marcar tudo"), clicar em "Propostas reabastec." e preencher o campo "DpReab" (manualmente ou coletivamente usando "Marcar tudo" e "Modif.em massa").**
   **34.13.1.5. Clicar em "Marcar tudo" e "Disponibilizar". Desconsiderar a mensagem de erro (Enter).**
   **34.13.1.6. Verificar os materiais disponibilizados e gravar a transação (Ctrl+S).**
**34.13.2. Execução com variantes:**

     **34.13.2.1. Acessar a transação MF60, clicar em "chamar variante" e inserir o usuário "polvarino" no campo "criado por".**
   **34.13.2.2. Executar as três variantes exibidas após o recebimento de materiais de fornecedores internos clicando duas vezes em cada uma e em "executar" (F8).**
   **34.13.2.3. Desconsiderar o alerta (Enter) e repetir o processo para as demais variantes.**

34.14. Transferência Manual de Material entre Depósitos:
**34.14.1. Digitar MB1B no SAP e pressionar Enter.**

**34.14.2. Preencher os campos. O campo "Imprim." deve estar em branco. Pressionar Enter.**

**Nota:** Os valores para o campo "Tipo movimento" estão no match code do campo. A tela seguinte varia conforme a opção selecionada.

  **Tipos de movimento:**

     * 415 Q: Transferência de estoque, projeto de fabricação para projeto de faturamento.
     * 415: Transferência de estoque livre para estoque de projeto.
     * 411 Q: Transferência de estoque de projeto para estoque livre.
     * 411: Transferência entre depósitos.
     * 459 e 343: Transferências de estoque em devolução para estoque livre.
     * 413: Transferência de estoque livre para estoque de cliente.
     * 411 E: Transferência de estoque de cliente para estoque livre.

  **34.14.3. Preencher o campo "Elemento PEP", o material, a quantidade e a unidade de medida (para evitar alterações indesejadas). Preencher o depósito receptor. Pressionar Enter.**

**34.14.4. Aceitar a mensagem de informação (Enter).**

**34.14.5. Preencher o campo "Elemento PEP" com o elemento que receberá o material. Pressionar Enter.**

**34.14.6. Gravar a transação (Ctrl+S).**

34.15. Consumo de Materiais por Lista de Picking:
**34.15.1. Digitar CO27 no SAP e pressionar Enter.**

**34.15.2. Preencher os campos "Ordem de produção" e "Centro" e executar a transação (F8).**

**34.15.3. Verificar o relatório, selecionar o material a ser preparado e clicar em "Efetuar picking".**

**Notas:**

     * Clicar em "Marcar tudo" para preparar todos os materiais da ordem.
     * Usar "Definir filtro" para criar filtros por colunas.
     * A coluna "Distribuição" mostra o endereço dos materiais nos depósitos.

  **34.15.4. Consumir os materiais: marcar todos os materiais ("Marcar tudo") e gravar a transação (Ctrl+S).**

34.16. Encerramento Técnico de Ordens de Produção:
**34.16.1. Digitar COHV no SAP e pressionar Enter.**

**34.16.2. Preencher os campos e executar a transação (F8).**

**Notas:**

     * Manter o campo "Ordens de Produção" marcado.
     * Preencher o campo "Planejador MRP" com valor individual, intervalo ou múltiplos valores.
     * Usar o status "ENTE" para excluir e "FORN" para buscar ordens.
     * Executar a seleção em um período definido, usando os campos de datas.

  **34.16.3. Selecionar as ordens, clicar em "Processamento em massa", "Funções" e marcar "Encerramento técnico". Pressionar Enter.**

**Nota:** O encerramento técnico é feito por job periodicamente. Apenas as ordens com pendências na COGI ou CO27 são listadas e devem ser tratadas com antecedência.

  **34.16.4. Clicar em "Processamento em massa" e em "Executar" para encerrar tecnicamente.**

**34.16.5. Rejeitar o encerramento de ordens com pendências clicando em "Não".**

**34.16.6. Clicar em "Lista" e "Renovar" para exibir as ordens não encerradas.**

**34.16.7. Verificar as ordens restantes, marcar a ordem e clicar em "Modificar".**

**Nota:** Atalho para a transação CO02.

  **34.16.8. Avaliar erros de consumo de materiais, pendências de consumo e falta de apontamento de operações na ordem de produção.**

  **34.16.9. Repetir os passos anteriores para encerrar a ordem tecnicamente.**


34.17. Estorno de Ordens de Produção - Operações:
**34.17.1. Digitar CO13 no SAP e pressionar Enter.**

**34.17.2. Preencher o campo "Ordem" e pressionar Enter.**

**34.17.3. Selecionar a operação a ser estornada e gravar a transação (Ctrl+S).**

**Notas:**

     * Alterar a data da operação para a data atual se for anterior ao período atual e a ordem não tiver o status "fornecido" ativo.
     * Não estornar operações com baixas de materiais para ordens com fornecimento ativo de meses anteriores ao mês atual.

  **34.17.4. Alterar o campo "Data lançamento" para a data atual e gravar (Ctrl+S).**

**Notas:**

     * Informar o responsável pelo Kanban (Sergio Golçalves de Jesus) ao estornar componentes com tarefas no PS para que ele faça o estorno no Kanban.
     * Anular a conclusão técnica da ordem se estiver ativada.
`