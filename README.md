# Matcha — Architecture Docker Fullstack 🐳

Projet fullstack de dating app développé à deux :

* 👨‍💻 Backend : Express.js (sans ORM) — *géré par Camille*
* 🎨 Frontend : React (Vite) — *géré par Safia*

## 🧱 Architecture

```
matcha/
├── backend/           # Serveur Express + PostgreSQL
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── frontend/          # Application React (Vite)
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── docker-compose.yml
└── README.md
```

## 🚀 Lancement du projet

### 1. Prérequis

* [Docker](https://www.docker.com/products/docker-desktop)
* [Node.js](https://nodejs.org/) (optionnel pour dev local)

---

### 2. Lancer toute l'application (back + front + DB)

```bash
docker-compose up --build
```

**Services disponibles :**

* 🟢 Backend API : [http://localhost:3000](http://localhost:3000)
* 🔵 Frontend React : [http://localhost:5173](http://localhost:5173)
* 🟓 PostgreSQL : `localhost:5432` (user: matcha / pass: matchapass)

---

## 🔧 Développement séparé

### 👨‍💻 Développement Backend (Express.js)

```bash
cd backend
npm install         # seulement si tu bosses sans Docker
npm run start       # ou utilise nodemon si tu veux du live reload
```

**Via Docker :**

```bash
docker-compose up backend
```

️ Le backend est accessible sur `http://localhost:3000`

---

### 🎨 Développement Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

️ Le frontend est accessible sur `http://localhost:5173`

**Tu peux modifier directement ton code local, Vite fait le hot reload.**

---

## 🔗 Communication front ↔ back

Le frontend fait ses requêtes vers : `http://localhost:3000`.

**Important :** le backend Express doit gérer les CORS pour permettre les appels du front :

```js
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
```

---

## 🔒 Variables d'environnement

Créer un fichier `.env` dans `backend/` :

```env
PORT=3000

DB_USER=matcha
DB_PASSWORD=matchapass
DB_HOST=db
DB_PORT=5432
DB_NAME=matchadb
```

---

## 🧪 Tests et données de dev (bientôt)

* Génération de faux profils
* Tests unitaires backend
* Données seed dans la DB PostgreSQL

---

## 🛠 Tips

* Relancer un seul service :

  ```bash
  docker-compose up --build backend
  ```

* Entrer dans un conteneur :

  ```bash
  docker exec -it matcha-backend-1 sh
  ```

* Supprimer les volumes persistants :

  ```bash
  docker-compose down -v
  ```

---

## 🤝 Collaboration

* Backend et frontend sont dans deux conteneurs isolés.
* Chacun peut bosser sur son dossier (`backend/` ou `frontend/`) sans perturber l'autre.
* Utilisez Git pour partager les modifs, mais chaque dev peut run sa partie sans dépendre de Docker s'il préfère (avec `npm` local).
