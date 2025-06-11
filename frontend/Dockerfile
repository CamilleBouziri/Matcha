FROM node:18

# Dossier de travail
WORKDIR /app

# Copier et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le reste
COPY . .

# Exposer le port du dev server (Vite par défaut)
EXPOSE 5173

# Lancer le front
CMD ["npm", "run", "dev"]
