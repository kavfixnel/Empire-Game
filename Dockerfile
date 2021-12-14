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

RUN mv build /app

WORKDIR /app
RUN rm -rf front-end

# Copy and assemble back end
RUN mkdir -p /app/back-end
WORKDIR /app/back-end

COPY ./back-end/package.json .
COPY ./back-end/package-lock.json .

RUN npm install

COPY ./back-end/app.js .
RUN mv /app/build /app/back-end/public

ENV PORT=80
EXPOSE 80

CMD ["npm", "start"]