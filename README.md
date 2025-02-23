# tarea-api

Un proyecto basado en Vite y Express para la creación de una API sencilla.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, clona el repositorio e instala las dependencias con:

```sh
pnpm install
```

## Scripts disponibles

Estos son los comandos disponibles en el proyecto:

- `pnpm run dev` - Inicia el entorno de desarrollo con Vite.
- `pnpm run dev:server` - Inicia el servidor Express.
- `pnpm run build` - Construye la aplicación para producción.
- `pnpm run preview` - Previsualiza la aplicación después de la construcción.
- `pnpm run lint` - Analiza el código con ESLint.
- `pnpm run lint:fix` - Corrige automáticamente los problemas detectados por ESLint.
- `pnpm run format` - Formatea el código usando Prettier.

## Compatibilidad con Node.js

Este proyecto es compatible con `node --run`, lo que permite ejecutar scripts de manera más eficiente en versiones modernas de Node.js.

## Dependencias principales

- [`express`](https://expressjs.com/) - Framework minimalista para servidores web en Node.js.
- [`zod`](https://zod.dev/) - Biblioteca de validación de esquemas.

## Dependencias de desarrollo

- [`vite`](https://vitejs.dev/) - Herramienta de desarrollo y construcción rápida.
- [`eslint`](https://eslint.org/) - Linter para mantener la calidad del código.
- [`prettier`](https://prettier.io/) - Formateador de código.
- [`@types/express`](https://www.npmjs.com/package/@types/express) - Tipado para Express en TypeScript.
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Configuración para evitar conflictos entre ESLint y Prettier.
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Plugin para ESLint que ejecuta Prettier como una regla de ESLint.

## Cómo ejecutar el proyecto

Si tienes Node.js v22 o superior, puedes ejecutar:

```sh
node --run dev
```

Para ejecutar el servidor:

```sh
node --run dev:server
```

Para ejecutar directamente con `pnpm run`, puedes usar:

```sh
pnpm run dev
```

y para el servidor:

```sh
pnpm run dev:server
```

## Estructura del proyecto

```
/tarea-api
├── src/
│   ├── api.http       # Archivo para pruebas de API
│   ├── server.js      # Servidor Express
│   ├── tareas.json    # Archivo JSON con datos de tareas
├── public/            # Archivos estáticos
├── .gitignore         # Archivo para excluir archivos del control de versiones
├── .prettierrc        # Configuración de Prettier
├── eslint.config.js   # Configuración de ESLint
├── index.html         # Página principal
├── package.json       # Configuración del proyecto
├── pnpm-lock.yaml     # Archivo de bloqueo de dependencias para pnpm
└── README.md          # Este archivo
```
