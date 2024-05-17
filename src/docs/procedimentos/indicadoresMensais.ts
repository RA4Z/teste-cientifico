export const indicadoresMensais = `
Todos os procedimentos dos indicadores mensais realizados pela secretária do PCP:
Todos os procedimentos abaixo são realizados pela secretária do PCP.

1. Prazo para Controle PCP

Procedimento Automatizado:

Acessar no dispositivo: GROUPS > BR_JGS_WM_LOGISTICA > PCP > Indicadores Automatizados > PRAZO DE CONTROLE

Abrir o arquivo "Prazos para controle PCP .xlsm".

Clicar em "Habilitar Conteúdo".

Certificar-se de estar na aba "Dados".

Executar as macros, uma de cada vez.

Salvar o arquivo no SharePoint: Intranet.weg > PCP > Indicadores de Diretoria > Prazos para controle PCP > 2020 > Salvar.

Sobregravar o arquivo: Salvar como > Computador > Pasta Padrão > Prazos para controle PCP.

Ajustar manualmente as nomenclaturas dos meses para WII e WEM, substituindo as siglas em inglês.

Procedimento Manual:

Utilizar a transação ZTPP 107 com as variantes: Alcidiok e czeiser.

As variantes abrangem as seguintes montagens:

Alcidiok: Mont A, Mont B, Mont C, Mont WII, Mont WSB, Mont AER.

czeiser: HISA, GTA_CAROL, MONT_WEM.

Seguir os passos abaixo para cada variante:

a) BACKLOG:

Na seção "Data Absoluta" a nível de cabeçalho:

No campo "Data-base do início", deixar o primeiro retângulo em branco e inserir o último dia do mês anterior no segundo retângulo. Executar.

Anotar o valor da somatória no final da tela e inseri-lo no campo "BACKLOG" da planilha correspondente à montagem.

Repetir o processo para todas as montagens.

Retornar à tela inicial da transação ZTPP 107.

Inserir a data de início do mês vigente no primeiro retângulo do campo "Data-base de início" e o último dia do mês desejado no segundo retângulo. Executar.

Exportar os dados para o Excel.

Aplicar filtro por mês.

Contar o número de projetos para cada mês, considerando a "Data base de início".

Inserir o valor encontrado no campo "PLANEJADO" da planilha da respectiva montagem, correspondente ao mês em análise.

Observar: Se junto ao número dos planejadores aparecerem as letras APA, APB, APC ou APR, somá-las separadamente dos planejadores e inserir os valores na planilha no campo "APROVAÇÃO (+)" com as letras correspondentes a cada montagem.

Os valores no campo "PLANEJADO" devem se referir ao mês em que a informação está sendo preenchida.

Dica: Extrair os dados de uma única vez para todos os meses e utilizar o filtro por mês no Excel.

b) Valores da WEM:

Criado por: czeiser

Variante: /MONT_WEM

GTA

Tela ZTPP107

Variante: czeiser

/Backlog GTA

Layout: /GTA_CAROL

No campo "Data Base do Fim":

Inserir no primeiro retângulo a data de um ano atrás.

Inserir no segundo retângulo o último dia útil anterior ao relatório.

Planejadores: 020 - 022

Exemplo: 01/01/2016 – 18/05/2018

O valor do backlog será a diferença entre o "TOTAL DA QUANTIDADE TEÓRICA" e o "TOTAL QUANTIDADE FORNECIDA".

Dados da semana: Obter na planilha da Silvia em Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Silvia/GTA/Programação.

Capacidade: Consultar Juliano.

Para fechar o mês: Inserir o backlog no mês anterior e reconfigurar o gráfico.

2. 120 Dias – Estoque sem Consumo – Mensal

Gerar após o 4º dia útil do mês.

Gerar individualmente para cada unidade.

Conferir se todos os relatórios possuem a mesma data de atualização.

As unidades 1204 e 1207 não possuem mais atualizações.

Acessar: Groups > PCP > Indicadores automatizados > Estoque sem consumo > arquivos individuais em excel.

Abrir o arquivo correspondente à unidade.

Acessar a aba "Macro".

Executar a macro.

Importante: O SAP precisa estar na página inicial para que a macro funcione.

3. Acompanhamento atividades da Engenharia

Obter o arquivo em Excel gerado pela transação CN47N no início de cada mês.

Variante: /AK0027

Layout: /AK0027

Configurar o arquivo Excel:

Excluir a coluna A.

Excluir as quatro primeiras linhas.

Aplicar filtro.

Na coluna A: Excluir tudo que estiver como "Centro" ou vazio.

Criar uma coluna entre as colunas F (Texto Tarefa) e G (WorkCntr) e nomeá-la "SITUAÇÃO" (em letras maiúsculas).

Substituir "." por "/" em todas as datas.

Criar duas colunas entre as colunas T (Unid) e U (Usu#rQtd.1) e nomeá-las "VALOR CONVERSÃO" e "VALOR R$", respectivamente.

Na coluna K (#ltFimBase): Excluir tudo que estiver fora do mês em questão, deixando apenas as informações do mês anterior. Exemplo: 01.07.2017 a 31.07.2017.

Renomear a coluna M para "Prazo" (em letras minúsculas). Inserir a fórmula: =SE(fim real>fim base;"Atraso";"No Prazo") e arrastá-la para as demais células.

Classificar a coluna F (Texto tarefa) de A a Z.

Pintar de azul todas as linhas que contiverem "PAM" na coluna F e inserir "APROVAÇÃO" na coluna "SITUAÇÃO".

Pintar de verde todas as linhas que contiverem "PCM" na coluna F e inserir "CERTIFICADO" na coluna "SITUAÇÃO".

Não contabilizar Sobressalentes.

Não contabilizar "PCM" com numeração, como PCM1, PCM2, etc.

Não contabilizar "PCM SOBRESSALENTE".

Pintar de amarelo todas as linhas que contiverem "PSM" na coluna F e inserir "SERVIÇOS" na coluna "SITUAÇÃO".

Excluir as linhas vazias da coluna "SITUAÇÃO".

Na coluna U (Valor Conversão), inserir o valor de conversão da moeda referente ao último dia do mês anterior. Consultar o site: https://www.x-rates.com/average/?from=CNY&to=BRL&amount=1&year=2021.

Na coluna V (Valor R$), inserir a fórmula: Usu#rVal.1 * Valor Conversão e arrastá-la para as demais células.

Observações:

Não contabilizar projetos de serviços da WII neste relatório. Excluí-los.

Centro Índia = 6200

Se o projeto PSM não apresentar valor ou mostrar 0,01:

Acessar a transação CJ20N.

Verificar se há apenas um PSM dentro do projeto. Se houver mais de um, comunicar o responsável pelo projeto para realizar a alteração. Se houver apenas um:

Conferir a data para verificar se pertence ao mês em questão.

Anotar o número da OV.

Acessar a transação VA03.

Inserir o valor líquido na planilha no lugar de 0,01.

Inserir tabela dinâmica:

Selecionar as colunas "SITUAÇÃO" e "VALOR R$".

Aplicar a função "Soma" no campo "VALOR R$" e formatar os números como moeda.

Inserir os valores na planilha "Valores Projetados Engenharia" no SharePoint: https://intranet.weg.net/br/energia-wm/pcp/INDICADORES%20DIRETORIA/Forms/AllItems.aspx?RootFolder=%2Fbr%2Fenergia%2Dwm%2Fpcp%2FINDICADORES%20DIRETORIA%2FValor%20Projetado%20pela%20Engenharia&FolderCTID=0x012000A81E4AA1256B9B45BCADD874FFEC4014&View=%7BD9372A2C%2DB564%2D4DEF%2D9867%2DA2BBF301B5CB%7D

Aplicar outra tabela dinâmica:

Selecionar as colunas "WorkCntr", "Texto centro de trabalho", "PRAZO" e "Status".

Utilizar o layout clássico.

Remover todos os subtotais.

Na coluna pintada de azul, inserir a fórmula: Prazo / Total Geral.

Calcular a média percentual dos centros de trabalho e preencher as informações da seguinte forma:

CTs iniciados com 20374... = Máquinas Síncronas

CTs iniciados com 20373... = Máquinas Indução

CTs iniciados com 20372... = Máquinas Industriais

CTs WII:

13022310: Projeto Mecanico WII Inducao

13022330: Verificacao WII Inducao

13022340: Revisao WII Inducao

13022370: Projeto Mecanico WII Inducao Serv

13022510: Projeto Mecanico WII Sincronas

13022530: Verificacao WII Sincronas

13022540: Revisao WII Sincronas

13022570: Projeto Mecanico WII Sincronas Se

Salvar o documento no SharePoint: https://intranet.weg.net/br/energia-wm/pcp/Base%20de%20dados%20indicadores/Forms/AllItems.aspx?RootFolder=%2Fbr%2Fenergia%2Dwm%2Fpcp%2FBase%20de%20dados%20indicadores%2FAcompanhamento%20ENG%20WEN%2F2021&FolderCTID=0x012000A3DBA7BA4E58984E97CB0EF49BFE10D7&View=%7B009CCEC5%2DAAEB%2D4139%2DA4D6%2D634405B96577%7D

4. Apresentação Comissão – Atendimento das OVs

Acessar o arquivo "Apresentação PM" na pasta: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Ester/Apresentação Comissão de Marketig.

Manter os vínculos do arquivo originais.

Na primeira página, atualizar o mês e o ano.

Capturar a tela da primeira página e colar a imagem em uma nova apresentação do PowerPoint.

No segundo slide, excluir o gráfico, capturar a tela e colar a imagem no novo documento do PowerPoint.

Obter os gráficos atualizados na planilha "PWQP" do departamento: https://intranet.weg.net/br/energia-wm/pcp/PQWP/Forms/AllItems.aspx?RootFolder=%2Fbr%2Fenergia%2Dwm%2Fpcp%2FPQWP%2FPWQP%20%2D%202023&FolderCTID=0x0120000B519C68D7B99B44B62206668429A4CE&View=%7B9425DBC4%2DC20B%2D4746%2D9E32%2D1B199036D397%7D

Acessar a aba "Gráficos comitê".

Observar os números e as porcentagens.

Copiar os gráficos e colá-los, um em cada página da apresentação do PowerPoint.

Salvar a apresentação na pasta: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Ester/Apresentação Comissão de Marketig/2023

Salvar a apresentação no SharePoint: https://intranet.weg.net/br/energia-wm/pcp/INDICADORES%20DIRETORIA/Forms/AllItems.aspx?RootFolder=%2Fbr%2Fenergia%2Dwm%2Fpcp%2FINDICADORES%20DIRETORIA%2FComiss%C3%A3o%20de%20Marketing%2F2023&FolderCTID=0x012000A81E4AA1256B9B45BCADD874FFEC4014&View=%7BD9372A2C%2DB564%2D4DEF%2D9867%2DA2BBF301B5CB%7D

Enviar a apresentação por e-mail:

Dados:

% Atendimento OV no prazo Serviços de Turbinas: Cobrar Rogerio.

% Ordens no Prazo EM Máquinas e Serviços: Cobrar Anderson Paulo da Luz.

% Ordens no Prazo EM Partes e Peças: Cobrar Anderson Paulo da Luz.

% Ordens no Prazo TGM: Cobrar Valter Macena Costa.

Enviar o gráfico "Atendimento a ordem de venda" para Dionisio, Alex Mehrhof (amehrhof@weg.net), Joseph Reber (JReber@weg.net), Nathan Murfield (NMurfield@weg.net), Richard Fesmire (RFESMIRE@weg.net), _GD_US_MN_MSP_MANAGERS (_GD_US_MN_MSP_MANAGERS@weg.net).

5. Apresentação Giro de Estoque

Abrir o arquivo a ser atualizado na pasta: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Ester/Giro de estoque SMI/2023.

Obter os gráficos atualizados no local: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Andersonpl/Estoques/2024.

Selecionar os gráficos conforme as unidades.

Recortar e colar os gráficos no documento Word, conforme o modelo existente.

A atualização dos gráficos é responsabilidade de Anderson Paulo da Luz ou seu substituto.

Os gráficos de 180 dias de estoque geralmente são atualizados posteriormente.

Informar Anderson sobre a necessidade de atualizar a apresentação quando os gráficos de 180 dias estiverem disponíveis.

Caso os gráficos de 180 dias não estejam atualizados na planilha, manter os dados do mês anterior no arquivo Word.

Após atualizar o documento, comunicar Anderson.

6. Arrumar planilha de indicadores diretoria industrial

Observação: Finalizar a planilha no final do mês, entre os dias 29 e 30.

Abrir a planilha: GROUPS > PCP > Suely >Indicadores Diretoria Industrial >INDICADORES 2020 > Indicadores diretoria industrial (excel).

a) Aba "OV atrasadas (2)":

Para JGS:

Copiar da linha 5 até a linha 15, colunas A até H.

Colar na linha 4, utilizando Ctrl+V na célula A4.

Na linha 15, substituir a informação pelo próximo mês.

Excluir os valores nas colunas F e G da linha 15.

Repetir o processo para SBC e WII.

b) Aba "Entrada de pedidos":

Não é necessário criar novas linhas.

c) Aba "Ord_Prod_Atraso":

Copiar da coluna D até N, linha 2 até 25.

Colar na célula C2, utilizando Ctrl+V.

Na célula N2, substituir a informação pelo próximo mês.

Excluir os valores nas colunas N das linhas em branco, para todas as unidades.

d) Aba "Mao_de_Obra":

Copiar todas as informações da coluna D até N, linhas 3 até 80.

Colar na célula C3.

Remover as cores verde e laranja das linhas na coluna M.

Na célula N3, substituir o mês pelo mês do fechamento em curso.

Excluir os valores de todas as células em laranja na coluna N.

Repetir o processo para a segunda tabela da mesma aba (informações de WEM, WII e TGM).

e) Abas "MO_JGS / MO_SBC / MOD TGM-WII-WEM":

Observar os gráficos.

f) Aba "Produtividade JGS":

Não é necessário alterar nada.

g) Aba "Ov prazo e dias de atraso":

Selecionar da linha 6 até a linha 16 e pressionar Ctrl+C.

Colar na célula "Meses" da linha 5, utilizando Ctrl+V.

Pressionar ESC.

Na célula "Meses" da linha 16, substituir o mês pelo mês do fechamento em curso.

Na linha 16, apagar todas as informações em branco, mantendo as células cinza com fórmulas.

Na célula AE16, substituir o mês pela nomenclatura em inglês.

h) Aba "OP prazo e dias de atraso":

Selecionar as linhas 97 até 107 e pressionar Ctrl+C.

Colar na célula "Meses" da linha 97, utilizando Ctrl+V.

Na célula "Meses" da linha 107, substituir o mês pelo mês do fechamento em curso.

Na linha 107, a partir da segunda coluna, excluir todas as informações.

Repetir o processo para a planilha "EM" na mesma aba.

i) Aba "Ent. Prazo PCP - Eng":

Selecionar da linha 6 até a linha 16 e pressionar Ctrl+C.

Colar na célula "Meses" da linha 5, utilizando Ctrl+V.

Pressionar ESC.

Na linha 16, substituir o mês.

Na linha 16, a partir da segunda coluna, apagar todas as informações.

7. Atendimento das Ordens de Vendas Mensal

Acessar a transação SAP ZTPP107.

Selecionar a variante criada por "guilhermed".

No campo "Data real do fim", inserir a data de início do mês até o último dia do mês.

Executar a transação.

Exportar para Excel: Clicar com o botão direito em qualquer lugar da tela, selecionar "Planilha eletrônica".

Selecionar todos os dados.

Aplicar filtro.

Criar 3 novas colunas entre as colunas I (Data Conclusão prog.) e J (Elemento PEP):

Selecionar a coluna J.

Pressionar Ctrl+++.

Nomear as novas colunas como "Dias", "Situação" e "Mês", respectivamente.

Na coluna J, inserir a fórmula: = coluna H 
(-) coluna I. 11. Ajustar o formato das células da coluna J para "GERAL". Se o formato for diferente, seguir o procedimento: * Selecionar a coluna J. * Clicar com o botão direito do mouse. * Selecionar "Formatar células". * Escolher a categoria "Geral". 12. Na coluna K ("SITUAÇÃO"), aplicar a fórmula:=SE(coluna J<=0;"No prazo";"Atraso"). 13. Pressionar Enter para sair da fórmula. 14. Na coluna L ("Mês"), aplicar a fórmula:=MÊS(coluna H).

15. Selecionar as linhas das colunas J, K e L e arrastar as fórmulas até o final da planilha.
16. Na coluna C ("Planejador MRP"), substituir os números pela letra correspondente à montagem, conforme a relação:
* A = 005, 008, 011, 012
* B = 035, 036
* C = 030
17. Considerar todos os Vestas como "NO PRAZO".
18. Criar uma tabela dinâmica:
* Selecionar toda a planilha.
* Clicar em "Inserir" > "Tabela dinâmica".
19. Retornar à aba "Sheet1".
20. Inserir outra tabela dinâmica.
21. Clicar com o botão esquerdo do mouse em "Contagem de...".
22. Selecionar "Configurações do Campo de Valor...".
23. Clicar em "Soma".
24. Salvar o arquivo na pasta "Ester > Atendimento de OVs semanal" com o nome: "ano_mês_MENSAL".
25. Enviar o arquivo para Alisson Mazuim para análise.
26. Após receber as informações atualizadas de Alisson, utilizá-las para preencher:
* Planilha "Resumo de indicadores".
* Planilha "Metas PWQP".
27. Enviar as planilhas por e-mail para gerentes e áreas, juntamente com a meta de giro de estoque fornecida por Anderson.

8. Atendimento de ordens de produção e OV GTA e Eólico

Primeira Parte - GTA:

Acessar a transação SAP ZTPP014.

Selecionar a variante criada por "czeiser".

Alterar a data para o início e o final do mês.

Executar a transação.

Selecionar as colunas "Quantidade", "Unidade de Medida" e "Qtd Materiais atendidos".

Aplicar a função "AutoSoma".

Segunda Parte:

Abrir o arquivo "Resumo de indicadores" no SharePoint: PCP > Indicadores de diretoria > Resumo de Indicadores (excel).

Na aba "Dado":

Obter os valores da planilha gerada na etapa anterior (ZTPP014).

Copiar o valor da coluna I ("Quantidade") e colar na célula correspondente ao mês em questão na linha 21 ("total entregue") da planilha "Resumo de indicadores".

Copiar o valor da coluna K ("qtd materiais atendidos") e colar na célula correspondente ao mês em questão na linha 22 ("entregue no prazo") da planilha "Resumo de indicadores".

Observar: A coluna e a linha de destino serão diferentes conforme o mês do fechamento.

Salvar a planilha gerada na transação ZTPP014 na pasta: GROUPS > PCP > Caroline > Atendimento GTA > excel 2003 ano_mês (exemplo: 2020_06).

Aba GTA e eólico:

a) GTA - BOB:

Acessar a transação SAP COOIS.

Selecionar a variante criada por "czeiser": /Aten_BOB_GTA.

No campo "Data real do fim", inserir a data de início do mês anterior até o final do mês anterior.

Executar a transação.

Selecionar a coluna "Fim real (data)".

Aplicar filtro.

Inserir novamente as datas de início e fim do mês anterior.

Executar a transação.

Selecionar novamente a coluna "Fim real (data)" e ordenar de forma crescente.

Exportar para Excel: Clicar com o botão direito do mouse em qualquer lugar da tela, selecionar "Planilha eletrônica".

Criar duas novas colunas:

Coluna I: Nomear como "Dias".

Coluna J: Nomear como "Situação".

Selecionar da coluna A até a coluna J e aplicar filtro (clicar em "Dados" > "Filtro").

Na coluna I ("Dias"), inserir a fórmula: =G2-F2 (G2 = "Data fim real da execução", F2 = "Última data fim de execução").

Na coluna J ("Situação"), inserir a fórmula: =SE(I2<=0;"no prazo";"atraso") (I2 = "Dias").

Selecionar as células I2 e J2 e arrastar as fórmulas até o final da planilha.

Calcular as seguintes informações:

Total entregue: Somar todos os valores na coluna J.

Total entregue no prazo: Filtrar a coluna J para exibir apenas "NO PRAZO" e somar os valores.

Dias de atraso: Filtrar a coluna J para exibir apenas "ATRASO" e somar os valores na coluna I.

Acessar o arquivo "Resumo de indicadores" no SharePoint: PCP > Indicadores de diretoria > Resumo de Indicadores 2020 (excel) > aba GTA e Eólico.

Preencher as células correspondentes ao mês em questão nas linhas 6 e 7 da coluna "BOB" com os valores de "total entregue" e "total entregue no prazo" calculados anteriormente.

Preencher a célula correspondente ao mês em questão na linha 20 da coluna "BOB" com o valor de "dias de atraso" calculado anteriormente.

b) GTA - MONT:

Acessar a transação SAP COOIS.

Selecionar a variante criada por "czeiser": /Aten_BOB_GTA.

No campo "Data real do fim", inserir a data de início do mês anterior até o final do mês anterior.

Executar a transação.

Selecionar a coluna "Fim real (data)" e ordenar de forma crescente.

Exportar para Excel: Clicar com o botão direito do mouse em qualquer lugar da tela, selecionar "Planilha eletrônica".

Criar duas novas colunas:

Coluna J: Nomear como "Dias".

Coluna K: Nomear como "Situação".

Selecionar da coluna A até a coluna K e aplicar filtro (clicar em "Dados" > "Filtro").

Na coluna J ("Dias"), inserir a fórmula: =I2-G2 (I2 = "Data fim real", G2 = "Data conclusão (prog.)").

Na coluna K ("Situação"), inserir a fórmula: =SE(J2<=0;"no prazo";"atraso") (J2 = "Dias").

Selecionar as células J2 e K2 e arrastar as fórmulas até o final da planilha.

Calcular as seguintes informações:

Total entregue: Somar todos os valores na coluna K.

Total entregue no prazo: Filtrar a coluna K para exibir apenas "NO PRAZO" e somar os valores.

Dias de atraso: Filtrar a coluna K para exibir apenas "ATRASO" e somar os valores na coluna J.

Acessar o arquivo "Resumo de indicadores" no SharePoint: PCP > Indicadores de diretoria > Resumo de Indicadores 2020 (excel) > aba GTA e Eólico.

Preencher as células correspondentes ao mês em questão nas linhas 9, 10 e 22 da coluna "MONT" com os valores de "total entregue", "total entregue no prazo" e "dias de atraso" calculados anteriormente.

9. Colaboradores (mensal)

Obter o arquivo base de Jucimar Cesar Eckert por e-mail.

Copiar os dois anexos em Excel do e-mail.

Colar os anexos no SharePoint: PCP > Indicadores de diretoria > Colaboradores – MOD e MOI.

Dica: Abrir a pasta no SharePoint com o Explorador de Arquivos para facilitar a colagem dos arquivos.

Acessar o arquivo "Colaboradores 2020.xlsm" em: GROUPS > PCP > Suely > Indicadores Diretoria Industrial > INDICADORES 2020.

Abrir o arquivo.

Acessar a aba "Macro" e executar a macro.

Verificar se os dados foram preenchidos na aba "2020" para o mês do fechamento em curso.

Salvar o arquivo.

Segunda Parte:

Abrir o arquivo "Indicadores Diretoria Industrial (excel)" em: GROUPS > PCP > Suely > Indicadores Diretoria Industrial > INDICADORES 2020.

Acessar a aba "Mao_de_obra".

Copiar todas as informações da coluna D até a coluna N, linhas 3 até 80.

Colar na célula C3.

Remover as cores verde e laranja das linhas na coluna M.

Na célula N3, substituir o mês pelo mês do fechamento em curso.

Excluir os valores de todas as células em laranja na coluna N.

Acessar o arquivo "Colaboradores 2020.xlsm" em: GROUPS > PCP > Suely > Indicadores Diretoria Industrial.

Abrir o arquivo.

Obter os valores de colaboradores da seguinte forma:

Somar os valores de MOD de cada departamento.

Colar o valor na coluna N da linha laranja correspondente ao departamento na aba "Mao_de_obra" da planilha "Indicadores Diretoria Industrial (excel)".

Repetir o processo para os valores de MOI.

As linhas verdes são preenchidas apenas no início do ano. Obter as informações das seguintes secretárias:

Michelle Salvador Zardo (secretária da Diretoria Industrial):

JGS: Caldeiraria, Usinagem, Montagem, Bobinagem, PCP, Engenharia Industrial, Turbinas

Francisco Freire Ribeiro Neto (gerente de SBC):

SBC: Fabricação Mecânica, Serviços, PCP, Qualidade, Administrativo, Manutenção, Processos

Keetlin Mara Olos (secretária das Engenharias):

JGS: Desenvolvimento do Produto, Engenharia do Produto

Sandra Petry Hafemann (secretária da Superintendência):

Suprimentos, Qualidade

Repetir o processo para a segunda tabela da mesma aba (informações de WEM, WII e TGM).

Obter as informações por e-mail:

WEM: April Bjork (abjork@weg.net)

Abrir o arquivo Excel recebido por e-mail.

Acessar a aba "Data".

Aplicar filtro na coluna B, selecionando apenas o mês do fechamento em curso.

Somar os valores na coluna I ("Direct employees") para obter o valor de MOD.

Somar os valores na coluna J ("Indirect employees") para obter o valor de MOI.

Inserir os valores na aba "Mao_de_obra" da planilha "Indicadores Diretoria Industrial (excel)".

WII: Arunkumar G

Seguir o mesmo procedimento da WEM.

TGM: Sandra Petry Hafemann

Obter as informações por e-mail.

Somar os valores de cada coluna.

Preencher os valores de MOD e MOI na aba "Mao_de_obra" da planilha "Indicadores Diretoria Industrial (excel)".

Salvar o arquivo.

10. Despesas gerenciáveis – Mensal

Obter as informações de Custos:

Despesas gerenciáveis: Jucimar Cesar Eckert

ROL: Cleber Daniel Bahr

Cobrar as informações caso não sejam recebidas até o 7º dia útil do mês.

Abrir o arquivo "Despesas gerenciáveis . ROL" em: GROUPS > PCP > Suely> Indicadores Diretoria Industrial> PASTA PADRÃO (Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Suely/Indicadores Diretoria Industrial/PASTA PADRÃO).

a) Aba "Despesas S ROL":

Não é necessário realizar alterações, pois a aba contém fórmulas que puxam as informações das outras abas.

b) Aba "ROL":

Copiar a coluna do mês do fechamento em curso do arquivo "ROL_ WEN_Brasil" recebido por e-mail de Cleber Daniel Bahr, da linha 2 até a linha 8.

Colar os valores na aba "ROL" da planilha "Despesas gerenciáveis . ROL" no GROUPS.

Desconsiderar o valor da TGM na linha 8 ("Total considerando as exclusões entre intercompany").

c) Aba "Despesas gerenciáveis (R$)":

Obter as informações por e-mail de Jucimar Cesar Eckert.

Para cada centro de custo:

Copiar o nome do centro de custo da planilha "Despesas gerenciáveis . ROL" na pasta padrão.

Colar o nome do centro de custo na planilha recebida por e-mail de Jucimar Cesar Eckert e pressionar Ctrl+L para localizar o centro de custo.

Localizar o valor de "Despesas gerenciáveis" correspondente ao centro de custo e ao mês do fechamento em curso.

Copiar o valor e colar na célula correspondente na aba "Despesas gerenciáveis (R$)" da planilha "Despesas gerenciáveis . ROL" na pasta padrão.

Salvar o arquivo.

11. Documento para consulta dos indicadores

a) Kanban (JGS, Turbinas e SBC):

Local: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Indicadores Automatizados/KANBAN

Na virada do ano:

Não é necessário criar uma nova planilha, pois os dados do ano anterior ficam salvos no histórico do SharePoint.

Apagar as informações das abas de cada mês.

Atualizar os dias dos feriados na aba "Feriados".

Planilha base de dados: Q:/APPS/SAP/EP0/PCP_WEN_Indicadores (arquivo: BR_PS_0070_132_S_IND_ATD_KANBAN.xls.xls)

A planilha base contém os dados do ano todo.

b) CRP (WEN, WII, WEM):

Local: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Indicadores Automatizados

As datas no CRP são calculadas por fórmulas, não sendo necessário atualizar a planilha na virada do ano.

Na semana 51, ajustar a ordem das semanas nas abas "MACRO", "MACRO_1205" e "1206" para não incluir as semanas das férias coletivas (52, 1 e 2).

c) Planilha de Impressão de Ordens de Produção (Alternadores):

Local: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Lucas/Impressao_Alternadores

Colaboradores que utilizam a planilha:

Dirceu (ddenk)

Pedro (pedrosergio)

Bobinagem (login da Joice Flores)

Arquivos utilizados para a impressão:

"SEQUENCIADOR_MONTAGEM.v2.xlsm"

"LISTA_MATERIAIS.v2.xlsm"

"ArquivoTexto.txt"

"Descricao_Ordem.txt"

Para imprimir as ordens:

Abrir a planilha "SEQUENCIADOR_MONTAGEM.v2.xlsm".

Inserir o número da ordem e da operação nos campos correspondentes.

Alterações necessárias no código da macro caso outro colaborador utilize a planilha:

Ajustar o código conforme as permissões de acesso do novo colaborador.

Configurações do SAP necessárias:

Definir "MACRO_CO27" como layout padrão na transação CO27.

Definir "/ATRASO_PLA" como layout padrão na transação COOIS.

O SAP Logon precisa estar instalado no computador do colaborador.

d) Power BI:

Local dos cronogramas e relatórios: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Indicadores Automatizados/Power BI

Os relatórios estão publicados no site do Power BI:

Login: pcpjgs@wegpcp.onmicrosoft.com

Senha: Weg2021*

Link: https://app.powerbi.com/groups/me/dashboards/c3214ae9-3e50-4b08-9474-14133ed1d3c8?noSignUpCheck=1

Links para acesso aos relatórios:

Atendimento de OV: https://app.powerbi.com/view?r=eyJrIjoiMmEwNTE1ZTQtM2VmYS00YmNkLWE1ZTgtZDYxMTdjNzgxYjllIiwidCI6Ijk3ZTcxZjMwLTI5YjUtNDNmMi1iZjRlLTdiNThjYmE5MTVmNCJ9

Entrada de Pedidos: https://app.powerbi.com/view?r=eyJrIjoiMGIyYjNiNmEtNmQ0Zi00NDY4LTk4ZGUtZGRjNTc2MzYxOWY0IiwidCI6Ijk3ZTcxZjMwLTI5YjUtNDNmMi1iZjRlLTdiNThjYmE5MTVmNCJ9

Produtividade: https://app.powerbi.com/view?r=eyJrIjoiZjNhMWQzYWUtYzg5ZS00NGE0LWE0YjktNWY4YmE3YTZmODhkIiwidCI6Ijk3ZTcxZjMwLTI5YjUtNDNmMi1iZjRlLTdiNThjYmE5MTVmNCJ9

12. Encerramento de projetos de Vendas – Mensal

Acessar o relatório de projetos no Business Intelligence (BI).

Inserir a data de início e fim do mês anterior.

Selecionar a opção "Elemento PEP".

Exportar o relatório para Excel.

No Excel, aplicar filtro na coluna "Elemento PEP".

Corrigir os nomes dos projetos que estiverem com mais de uma letra (exemplo: O&M, WEM, etc.).

Copiar todos os "Elementos PEP".

Acessar a transação SAP CN43N.

Selecionar o Perfil info PS 0000000000001.

Selecionar a variante criada por "ALCIDIOK": /AK0018.

Colar os "Elementos PEP" copiados do BI.

Executar a transação.

Exportar para Excel: Clicar com o botão direito do mouse em qualquer lugar da tela, selecionar "Planilha eletrônica".

Selecionar da coluna A até a coluna I e todas as linhas com informações.

Aplicar bordas nas células selecionadas.

Copiar todas as informações do Excel.

Colar as informações no corpo de um e-mail, juntamente com o seguinte texto:

We are realizing an audit for the process to closure in project.

Below are the projects pending that have been billed in [Mês] 2020 that have not yet closures with TECO or FNBL.

Monthly we will audit it.

********************************************************************************************************************************************

Conforme aprovado em Ata Semanal da Diretoria, estamos realizando o processo de auditoria no encerramento dos projetos. 

Abaixo estão as pendências de projetos faturados em [Mês] 2020 os quais ainda não foram feitos os devidos encerramentos ENTE ou FAFI.

Mensalmente será realizada esta auditoria.
content_copy
Use code with caution.

Substituir "[Mês]" pelo mês correspondente.

Enviar o e-mail para:

Todas as pessoas listadas na coluna "Applicant" da planilha gerada no Excel.

Os superiores de cada pessoa listada na coluna "Applicant".

Adicionar os seguintes destinatários em cópia:

Suely Verbinen Busch

Juliano Krueger

Jucimar Cesar Eckert

Neri Miguel Venturi

Emanuel Pacheco

Paulo Leonardo da Silva Sinoti

Anderson Fernandes

Edgar Luis Daleffe

Valdemir Antonio Goncalves

Alexandre dos Santos Fernandes

Gustavo Balsanelli Sgrott

Rodrigo Vallandro de Carvalho

Leonardo Sohn Nogueira Ramos Filho

13. Entrada de pedidos Mensal

Acessar: Intranet.weg > relatórios > entradas de pedidos – mensal.

O relatório estará inicialmente em "Categorias livres".

Arrastar "Local de Negócio" para as linhas.

Na coluna "Estrut.", apagar todas as entradas "WEG", mantendo apenas as unidades da WEN.

Acessar a tela de variáveis.

Alterar a data para o último dia do mês anterior.

Copiar os valores da coluna do último mês.

Colar os valores na tabela da pasta da Suely em: GROUPS > PCP > Indicadores de Diretoria Industrial > Indicadores 2020 > Indicadores Diretoria Industrial (arquivo excel).

Somar os valores de Jaraguá do Sul e São Bernardo do Campo.

Transformar os valores em milhões:

Aplicar a fórmula: =valor*1000.

Arrastar a fórmula para baixo para aplicar a todos os valores.

O Eólico não entra na contagem, pois pode distorcer os valores.

Obter a cotação do dólar no primeiro dia útil do mês em: https://www.x-rates.com/average/?from=USD&to=BRL&amount=1&year=2023.

Salvar o arquivo.

Enviar o arquivo por e-mail conforme a lista abaixo.

14. Fazer Cobrança Por e-mail início do mês (1° dia útil do mês)

Entrega para 5° dia útil:

Indicadores de Produtividade JGS e SBC - Jorge Fernando Hoespers Boeck

PWQP - Rogerio Daniel

Indicadores TGM - Valter Macena Costa

Entrega para 4° dia útil:

Indicadores de Produtividade WII - Arunkumar Ganesan

Indicadores de Produtividade WEM - April Bjork

Entrega para 5° dia útil:

Indicador de Atendimento Kanban - WII - Arunkumar Ganesan

Sem data definida:

Indicador de Atendimento Kanban - Start Up - André Copetti

Jorge Fernando Hoepers Boeck substitui Sandra nesse envio.

Entrega para 5° dia útil:

Indicadores WSB - Rogerio Daniel

Indicadores de Produtividade da Engenharia - Andressa Luise Pisetta Bachion

Entrega para o 10° dia do mês:

Relatório de Despesas - Jucimar Cesar Eckert

Indicadores Compras!

Kamilly envia os indicadores entre os dias 13 e 15 do mês.

15. Global Efficiency – Mensal

Gerar somente após a geração de todos os indicadores de produtividade.

Local: GROUPS > PCP > Suely > Indicadores Diretoria Industrial > Indicadores 2020 > Global ID Efficiency 2020.xlsx (arquivo excel).

Não atualizar o arquivo.

Salvar como PDF:

Arquivo > Salvar como > Indicadores 2020 > Tipo: PDF

Sobregravar o arquivo existente.

Enviar o arquivo PDF para Juliano.

16. Horas apontadas – mensal

Realizar este procedimento após gerar os relatórios de produtividade mensal de JGS e SBC.

Cobrar Jorge Fernando Hoespers Boeck caso não haja informações disponíveis.

Acessar o arquivo "Horas apontadas WEN" no SharePoint: PCP > Indicadores de diretoria > Indicadores mensais > horas apontadas WEN-WSB.

Abrir o arquivo Excel.

Na aba "WEN":

Preencher as horas apontadas do mês com as informações do arquivo "Produtividade – MENSAL - JGS" no SharePoint: PCP > indicadores (lado esquerdo) > produtividade WEN > produtividade mensal.

Na aba "SBC":

Repetir o processo realizado para JGS.

Salvar o arquivo de duas maneiras:

Salvar no SharePoint.

Salvar na pasta "PASTA PADRÃO" em GROUPS > PCP > Suely > Indicadores Diretoria Industrial, sobregravando o arquivo "Horas apontadas WEN".

17. Horas extras

Obter o arquivo base de Jucimar Cesar por e-mail.

Consultar a lista de centros de custo (CC) dos departamentos no arquivo de referência.

No arquivo base, pesquisar cada CC e verificar os campos "Horas Extras Indireto" e "Horas Extras Direto".

Utilizar os dados da coluna C, que correspondem ao último mês (mês do fechamento em curso).

Somar todos os CC de cada departamento.

Inserir os valores na planilha "Controle Horas Extras" na pasta "PASTA PADRÃO" em: Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Suely/Indicadores Diretoria Industrial/PASTA PADRÃO.

Abrir o book de JGS e verificar se os valores estão atualizados.

Observar: Este indicador considera os últimos 12 meses, não apenas o ano corrente.

18. Indicador de Atendimento da Engenharia – WEM

Acessar o site www.myweg.net.

Selecionar o idioma inglês.

Abrir o SAP em inglês.

Executar a transação CN47N.

Inserir o Perfil info PS 000000000001.

Selecionar a variante /ENG_3200.

Após gerar os dados, exportar para Excel:

Clicar com o botão direito do mouse em qualquer lugar da tela.

Selecionar "Spreadsheet...".

Acessar a pasta "WEN / EM - Buying and Selling Materials" no SharePoint: PCP > WEN / EM - Buying and Selling Materials.

Abrir o último arquivo atualizado.

Salvar o arquivo com um novo nome, correspondente ao mês em curso, na pasta "2020" dentro da pasta "Atendimento Engenharia WEM".

Exemplo: "Atendimento Engenharia WEM - Maio 2020.xlsx".

Copiar as informações, incluindo os títulos, do relatório gerado na transação CN47N.

Colar os dados como valores na célula A1 da aba "Plan 1" da planilha do indicador.

Excluir qualquer informação adicional presente na planilha, além dos dados colados.

Excluir a coluna A.

Aplicar filtro.

Na coluna A, filtrar os campos "Plant" e "(Vazias)".

Excluir as linhas filtradas.

Selecionar as colunas de A a K e copiar.

Colar os dados na célula A1 da aba "Data".

Arrastar as fórmulas das colunas L, M, N e O até a última linha com dados, na aba "Data".

Retornar à aba "Plan1" e copiar as colunas de L a V.

Colar os dados na célula P1 da aba "Data".

Acessar a aba "Delivery" e ajustar o filtro para o mês e ano desejados.

Considerar apenas as tarefas com status "CNF" (não considerar "CRTD", "REL", "PCNF").

Verificar se os valores na coluna F ("On Time Delivery") precisam ser ajustados. A fórmula da coluna deve ser: =on time / Total geral.

Salvar a planilha.

Localizar a planilha no SharePoint.

Enviar a planilha por e-mail com o seguinte texto:

Good Morning [ou Good afternoon],

Follows the Engineering KPI of [Mês]/2020
content_copy
Use code with caution.

Substituir "[Mês]" pelo mês correspondente.

Enviar o e-mail para James Alberto Giacomazzi Junior (jamesg@weg.net).

Adicionar os seguintes destinatários em cópia:

Juliano Krueger (julianok@weg.net)

Marguit Friedemann Sbors (marguit@weg.net)

Andressa Luise Pisetta Bachion (andressab@weg.net)

19. Indicador Kanban SBC

Acessar o SharePoint: PCP > WSB.

Abrir o último arquivo atualizado do indicador Kanban SBC.

Salvar o arquivo com um novo nome, correspondente ao próximo mês.

Abrir o arquivo salvo com o novo nome.

Acessar a aba do último mês atualizado.

Copiar da coluna C até a coluna M, linha 3 até 36.

Acessar a aba do próximo mês.

Colar as informações na célula C3 como fórmula (clicar com o botão direito do mouse > "Colar especial" > "Fórmulas").

Retornar à aba do mês anterior e colar as informações como valor (clicar com o botão direito do mouse > "Colar especial" > "Valores").

Acessar a pasta "GROUPS" e procurar o job com as informações do Kanban: /brjgs100/DFSWEG/APPS/SAP/EP0/PCP_WEN.

Abrir o arquivo "Indicador_kanban_diário_WSB".

Configuração do Job:

Excluir as 4 primeiras linhas.

Excluir a primeira coluna (coluna A).

Selecionar da coluna A até a coluna N.

Aplicar filtro (clicar em "Dados" > "Filtro").

Na coluna "Centro" (coluna A), desmarcar o centro 1201 e excluir todas as linhas azuis.

Remover o filtro da coluna "Centro" (coluna A).

Substituir "." por "/" nas colunas G, H e I:

Clicar em "Página Inicial" > "Localizar e selecionar" > "Substituir".

Inserir "." no campo "Localizar" e "/" no campo "Substituir por".

Clicar em "Substituir tudo".

Ordenar a coluna "Fim real" (coluna I) de A a Z (do mais antigo para o mais novo).

Na coluna "Fim real" (coluna I), aplicar filtro e excluir todas as datas anteriores ao mês em curso e posteriores ao mês em curso.

Observar: O mês anterior é fechado contando o primeiro dia útil do mês vigente. O mês vigente começa a ser contado a partir do segundo dia.

Remover o filtro.

Copiar da coluna A até a coluna I, até a última linha com informações.

Acessar a planilha do Kanban no SharePoint.

Colar os dados como valores na aba "CN47N".

Arrastar as fórmulas das colunas J, K e L até a última linha com informações.

Retornar à planilha do job e copiar as colunas J, K, L, M e N.

Colar os dados a partir da coluna M na planilha do Kanban no SharePoint.

Na coluna M ("US"), aplicar filtro e selecionar o código "MOT".

Se houver algum código na coluna N ("US2"), excluí-lo.

Remover o filtro.

Na coluna M ("US"), aplicar filtro e selecionar o código "MTM".

Se houver algum código na coluna N ("US2"), excluí-lo.

Remover o filtro.

Na coluna M ("US"), aplicar filtro e selecionar o código "IMOT".

Observar: SBC não utiliza o código "IMOT". Substituí-lo por "EC".

Remover o filtro.

Acessar a aba "PRJ ATRASO_NO PRAZO".

Clicar com o botão direito do mouse na tabela dinâmica e selecionar "Atualizar".

Acessar a aba do mês em curso.

Conferir se os valores da tabela dinâmica conferem com os valores da aba.

Acessar a aba "Resumo" e substituir a data pela data da geração do relatório.

Salvar o arquivo.

Sobregravar o arquivo.

Salvar o arquivo na pasta padrão: "Salvar como" > "Pasta padrão" > "Gráfico atendimento Kanban WSB".

20. Procedimento Indicador Kanban WEN Brasil

Um job é gerado todo domingo de madrugada e salvo na pasta: Q:/APPS/SAP/EP0/PCP_WEN_Indicadores.

Informações do Start Up: Obtidas com André Copetti.

Nomenclatura dos Jobs:

JGS: BR_PS_0070_132_S_IND_ATD_KANBAN.xls

Turbinas: Turbinas

Geração do Job:

Caso seja necessário gerar um novo job, utilizar a transação CN47N.

Configurações do Job:

Para Jaraguá do Sul:

Variante: alcidiok

Layout: /ak0040

Para São Bernardo do Campo:

Criado por: francianec

Variante: /FC0001

Observação: O job pode ser gerado em background (BACK GROUND) para um endereço de e-mail, pois o arquivo pode ser grande e demorar para ser gerado normalmente.

Informação Complementar:

Para incluir mais informações no relatório:

Clicar no ícone "Seleções Dinâmicas" (Shift+F4).

Procurar por "Campo usuário operação".

Selecionar "Campo de usuário".

Inserir as siglas utilizadas para os componentes das máquinas.

Em "Unid.organ. operação" – Centro, inserir o centro da unidade (WEN 1200; TURBINAS 1205; SBC 1201; WII 6200).
* Selecionar apenas o centro desejado para gerar a informação.

Após a geração do Job:

Abrir o Excel.

Clicar em "Arquivo" > "Abrir" > "Computador" > "Área de trabalho".

Selecionar "Todos os arquivos".

Selecionar o arquivo ".txt" gerado pelo job.

Clicar em "Abrir".

Salvar o arquivo com um novo nome, correspondente ao próximo mês.

Abrir o arquivo salvo com o novo nome.

Acessar a aba do último mês atualizado.

Copiar da coluna C até a coluna M, linha 3 até 36.

Acessar a aba do próximo mês.

Colar as informações na célula C3 como fórmula (clicar com o botão direito do mouse > "Colar especial" > "Fórmulas").

Retornar à aba do mês anterior e colar as informações como valor (clicar com o botão direito do mouse > "Colar especial" > "Valores").

Configuração do Job:

Excluir as 4 primeiras linhas.

Excluir a primeira coluna (coluna A).

Selecionar da coluna A até a coluna N.

Aplicar filtro (clicar em "Dados" > "Filtro").

Na coluna "Centro" (coluna A), desmarcar o centro 1200 e excluir todas as linhas azuis.

Remover o filtro da coluna "Centro" (coluna A).

Substituir "." por "/" nas colunas G, H e I:

Clicar em "Página Inicial" > "Localizar e selecionar" > "Substituir".

Inserir "." no campo "Localizar" e "/" no campo "Substituir por".

Clicar em "Substituir tudo".

Ordenar a coluna "Fim real" (coluna I) de A a Z (do mais antigo para o mais novo).

Observação: O mês anterior é fechado contando o primeiro dia útil do mês vigente. O mês vigente começa a ser contado a partir do segundo dia.

Na coluna "Fim real" (coluna I), aplicar filtro e excluir todas as datas anteriores ao mês em curso e posteriores ao mês em curso.

Acessar o SharePoint: Indicadores de Diretoria > Indicador de Atendimento Kanban JGS > Kanban Mensal > 2020 > Ultimos arquivos atualizados (JGS e Turbinas).

Link JGS: https://intranet.weg.net/br/energia-wm/pcp/INDICADORES%20DIRETORIA/Forms/AllItems.aspx?RootFolder=%2Fbr%2Fenergia%2Dwm%2Fpcp%2FINDICADORES%20DIRETORIA%2FIndicador%20de%20Atendimento%20Kanban%20JGS%2FKanban%5Fsemanal%2F2020&FolderCTID=0x012000A81E4AA1256B9B45BCADD874FFEC4014&View=%7BD9372A2C%2DB564%2D4DEF%2D9867%2DA2BBF301B5CB%7D#InplviewHashd9372a2c-b564-4def-9867-a2bbf301b5cb=Paged%3DTRUE-p_SortBehavior%3D0-p_FileLeafRef%3D2020%255f04%255f13%255fTurbinas%252exls-p_ID%3D1917-RootFolder%3D%252fbr%252fenergia%252dwm%252fpcp%252fINDICADORES%2520DIRETORIA%252fIndicador%2520de%2520Atendimento%2520Kanban%2520JGS%252fKanban%255fsemanal%252f2020-PageFirstRow%3D31

Link Turbinas: https://intranet.weg.net/br/energia-wm/pcp/INDICADORES%20DIRETORIA/Forms/AllItems.aspx?RootFolder=%2Fbr%2Fenergia%2Dwm%2Fpcp%2FINDICADORES%20DIRETORIA%2FIndicador%20de%20Atendimento%20Kanban%20JGS%2FKanban%5Fmensal&FolderCTID=0x012000A81E4AA1256B9B45BCADD874FFEC4014&View=%7BD9372A2C%2DB564%2D4DEF%2D9867%2DA2BBF301B5CB%7D

Abrir a planilha de JGS.

Retornar à planilha gerada pelo job.

Copiar da coluna A até a coluna I, a partir da segunda linha.

Colar os dados como valores na aba "CN47N" da planilha do SharePoint.

Arrastar as fórmulas das colunas J, K, L, S, T, U, V e W até a última linha com informações.

Retornar à planilha do job e copiar as colunas J, K, L, M e N.

Colar os dados a partir da coluna M na planilha do Kanban no SharePoint.

Na coluna M ("US"), aplicar filtro e selecionar o código "BE" (bobina do estator).

Verificar se há o código "BT" nas colunas U e V. Se houver, excluir a linha correspondente.

Remover o filtro.

Verificar se há algum projeto na coluna W. Se houver, excluir as linhas correspondentes.

Na coluna M, substituir:

"TES" por "ATE" na coluna N quando o código da coluna N for "AT".

"BT" por "BTE" na coluna N quando o código da coluna N for "BT".

Aplicar filtro para facilitar as alterações.

Remover o filtro.

Na coluna M ("US"), selecionar apenas "MTM" (Montagem).

Na coluna N ("US.2"), selecionar apenas as linhas com "B" e "C".

Unir as letras "B" e "C", formando "BC", e arrastar para as demais linhas com "B" e "C".

Remover o filtro.

Acessar a aba "PRJ ATRASO_NO PRAZO".

Clicar com o botão direito do mouse na tabela dinâmica e selecionar "Atualizar".

Acessar a aba do mês em curso.

Na linha 50 ("TESTE BTE"), excluir as informações das colunas azuis.

Copiar da coluna E até a coluna K da linha 51 ("TESTE ATE").

Colar as informações na linha 50 ("TESTE BTE") como fórmula (clicar com o botão direito do mouse > "Colar especial" > "Fórmulas").

Conferir se o valor da aba "PRJ ATRASO_NO PRAZO" confere com o valor da aba do mês em curso (desconsiderar o "RC INJ").

Se os valores não conferirem:

Copiar os códigos da aba "PRJ ATRASO_NO PRAZO".

Colar os códigos na aba do mês em curso.

Verificar se as linhas possuem fórmulas. Se não tiverem, copiar da linha seguinte e colar como fórmula.

Relação de códigos:

MOT: AT ou BT

TES: AT ou BT

MTM: A, B ou C

RC: BOB, CAL ou INJ

Ensaio BT (Alternadores):

Acessar a transação COOIS.

Selecionar a variante "czeiser": /ATEND_TEST (Atendimento Teste do GTA).

No campo "Data real fim", inserir a data de início do mês até o último dia do mês.

Executar a transação.

Ordenar a coluna "Fim real (data)".

Selecionar novamente "Fim real (data)", aplicar filtro e inserir as datas de início e fim do mês.

Exportar para Excel: Clicar com o botão direito do mouse em qualquer lugar da tela, selecionar "Planilha eletrônica".

Criar duas colunas após "Txt breve operação":

Coluna "DIAS".

Coluna "SITUAÇÃO".

Na coluna "DIAS", inserir a fórmula: =G2-F2 (G2 = "Data fim real da execução", F2 = "Última data fim de execução").

Na coluna "SITUAÇÃO", inserir a fórmula: =SE(I2<=0;"no prazo";"atraso") (I2 = "DIAS").

Arrastar as fórmulas até o final da planilha.

Calcular as seguintes informações:

Total de Ordens Entregues: Somar todos os valores na coluna "SITUAÇÃO".

No prazo: Filtrar a coluna "SITUAÇÃO" para exibir apenas "no prazo" e somar os valores.

Dias de atraso: Filtrar a coluna "SITUAÇÃO" para exibir apenas "atraso" e somar os valores na coluna "DIAS".

Criar um quadro com as informações calculadas.

Preencher o campo "Ensaio BTE TES Teste" na planilha "Gráfico atendimento Kanban" com as informações do quadro.

Observação: Somar as informações geradas na transação COOIS com as informações do job do Kanban.

Salvar o relatório da COOIS na pasta: GROUPS > Caroline > Atendimento Teste GTA.

Para Turbinas:

Montagem "T": Obter a informação na linha 135 ("Montagem de Turbinas") do Kanban de Turbinas.

Start Up: Obter a informação no e-mail enviado por André Copetti (Start Up).

Finalização:

Salvar o arquivo "Atendimento Kanban" com o nome "ano_mês" no SharePoint: Indicadores de diretoria > Indicador de atendimento Kanban > Kanban mensal.

Sobregravar o arquivo em: GROUPS > PCP > Suely > Indicadores 2020 > Pasta Padrão.

21. Inventário Mensal

Realizar este procedimento no 1º ou 2º dia útil do mês.

Acessar: Intranet.weg > aplicações > SAP.

Na barra superior, inserir o código "MB51" e pressionar Enter.

Selecionar a variante criada por "czeiser": "INVENTÁRIO WEN – Todas as unidades".

Ajustar a data de lançamento para o início e o fim do mês anterior.

Certificar-se de que as seguintes configurações estejam ativas:

Centros da WEN: 1200, 1201, 1206, 1207, 1208, 1210, 1211, 1220, 3200 e 6200.

1200: JGS - WEN

1201: SBC

1206: WTB (Turbinas)

1207, 1208, 1210 e 1211: TGM (Sertãozinho) SWO

1220: Eólico

3200: WEM

6200: WII

Tipos de movimentos: 701 a 702

Layout: /jboning

Aplicar lista detalhada:

Acessar: Configuração > Variante de exibição > Selecionar.

Selecionar "/CAROL PCP".

Selecionar a coluna "TpMov" e ordenar de forma crescente.

Exportar para Excel:

Clicar com o botão direito do mouse em qualquer lugar da tela.

Selecionar "Planilha eletrônica".

Criar uma planilha com uma aba para cada unidade (JGS, SBC, WTB, TGM, Eólico, WEM e WII).

Para cada aba:

Aplicar filtro.

Na coluna B, remover a seleção do centro da unidade correspondente à aba.

Selecionar todas as linhas azuis e excluí-las.

Na coluna B, selecionar tudo.

Inserir uma nova linha no topo da planilha (linha 1).

Escrever "INVENTÁRIO" na nova linha.

Selecionar da célula A1 até a última coluna com informações.

Clicar em "Dados" > "Mesclar e centralizar".

Opcional: Pintar a linha de cinza.

Inserir 4 novas linhas abaixo da primeira linha com "702" na coluna C.

Copiar as duas primeiras linhas até a última coluna e colar na terceira linha criada.

Escrever "TOTAL" na célula F3.

Na coluna "Montante MI" (geralmente a coluna G), clicar com o cursor na última linha e aplicar "AutoSoma".

Repetir o processo para a segunda parte da tabela.

Repetir o processo para todas as abas, ajustando o filtro para cada unidade.

Salvar o arquivo na pasta "GROUPS" com o nome "2020_mês_Inventário".

Salvar o arquivo no SharePoint:

Acessar: Indicadores > Inventário > 2020.

Clicar em "Salvar novo documento".

Selecionar o arquivo salvo na pasta "GROUPS".

Enviar o arquivo para o gerente da unidade correspondente.

Link para salvar no Sharepoint: https://intranet.weg.net/br/energia-wm/pcp/Indicadores%202011/Forms/AllItems.aspx?RootFolder=%2Fbr%2Fenergia%2Dwm%2Fpcp%2FIndicadores%202011%2FINVENT%C3%81RIO%2F2020%20%2D%20Todas%20as%20unidades&FolderCTID=0x012000FE73252372529742B0FBA1A0AA766B87&View=%7B2395801E%2D0F04%2D4AC3%2D89A7%2D2EB591A88B89%7D
Observação: Se não houver informações para uma determinada unidade, não é necessário criar a aba correspondente.

`