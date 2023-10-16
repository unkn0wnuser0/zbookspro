FROM node:16-slim as base

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm install --production
RUN npm run build
CMD ["npm", "start"]
