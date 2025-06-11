FROM node:18

# Dossier de travail
WORKDIR /app

# Copier et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer le serveur
CMD ["npm", "start"]
