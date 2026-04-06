# Linked Lists

Projeto de estrutura de dados desenvolvido como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists), com foco em implementacao de listas encadeadas e operacoes de manipulacao de nos.

## Objetivo do Projeto

O objetivo principal foi praticar:
- Modelagem de uma estrutura de dados personalizada em JavaScript
- Encadeamento de nos com referencias `next` e `prev`
- Operacoes classicas de listas encadeadas (insercao, leitura e busca)
- Encapsulamento com campos privados e metodos da classe

## O que e?

Uma implementacao de `LinkedList` em JavaScript (estilo doubly linked list) com metodos para:
- Inserir elementos no inicio e no fim
- Consultar tamanho, cabeça e cauda
- Acessar valores por índice
- Remover elemento do inicio
- Verificar existencia de valor
- Encontrar índice por valor
- Gerar representacao em string da lista

A classe usa um factory para criar os nos e um arquivo separado para demonstracao de uso via `console.log`.

## Como usar

1. Entre na pasta do projeto:
   `cd Javascript/top-linked-lists`
2. Execute o arquivo de demonstracao em um ambiente com suporte a ES Modules:
   `node index.js`

## Funcionalidades

- **`append(value)`**: adiciona um novo valor ao final da lista
- **`prepend(value)`**: adiciona um novo valor no início da lista
- **`size()`**: retorna a quantidade atual de elementos
- **`head()`**: retorna o valor do primeiro elemento
- **`tail()`**: retorna o valor do último elemento
- **`at(index)`**: retorna o valor da posição informada
- **`pop()`**: remove e retorna o valor do primeiro elemento
- **`contains(value)`**: verifica se um valor existe na lista
- **`findIndex(value)`**: retorna o índice do valor ou `-1` se não encontrado
- **`toString()`**: retorna a lista formatada para leitura

## Estrutura de Arquivos

- `LinkedList.js`: implementacao da classe `LinkedList` e do factory de nos
- `index.js`: script de demonstracao das operacoes da lista

## Tecnologias Utilizadas

- JavaScript (ES Modules)

---

*Nota: a proposta pede uma linked list simples, mas optei por implementar no estilo doubly linked list.*

Projeto desenvolvido seguindo: [The Odin Project - Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists)

📍 **Repositorio principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
