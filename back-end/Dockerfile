FROM node:16-alpine AS development

WORKDIR /app
ENV NODE_ENV development
ENV PORT 3001
 
# Install build deps
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy and build front end
COPY . .

EXPOSE 3001
# Start the app
CMD [ "npm", "start" ]
