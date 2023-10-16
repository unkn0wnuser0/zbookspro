FROM node:16-slim as base

WORKDIR /usr/src/app

EXPOSE 9999

COPY . .

RUN npm install --production
RUN npm run build
CMD ["npm", "start"]
