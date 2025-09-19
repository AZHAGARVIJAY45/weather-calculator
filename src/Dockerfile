FROM node:20

WORKDIR /weather-calculator

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]




