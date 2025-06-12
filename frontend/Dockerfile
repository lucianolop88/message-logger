FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build de producción
RUN npm run build

# Servir con serve
RUN npm install -g serve
CMD ["serve", "-s", "build"]

EXPOSE 3000