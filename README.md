# ToDoList 📝

## Descrição do Projeto
O **ToDoList** é uma aplicação web responsiva para organização de tarefas, desenvolvida com JavaScript puro e Tailwind CSS. O projeto é 100% client-side, sem backend, e foi criado para fins educacionais, portfólio e prática de manipulação de DOM, localStorage e boas práticas de front-end.

## Instalação Local

1. Clone ou baixe este repositório:
	```bash
	git clone https://github.com/DavyAndrade/ToDoList.git
	```
2. Acesse a pasta do projeto:
	```bash
	cd ToDoList
	```
3. Instale as dependências:
	```bash
	npm install
	```
4. Gere o CSS do Tailwind:
	```bash
	npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/style.css --watch
	```
5. Abra o arquivo `index.html` no navegador de sua preferência.

## Estrutura do Projeto

```
ToDoList/
│
├── index.html                # Página principal da aplicação
├── src/
│   ├── css/
│   │   ├── input.css         # Fonte para Tailwind (classes utilizadas)
│   │   └── style.css         # CSS gerado automaticamente pelo Tailwind CLI
│   └── js/
│       ├── main.js           # Script principal: eventos, integração e lógica de UI
│       ├── tasks.js          # CRUD de tarefas e manipulação do localStorage
│       ├── render.js         # Renderização dinâmica da lista de tarefas
│       └── modals.js         # Modais de edição e exclusão de tarefas
├── package.json              # Dependências e scripts do projeto (Tailwind CLI)
├── package-lock.json         # Lockfile do npm para controle de versões
├── .gitignore                # Arquivos e pastas ignorados pelo Git
└── README.md                 # Documentação principal do projeto
```
> **Nota:** Os diretórios `base/` e o arquivo `notes.md` são ignorados no deploy por padrão, conforme configurado no `.gitignore`.

## Tecnologias Utilizadas

- **HTML5** — Estruturação das páginas
- **CSS3 (Tailwind CSS)** — Estilização, responsividade e layout moderno
- **JavaScript (ES6+)** — Funcionalidades interativas, manipulação de DOM e localStorage

## Contribuição

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção:
	```bash
	git checkout -b minha-feature
	```
3. Commit suas alterações e envie um pull request.

## Licença

Projeto desenvolvido para fins educacionais. Sinta-se livre para usar, modificar e compartilhar!