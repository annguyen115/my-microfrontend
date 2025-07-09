# My Microfrontend Playground

This is a microfrontend demo project built using **Webpack Module Federation**, React, and TypeScript.  
The architecture consists of a **Parent** and three child applications (`child1`, `child2`, `child3`), as well as a `shared` module for context and reusable logic.

---

## 📦 Architecture

- `parent`: The parent app that loads all child apps.
- `child1`, `child2`, `child3`: Micro frontends rendered via `React.lazy`.
- `shared`: Shared context and utilities (e.g., React context provider).

Each child is exposed via **Webpack Module Federation** and consumed dynamically by the parent.

---

## 🧠 Technologies Used

- React 18+
- TypeScript
- Webpack 5
- Module Federation Plugin
- React.lazy + Suspense
- Context API (via `shared/AppContext`)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/annguyen115/my-microfrontend.git
cd my-microfrontend
```

### 2. Install dependencies for each app

```bash
cd shared && npm install
cd ../child1 && npm install
cd ../child2 && npm install
cd ../child3 && npm install
cd ../parent && npm install
```

### 3. Start apps in parallel

In separate terminal tabs, run:

```bash
# shared
cd shared && npm start

# child apps
cd ../child1 && npm start
cd ../child2 && npm start
cd ../child3 && npm start

# parent 
cd ../parent && npm start
```

> Ports used:
> - `shared`: 3004
> - `child1`: 3001
> - `child2`: 3002
> - `child3`: 3003
> - `parent`: 3000

Make sure none of the ports are being blocked.

---

## 💡 How it works

- The `parent` app dynamically imports remote components from child apps using `React.lazy` and `Module Federation`.
- Shared state is managed through the `shared` module, using `AppProvider` and `useAppContext`.
- Each app has its own Webpack config and runs independently in development mode.

---

## 📁 Folder Structure

```
my-microfrontend/
├── parent/
├── child1/
├── child2/
├── child3/
└── shared/
```

---

## 🛠 Notes

- `AppProvider` from `shared` **must be loaded via `React.lazy`** to avoid runtime crashes caused by early imports before the remote is ready.
- Do **not** directly `import` shared modules at the top level. Always use lazy loading or dynamic import.

---

## 📃 License

This project is for learning and demo purposes. No license required.