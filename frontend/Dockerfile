FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build de producción
RUN npm run build

# Servir con serve
RUN npm install -g serve
CMD ["serve", "-s", "build"]

EXPOSE 3000