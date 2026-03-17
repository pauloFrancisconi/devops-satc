FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN nom run build
EXPOSE 4173
CMD ["npm", "start"]