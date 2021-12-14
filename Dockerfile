FROM node:16-alpine

# Copy and build front end
RUN mkdir -p /app/front-end
WORKDIR /app/front-end

ADD ./front-end/public /app/front-end/public
ADD ./front-end/src /app/front-end/src

COPY ./front-end/package.json .
COPY ./front-end/package-lock.json .
RUN npm install

RUN npm run build

RUN mv build /app/public/

WORKDIR /app
RUN rm -rf front-end

# Copy and assemble back end
WORKDIR /app

COPY ./back-end/package.json .
COPY ./back-end/package-lock.json .

RUN npm install

COPY ./back-end/app.js .

ENV PORT=80
EXPOSE 80

CMD ["npm", "start"]