FROM node:18.19.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 4040
CMD ["node", "index.js"]