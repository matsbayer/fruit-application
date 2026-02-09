# Use Node 20 Alpine as the base image
FROM node:20-alpine

# Working dir
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 80001
EXPOSE 8001

# Start the application
CMD ["npm", "run", "dev"]