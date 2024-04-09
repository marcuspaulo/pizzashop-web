# Pizza Shop Web

# Create a project

pnpm create vite@latest

Name: pizzashop-web

Choose:
Typescript (ESBuild more configurations)

## Install

```sh
 pnpm i
```

Next step, change index.html title

## Remove Eslint (ESlint will install)

Remove .eslint

package.json

```json
{
  "name": "pizzashop-web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.4"
  }
}
```

Run `pnpm i`

Removed `.css` files, and imports `App.tsx` and `main.tsx`

In App.tsx, remove this: (Importação nomeada) - Você precisa importar com o nome correto do nome do Componente

```tsx
export default App;
```

## New App component

```tsx
export function App() {
  return <h1>Hello World</h1>;
}
```

Remove assets.

## Install UI Library - https://ui.shadcn.com/

O Shadcn UI é baseado no Radix https://www.radix-ui.com/, que tem componentes sem estilização, porém bastante customizáveis.

# Installation

https://ui.shadcn.com/docs/installation/vite

```sh
pnpm add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

```

## TSConfig

Isso aqui basicamente, se a importação começar com @/, sempre está se referindo a pasta src
`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Update vite.config.ts

```sh
npm i -D @types/node
```

```ts
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## Project Configurations

```sh
pnpm dlx shadcn-ui@latest init

Packages: +175
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 175, reused 129, downloaded 46, added 175, done
✔ Would you like to use TypeScript (recommended)? … no / yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Zinc
✔ Where is your global CSS file? … src/global.css
✔ Would you like to use CSS variables for colors? … no / yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) …
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … no / yes
✔ Write configuration to components.json. Proceed? … yes

✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...

Success! Project initialization completed. You may now add components.
```

## Button Installation

```sh
pnpm dlx shadcn-ui@latest add button
```

### O Shadcn UI, segue um padrão baseado em Copy and paste, os componentes, eles não são importados da biblioteca e sim importados para dentro da base de código. `components/ui/`

## Run

```sh
pnpm run dev
```

## Sugestão de instalação de extensões:

- Tailwind CSS Intellisense
- PostCSS

# ESLint and Prettier Config

```sh
pnpm -i eslint @rocketseat/eslint-config -D
```

## Create .eslintrc.json

```json
{
  "extends": "@rocketseat/eslint-config/react"
}
```

### Automatic Class Sorting with Prettier

https://tailwindcss.com/blog/automatic-class-sorting-with-prettier

- [Prettier plugin tailwindcss Github](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Problems with Prettier and Vite

```sh
["ERROR" - 10:01:58 PM] Invalid prettier configuration file detected. See log for details.
["INFO" - 10:02:01 PM] Formatting file:///Users/marcus/Develop/frontend/pizzashop-web/src/App.tsx
["ERROR" - 10:02:01 PM] Invalid prettier configuration file detected.
["ERROR" - 10:02:01 PM] module is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/Users/marcus/Develop/frontend/pizzashop-web/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
ReferenceError: module is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/Users/marcus/Develop/frontend/pizzashop-web/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
```

Até a presente versão, o Vite não reconhece a configuração do Prettier, por que ele está trabalhando com modulos, ou seja, precisa que seja export default. Para resolver isso, basta renomear o `prettier.config.js` para `prettier.config.cjs`. O C é de Commmon, que é a sintaxe antes do Ecma Script Modules.

## Plugin que organiza os imports

https://github.com/lydell/eslint-plugin-simple-import-sort

## Install React Router
 - Existe o TanStack Router
 - React Router Dom

https://reactrouter.com/en/main

## Installing React Router Dom
```sh
pnpm install react-router-dom localforage match-sorter sort-b
```

- Created pages folder
 `/pages/auth`
 `/pages/app`


## Router.tsx
```tsx
import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/signin', element: <SignIn /> },
])

```

App.tsx
```tsx
import './global.css'

import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return <RouterProvider router={router} />
}

```

## React Helmet 

This reusable React component will manage all of your changes to the document head.

 - There is a fork: React Helmet Async
https://github.com/staylor/react-helmet-async

```sh
pnpm i react-helmet-async
```
### Configuration 
```tsx
import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}


```

## Install Input and Label - Shadcn UI
```sh
pnpm dlx shadcn-ui@latest add input label
```
### Select another theme 
[Link Shadcn UI Theme](https://ui.shadcn.com/themes)

global.css
```css

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 72.2% 50.6%;
    --primary-foreground: 0 85.7% 97.3%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 72.2% 50.6%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 72.2% 50.6%;
    --primary-foreground: 0 85.7% 97.3%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 72.2% 50.6%;
  }
}

```

## Install React Hook Form
```sh
pnpm i react-hook-form zod @hookform/resolvers
```

## Install Sonner Toast
```sh
pnpm i sonner
```

## Install Separator (Shadcn UI)
```sh
pnpm dlx shadcn-ui@latest add separator
```

# Shadcn-ui - Dark mode
https://ui.shadcn.com/docs/dark-mode/vite

Install Dropdown menu
```sh
pnpm dlx shadcn-ui@latest add dropdown-menu
```
## Install table (Shadcn UI)
```sh
pnpm dlx shadcn-ui@latest add table
```
---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
