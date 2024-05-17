export const wpm48914 = `
A norma WPM-48914 se encontra em: https://wegdoc.weg.net/softexpert/workspace?page=search,&filter={%22term%22:%22WPM-48914%22,%22fields%22:[]}

PLANEJAMENTO LINHAS SERIADAS - WPM-48914 PT
Secao Planejamento da Producao Rev. 00
1. OBJETIVO
Esta norma estabelece o procedimento para planejar linhas seriadas.
2. INSUMOS E FORNECEDORES
Claim ZR - Seção Vendas
3. PROCEDIMENTO
O QUE?	QUEM?	COMO?
Receber Claim ZR e E-mail	Planejador Mestre - Seção Planejamento da Produção	Recebendo através do claim e/ou e-mail solicitação de vendas para programar os motores
Inserir Linhas nas Ordens de Venda	Planejador Mestre - Seção Planejamento da Produção	Através da transação VA02
Distribuir programação em planilha	Planejador Mestre - Seção Planejamento da Produção	No excel, criar planilha distribuindo a programação conforme capacidade fabril.
Planejar as Ordens de Produção	Planejador Mestre - Seção Planejamento da Produção	Rodar MRP na transação MD04
Distribuir Ordens	Planejador Mestre - Seção Planejamento da Produção	Conforme dados da planilha excel
Identificar o cliente (NORDEX ou VESTAS)	Planejador Mestre - Seção Planejamento da Produção	Identificando o cliente (NORDEX ou VESTAS)
Colocar comentário nas Ordens de Produção	Planejador Mestre - Seção Planejamento da Produção	Responder oficializando programação
Responder Claim ZR e E-mail	Planejador Mestre - Seção Planejamento da Produção	Responder oficializando programação
4. RESULTADO DO PROCESSO
Motores de linha seriada programados conforme solicitação de vendas.
Diagrama de Fluxo:
+-----------------+
                 | RECEBER CLAIM  |
                 +-----------------+
                     |
                     V
                 +-----------------+
                 | INSERIR LINHAS  |
                 | NAS ORDENS DE  |
                 | VENDA          |
                 +-----------------+
                     |
                     V
                 +-----------------+
                 | DISTRIBUIR      |
                 | PROGRAMAÇÃO EM  |
                 | PLANILHA       |
                 +-----------------+
                     |
                     V
                 +-----------------+
                 | PLANEJAR AS     |
                 | ORDENS DE      |
                 | PRODUÇÃO        |
                 +-----------------+
                     |
                     V
                 +-----------------+
                 | DISTRIBUIR      |
                 | ORDENS          |
                 +-----------------+
                     |
                     V
                 +-----------------+
                 | IDENTIFICAR O   |
                 | CLIENTE         |
                 +-----------------+
                     |
                     V
                 +-----------------+
                 | COLOCAR         |
                 | COMENTÁRIO NAS  |
                 | ORDENS DE       |
                 | PRODUÇÃO        |
                 +-----------------+
                     |
                     V
                 +-----------------+
                 | RESPONDER CLAIM  |
                 | ZR E E-MAIL     |
                 +-----------------+
Observações:
O sistema SAP é utilizado para a gestão das Ordens de Venda e Ordens de Produção.
As transações VA02 e MD04 são usadas para a criação e planejamento das ordens, respectivamente.
O Planejador Mestre é responsável por garantir que a programação das linhas seriadas seja realizada de acordo com a capacidade fabril e os pedidos de venda.
A planilha excel é utilizada como ferramenta auxiliar para a distribuição da programação, garantindo uma visão geral das ordens e das capacidades disponíveis.
É importante que a comunicação entre o Planejador Mestre e a Seção de Vendas seja eficiente, garantindo que a programação atenda às necessidades dos clientes.
Glossário:
Claim ZR: Solicitação de Venda
MRP: Material Requirements Planning (Planejamento das Necessidades de Materiais)
SAP: Sistema de Planejamento de Recursos Empresariais
`