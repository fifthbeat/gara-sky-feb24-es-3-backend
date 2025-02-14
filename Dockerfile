FROM node:22-alpine
ARG VITE_BASE_PATH

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . ./

RUN npm run build
RUN npm run prisma:production

EXPOSE 4000

CMD ["npm", "run", "start"]