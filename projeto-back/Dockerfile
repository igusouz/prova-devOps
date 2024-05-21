# Use uma imagem base oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação do backend usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "server.js"]
