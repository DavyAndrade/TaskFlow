# ToDoList 📝

## Visão Geral
O **ToDoList** é uma aplicação web responsiva para organização de tarefas, com foco em simplicidade, didática e boas práticas de desenvolvimento front-end. O projeto é 100% client-side, sem backend, e foi criado para fins educacionais e portfólio.

## Acesso Online
Você pode publicar o ToDoList facilmente no Netlify ou GitHub Pages. Basta subir a pasta do projeto e acessar pelo navegador.

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

## Funcionalidades
- **Página Inicial:** Adicione, visualize e filtre tarefas (todas, pendentes, concluídas).
- **Design Responsivo:** Layout adaptável para mobile, tablet e desktop.
- **Filtros Dinâmicos:** Filtre tarefas por status com apenas um clique.
- **Material Didático:** Exemplos e arquivos para consulta em aulas de HTML/CSS/JS.
- **100% Client-side:** Nenhum dado é enviado para servidores, tudo acontece no navegador.

## Como Usar
1. Acesse o site online (Netlify/GitHub Pages) ou abra `index.html` localmente.
2. Digite uma nova tarefa e clique em "Adicionar".
3. Use os botões de filtro para visualizar tarefas pendentes, concluídas ou todas.

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
│       └── script.js         # Lógica JavaScript da aplicação
├── base/
│   ├── teste.html            # Exemplo didático para estudos e consulta
│   └── README.md             # Material de apoio para aulas de HTML
├── notes.md                  # Comandos úteis e anotações de desenvolvimento
├── todo.md                   # Lista de tarefas e roadmap do projeto
├── package.json              # Dependências e scripts do projeto (Tailwind CLI)
├── package-lock.json         # Lockfile do npm para controle de versões
├── .gitignore                # Arquivos e pastas ignorados pelo Git
└── README.md                 # Documentação principal do projeto
```

## Tecnologias Utilizadas
- **HTML5** — Estruturação das páginas
- **CSS3 (Tailwind)** — Estilização, responsividade e layout moderno
- **JavaScript** — Funcionalidades interativas e manipulação de tarefas

## Organização do Código
- **Separação de responsabilidades:** HTML, CSS e JS organizados em pastas distintas
- **Material didático:** Diretório `base/` com exemplos para consulta
- **Roadmap:** Arquivo `todo.md` para controle de progresso

## Padrão Visual e Responsividade
- **Minimalista:** Visual limpo, moderno e acessível
- **Mobile First:** Layout adaptável para diferentes tamanhos de tela
- **Acessibilidade:** Uso de contraste, fontes legíveis e navegação intuitiva

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
