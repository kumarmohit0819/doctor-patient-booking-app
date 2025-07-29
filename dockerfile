# Use Node.js LTS version
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy only package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose app port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]