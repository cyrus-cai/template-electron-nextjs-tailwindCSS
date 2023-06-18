# Nextjs-Electron-TailwindCSS App Setup Guide

This repository provides the setup for a project using Next.js, Electron, and Tailwind CSS.

## Getting Started

### 1. Create a new app with Next.js and Electron

Initiate a new project with create-next-app and Electron (TypeScript):

```bash
yarn create next-app --example with-electron-typescript your-app-name
yarn dev
```
If you encounter an error `UnhandledPromiseRejectionWarning: Error: Cannot find module 'node:stream/web`, use `yarn add electron@latest` to resolve it.

### 2. Setup Tailwind CSS

Add Tailwind CSS, PostCSS and Autoprefixer:

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Modify the `tailwind.config.js` file:

Add the specified paths to the content array:

```jsx
module.exports = {
  content: [
    // add the following line
    "./renderer/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Create `./styles/globals.css` file:

This file is for global styles:

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Import `globals.css` in `./renderer/components/Layout.tsx`:

```jsx
// add the following line
import '../../styles/globals.css'

import React, { ReactNode } from 'react'

import Head from 'next/head'
import Link from 'next/link'

... other code
```

### 6. Test the setup:

Add Tailwind CSS classes to your components and verify if they work correctly. Initial rendering of styles may take some time.

```jsx
// ./renderer/pages/index.tsx

... other code

return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      {/* add the following line */}
      <h1 className="text-3xl font-bold underline">
        Hello TailwindCSS 👋
      </h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  )

... other code
```

And there you have it, a Next.js application running with Electron and styled with Tailwind CSS.
