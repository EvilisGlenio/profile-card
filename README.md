# Componente de Perfil com Styled Components no React + Vite

Este repositório contém um exemplo de como criar um componente de perfil usando Styled Components no React + Vite. Este componente é útil para exibir perfis de usuários ou qualquer outra entidade que tenha uma imagem, um título e uma descrição.

## Tecnologias Utilizadas

- **Vite**: Vite é uma ferramenta de construção que tem como objetivo oferecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos.
- **Styled Components**: Biblioteca para estilizar componentes React de forma eficiente e escalável.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática opcional ao código.

## Estrutura do Projeto

```bash
├── public
│ └── perfil.jpeg
├── src
│ ├── components
│ │ └── ProfileCard
│ │   ├── index.tsx
│ │   └── styles.ts
│ ├── styles
│ │ └── globalStyle.ts
│ ├── App.tsx
│ ├── main.tx
│ └── vite-env.d.ts
├── README.md
└── package.json
```

- **public/perfil.jpg**: Imagem de exemplo para o perfil.
- **src/components/ProfileCard/index.tsx**: Componente de perfil que exibe uma imagem, um título e uma descrição.
- **src/components/ProfileCard/styles.ts**: Estiliza o componente de perfil usando a Biblioteca Styled-Components.
- **src/styles/globalStyle.ts**: Estiliza o background da aplicação usando a Biblioteca Styled-Components.
- **src/main.tsx**: Página principal que utiliza o componente de perfil.
- **README.md**: Este arquivo.

### Execute o projeto:

```bash
Copy code
npm run dev
```

Abra seu navegador e acesse [http://localhost:5173](http://localhost:5173/) para visualizar o projeto em execução.

## Licença

Este projeto está licenciado sob a [MIT License]().
