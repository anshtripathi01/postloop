# 📘 **PostLoop – Frontend (MVP)**

A modern React + Vite + Tailwind CSS frontend for the **PostLoop** SaaS MVP.
This frontend allows users to sign up, log in, connect social accounts, create & schedule posts, and manage their dashboard.

---

## 🚀 **Tech Stack**

* **React 18**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Axios**
* **Lucide React Icons**

---

## 📂 **Project Structure**

```
frontend/
│── public/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Features.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CreatePost.jsx
│   │   ├── History.jsx
│   ├── utils/
│   │   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── .gitignore
│── package.json
│── README.md
```

---

## 🛠️ **Setup & Installation**

### 1. Clone the repo

```bash
git clone https://github.com/anshtripathi01/postloop.git
cd postloop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```
---

## 📌 **Available Pages**

### 🏡 Home

Landing page with hero section, features, CTAs.

### 🔐 Authentication

* `/signup`
* `/login`

### 📊 Dashboard

User overview & "Connect Facebook" button.

### 📝 Create Post

* Add text
* Upload image
* Choose scheduled time
* Submit to backend

### 📜 Post History

Shows scheduled & published posts.

---


## 🧪 **Running a Production Build**

```bash
npm run build
npm run preview
```

---

## 🧑‍💻 Author

**PostLoop Team / Ansh**