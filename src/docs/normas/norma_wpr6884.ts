export const wpr6884 = `
COMPRADOS E MANUFATURADOS - WPR-6884 PT
Depto Planejamento e Controle da Producao,Depto Suprimentos,Secao P... Rev. 07
Corporativo,Motores Comerciais e Appliance,Energia,WEG Digital e
1. OBJETIVO
Esta norma detalha o procedimento para inventário de produtos acabados, materiais comprados e manufaturados, controlados e não controlados por SAD (Sistema de Administração de Depósito).
2. DOCUMENTOS
2.1. Documentos complementares
WPS-29399 - Sucateamento de produtos acabados, materiais comprados e manufaturados - WMO.
WPS-7120 - Sucateamento de produtos acabados, materiais comprados e manufaturados.
3. SISTEMAS E SOFTWARES
SAP ECC – PP – COGI
SAP ECC – PP – CO1P
SAP ECC – MM – MB25
SAP ECC – MM – MI01
SAP ECC – MM – MI02
SAP ECC – MM – MI04
SAP ECC – MM – MI05
SAP ECC – MM – MI20
SAP ECC – WM – LI01N
SAP ECC – WM – LI02N
SAP ECC – WM – LI11N
SAP ECC – WM – LI12N
SAP ECC – WM – LI20
SAP ECC – WM – LI21
4. GENERALIDADES
4.1. Pontos a considerar antes do inventário
Avaliar se existem notas fiscais para serem digitadas do material;
Em caso de recebimentos, verificar se o material não está sem movimentação conforme WPS-29399 (WMO) ou WPS-7120 (Demais unidades);
Antes da contagem avaliar materiais em processo e apontar as ordens para o consumo dos componentes se necessário (considerando operação de estagiamento);
Avaliar pendências nas transações COGI e CO1P antes da contagem;
Avaliar se existem pendências de reservas de manutenção, ASTEC, ou reserva manual (transação MB25);
Ficar atento à unidade de medida contada do material que pode ser diferente da unidade de compra/consumo;
Considerar materiais em depósito de recuperação (SS02).
4.2. Transações do SAP utilizadas
4.2.1. Para inventários em depósitos sem SAD
MI01 – Criar um documento de inventário;
MI02 – Modificar/ eliminar um documento de inventário;
MI04 – Registrar a contagem (colocar a quantidade à ser inventariado);
MI05 – Modificar contagem (alterar a quantidade colocada);
MI20 – Conferir dados e finalizar o documento.
4.2.2. Para inventários em depósito com SAD
LI01N – Criar documento de inventário;
LI02N – Modificar documento de inventário;
LI11N – Registrar resultados de contagem;
ZTWM043 – Inventariar via coletor;
LI20 – Retificar diferenças WM (Warehouse Management);
LI21 – Baixar de diferenças em WM.
4.3. Política de alçadas para o inventário para unidades do Brasil
Todos os inventários devem ser validados de acordo com a política de alçadas definida na unidade. A política de alçadas precisa ser validada pela comissão/ grupo de estoques ou pelo diretor da unidade.
4.3.1. Valores definidos para as unidades Brasil
ALÇADAS	APROVADOR	INFORMAÇÕES ADICIONAIS
De R$ 0,01 até R$ 1.000,00	Apontador, programador, almoxarife, facilitador	O apontador, programador, almoxarife, facilitador pode executar o inventário, e enviar um e-mail para o chefe, gerente da área envolvida e arquivamento da unidade (Ex: inventario-wmo@weg.net; wau-inventario@weg.net; inventwti@weg.net; etc.).
De R$ 1.000,01 até R$ 3.000,00	Chefe da área	O apontador, programador, almoxarife, facilitador deve criar o documento, o chefe executa o inventário e retorna com "ok" para o criador do documento, em seguida o criador do documento deve enviar e–mail para gerente e arquivamento da unidade.
De R$ 3.000,01 até R$ 10.000,00	Gerente da área	O apontador, programador, almoxarife, facilitador deve criar o documento, o gerente executa o inventário e retorna com "ok" para o criador do documento, em seguida o criador do documento deve enviar e–mail para arquivamento da unidade.
De R$ 10.000,01 até R$ 100.000,00	Diretor (com a execução pelo gerente)	O apontador, programador, almoxarife, facilitador deve criar o documento, o gerente deve solicitar a aprovação do diretor, o gerente executa o inventário e retorna com "ok" para o criador do documento, em seguida o criador do documento deve enviar e–mail para arquivamento da unidade.
Acima de R$ 100.000,00	Diretor (com a execução pelo gerente de PCP ou Compras ou Logística)	O apontador, programador, almoxarife, facilitador deve criar o documento, o gerente deve solicitar a aprovação do diretor, em seguida solicitar a execução do inventário para o gerente da área de PCP, Compras ou Logística, e enviar e-mail para arquivamento da unidade.
5. PROCEDIMENTO
5.1. Inventário de Depósito não Controlado por SAD
5.1.1. Acessar transação MI01. Preencher os campos Centro, Depósito onde o material encontra-se armazenado, se necessário preencher com estoque especial “E” (MTO) ou “Q” (ETO), e pressionar Enter.
5.1.2. Preencher com o código do material e se necessário informar lote, em seguida salvar.
5.1.3. Anotar o documento de inventário gerado.
5.1.4. Acessar transação MI04, preencher com o número do documento de inventário e pressionar Enter.
5.1.5. Preencher a quantidade que este material deve ficar registrada no estoque, colocar a unidade de medida da contagem (campo: UMR), caso não exista fisicamente o material em estoque deve-se marcar o campo “CZ” (contagem zero), em seguida salvar o documento.
Nota: Se precisar modificar a quantidade gravada na transação acima, será necessário acessar pela transação MI05.
5.1.6. Acessar transação MI20: Entrar com o centro, número do documento de inventário, leiaute e executar.
5.1.7. Necessário a conferência dos campos “Material”, “Texto breve material”, “Qtd.diferença” e “Mont.diferença”. Após conferência selecionar a(s) linha(s) do documento e clicar em “Registrar diferença”.
Nota: Quando o valor ultrapassar a alçada do usuário, deverá ser enviado um e-mail com o número do documento de inventário, para o chefe ou gerente executar o documento de acordo com a alçada. O mesmo deve retornar o e-mail com um “OK” (já foi executado) ou a rejeição do documento (neste caso eliminar documento via transação MI02).
5.1.8. Pressionar Enter quando aparecer a tela de “Registrar diferenças de inventário”.
5.1.9. Cadastrar o motivo “1” para cada material do documento e gravar o documento.
5.1.10. Aparecerá a mensagem de confirmação conforme abaixo.
5.1.11. Após efetuado o inventário enviar e-mail de conhecimento para o grupo de estoque de cada unidade e para o chefe e gerente responsável pelo depósito, conforme exemplo.
5.2. Inventário de materiais com depósito controlado por SAD
5.2.1. Procedimento via Terminal (computador)
5.2.1.1. Acessar a transação LI01N, preencher o campo “Nº do depósito”, “Tipo de depósito” e pressionar Enter.
5.2.1.2. Entrar com o código da posição a ser inventariada e pressionar Enter, clicar no botão (Ativar) para deixar o inventário ativo, e anotar o número do documento criado.
Nota: Em caso de erro, verificar se a posição existe no sistema, se possui OT (ordem de transporte) em andamento, ou se a posição está bloqueada. Se houver necessidade de modificar o documento criado acessar pela transação LI02N.
5.2.1.3. Acessar a transação LI11N, colocar o número do inventário e pressionar Enter.
a) Posições sem nenhum material cadastrado
Fazer a inclusão do material, lote (se necessário), centro, quantidade identificada no físico, UD (Unidade de depósito) e pressionar Enter.
Preencher o campo “Depósito”, “Data EM” e pressionar Enter.
Pressionar Enter na mensagem.
Clicar no botão gravar.
b) Posições com materiais já cadastrados - Incluir item novo (antes de preencher a quantidade dos demais materiais).
Inserir a posição, material, centro, quantidade contada, número da UD e pressionar Enter.
Preencher o campo “Depósito” e “Data EM”, em seguida pressionar Enter.
Pressionar Enter na mensagem.
Clicar em “Síntese”.
Preencher as quantidades de cada material, ou selecionar estoque nulo (quando a quantidade é zero) e gravar.
Pressionar Enter para os materiais que tiveram a quantidade modificada.
Nota: Se precisar modificar a quantidade gravada na transação LI11N, será necessário acessar pela transação LI12N.
5.2.1.4. Acessar transação LI20. Inserir o nº do depósito, nº do documento de inventário e clicar Enter.
5.2.1.5. Marcar a posição a ser ajustada e clicar em Retificar. Neste momento é efetuado o ajuste na posição, sendo necessário efetuar o ajuste contábil da diferença.
a) Posições com apenas um material cadastrado, somente gravar.
b) Posições com vários materiais cadastrados, selecionar linha da posição e clicar em “Retificar”.
5.2.1.6. Efetuar a baixa em MM entrando na transação LI21 e preenchendo o campo nº do depósito, o tipo de depósito “999”, leiaute /INVENT.WNMO e executar.
5.2.1.7. Marcar a linha referente ao material desejado e clicar em “Retificar”.
Nota: Quando o valor ultrapassar a alçada do usuário, deverá ser enviado um e-mail com o número do documento de inventário, para o chefe ou gerente executar o documento de acordo com a alçada. O mesmo deve retornar o e-mail com um “OK” (já foi executado) ou a rejeição do documento (neste caso eliminar documento via transação LI02N).
5.2.2. Após efetuado o inventário enviar e-mail de conhecimento para o grupo de estoque de cada unidade e para o chefe e gerente responsável pelo depósito, conforme exemplo.
5.2.3. Procedimento via Coletor de Dados:
5.2.3.1. Acessar no computador a transação LI01N. Preencher com o Nº do depósito, tipo de depósito e pressionar Enter.
5.2.3.2. Entrar com o código da posição a ser inventariada e pressionar Enter. Clicar no botão (Ativar) para deixar o inventário ativo, e anotar o número do documento criado.
Nota: Em caso de erro, verificar se a posição existe no sistema, se possui OT (ordem de transporte) em andamento, ou se a posição está bloqueada. Se houver necessidade de modificar o documento criado acessar pela transação LI02N.
5.2.3.3. Entrar no coletor de dados selecionar “3.PROCES.INTERN. >”, e pressionar Enter, em seguida selecionar “3.INVENTÁRIO ...”
5.2.3.4. Pressionar a tecla Enter para entrar com os dados da contagem.
5.2.3.5. Efetuar a leitura do código de barras do pallet (UD-Unidade de Depósito).
5.2.3.6. Efetuar a leitura do código de barras da etiqueta do material.
5.2.3.7. Para materiais administrados por lote, cadastrar o número do lote que está sendo inventariado, colocar a quantidade, pressionar Enter.
5.2.3.8. Ao efetuar a mesma operação para todos os materiais existentes na posição, aparecerá a mensagem “Último registro alcançado”, demonstrando que todos os materiais foram contados, pressionar Enter, e em seguida “F7”.
5.2.3.9. Pressionar Enter.
5.2.3.10. Efetuar a baixa em MM entrando na transação LI21 e preenchendo o campo nº do depósito, o tipo de depósito “999”, leiaute /INVENT.WNMO e executar.
5.2.3.11. Selecionar a linha referente ao material desejado e clicar em “Retificar”.
Nota: Quando o valor ultrapassar a alçada do usuário, deverá ser enviado um e-mail com o número do documento de inventário, para o chefe ou gerente executar o documento de acordo com a alçada. O mesmo deve retornar o e-mail com um “OK” (já foi executado) ou a rejeição do documento (neste caso eliminar documento via transação LI02N).
5.2.4. Após efetuado o inventário enviar e-mail de conhecimento para o grupo de estoque de cada unidade e para o chefe e gerente responsável pelo depósito, conforme exemplo.
Observações:
Os procedimentos descritos nesta norma visam garantir a precisão e a confiabilidade dos inventários, contribuindo para a gestão eficiente dos estoques da empresa.
É importante que todos os envolvidos no processo de inventário estejam cientes das normas e procedimentos, garantindo a qualidade e a conformidade dos resultados.
A utilização dos sistemas e softwares mencionados é fundamental para o controle e a gestão das informações, otimizando o processo de inventário.
A política de alçadas é crucial para a aprovação e execução dos inventários, garantindo a segurança e a governança das operações.
Glossário:
SAD: Sistema de Administração de Depósito
MTO: Make-to-Order (Produção por encomenda)
ETO: Engineer-to-Order (Engenharia por encomenda)
UD: Unidade de Depósito
OT: Ordem de Transporte
WM: Warehouse Management (Gerenciamento de Armazém)
MM: Material Management (Gestão de Materiais)
WPS: Norma de Procedimento da WEG
WPR: Norma de Procedimento da WEG
`