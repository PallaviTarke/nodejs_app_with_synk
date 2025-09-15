FROM node:24.0.1
WORKDIR /app
COPY package.json ./
RUN npm install
COPY app.js ./
COPY public/ ./public/
USER node
EXPOSE 3000
CMD ["npm", "start"]