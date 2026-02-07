FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV MONGO_URI=mongodb://mongo:27017/cosmic
ENV NASA_KEY=demo

EXPOSE 5000
CMD ["node", "server.js"]
