# Establecer la imagen base
FROM node:18.10.0

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json yarn.lock /app/

# generated prisma files
COPY prisma  /app/prisma/

# COPY tsconfig.json file
COPY tsconfig.json /app/

COPY /src /app/src/

# Instalar las dependencias
RUN yarn install

RUN yarn run prisma generate

RUN yarn run prisma migrate dev --name add-profile

# Exponer el puerto en el contenedor
EXPOSE 3000

# Comandos para ejecutar la aplicación en diferentes modos
CMD ["yarn", "dev:watch"]