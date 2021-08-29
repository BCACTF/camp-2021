FROM node:16

# Copy package files
WORKDIR /usr/src/app
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of files
COPY . .

# Run "npm build"
RUN npm run build --if-present

# Expose port and run server
EXPOSE 1234
CMD ["node", "webpage.js"]
