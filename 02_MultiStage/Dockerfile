# Etapa 1: Construcción
FROM node:19-alpine AS build
WORKDIR /app
# Copiar los archivos de dependencias
COPY package*.json ./
# Instalar las dependencias
RUN npm install
# Copiar el codigo de la aplicacion
COPY . .

# Etapa 2: Imagen final
FROM node:19-alpine
WORKDIR /app
# Copiar lo necesario desde la etapa de construccion
COPY --from=build /app .
EXPOSE 3000
CMD ["npm", "start"]
