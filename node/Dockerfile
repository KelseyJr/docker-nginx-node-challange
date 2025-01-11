FROM node:22.13.0

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]
