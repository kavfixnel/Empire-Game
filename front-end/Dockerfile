FROM node:19.8-alpine AS development

WORKDIR /app
ENV NODE_ENV development

# Install build deps
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy and build front end
COPY . .

EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]
