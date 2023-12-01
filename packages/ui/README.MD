<div align="center">
  <h1>Deluxe UI</h1>
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting started](#getting-started)
  - [Setup Tailwind CSS](#setup-tailwind-css)
  - [Install Deluxe UI](#install-deluxe-ui)
  - [Try it out](#try-it-out)
  - [Next steps](#next-steps)
    - [Next.js](#nextjs)
    - [Vite](#vite)

## Getting started

You'll need to be familiar with Node.js and `npm`, and have `npm` installed. You should be comfortable installing packages with `npm`, and experience creating web apps with React and Tailwind CSS will be very helpful.

### Setup Tailwind CSS

Install Tailwind CSS:

```bash
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

Point Tailwind CSS to files you have `className=".."` in:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" /* src folder, for example */],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind CSS to a CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install Deluxe UI

1. Install Deluxe UI:

```bash
npm i @sihaxito/deluxe-ui
# yarn add @sihaxito/deluxe-ui
# pnpm install @sihaxito/deluxe-ui
```

2. Import Deluxe UI styles from `@sihaxito/deluxe-ui/stlyes.css` in your project:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@sihaxito/deluxe-ui/stlyes.css' // <---

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

### Try it out

How you use Deluxe UI depends on your project setup. In general, you can just import the components you want to use from `@sihaxito/deluxe-ui` and use them in a React `.jsx` file:

```tsx
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
} from "@sihaxito/deluxe-ui";
import {
  LucideCloud,
  LucideChevronRight,
  LucideHelpCircle,
  LucideHome,
} from "lucide-react";

export default function MyPage() {
  return (
    <SidebarComponent
      as="aside"
      collapsed={collapsed}
      className="transition-all duration-300 h-screen"
    >
      <SidebarItems className="flex flex-col h-full flex-1">
        <a
          href="#"
          className="flex justify-center text-lg font-bold items-center gap-2"
        >
          <LucideCloud className="h-8 w-8" />
          {!collapsed && (
            <span className="whitespace-nowrap">Sidebar example</span>
          )}
        </a>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={LucideHome}>
            Home
          </SidebarItem>

          <SidebarItem href="#" icon={LucideHelpCircle}>
            Documentation
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </SidebarComponent>
  );
}
```

And done!
