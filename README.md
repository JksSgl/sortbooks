# sortbooks

# Para Ubuntu 16.04

Com os seguintes programas instalados
1. git
1. nodejs
1. npm

# Instalação e execução
1. baixar repositorio
1. de dentro do repositorio rodar o comando npm install
1. de dentro do repositorio rodar o comando nodejs app.js

A aplicação estará disponivel em localhost na porta 3000.
Exemplos de execução: 
localhost:3000/books

No body de um request (form-urlencoded) POST - 
Column1 = author
Column2 = title
Column3 = editionYear

Para order decrescente adicionar o negativo antes do nome da coluna, por exemplo: 

Column1 = -author
Column2 = -title
Column3 = -editionYear.

Sendo possivel tambem ordenar por apenas 1 ou 2 colunas.