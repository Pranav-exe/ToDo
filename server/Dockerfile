# Multi-stage Dockerfile

# ---------------------------------------
# Stage 1: Development
# Used for local development with hot-reloading.
# ---------------------------------------
FROM node:18-alpine AS development
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

# ---------------------------------------
# Stage 2: Builder
# Compiles TypeScript to JavaScript.
# ---------------------------------------
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# ---------------------------------------
# Stage 3: Production
# Runs the compiled JavaScript code.
# Only contains production dependencies (no devDependencies).
# ---------------------------------------
FROM node:18-alpine AS production
WORKDIR /app
COPY package.json ./
# Only install production dependencies
RUN npm install --only=production --legacy-peer-deps
# Copy compiled code from builder
COPY --from=builder /app/dist ./dist
# Copy env file if needed (though usually passed by docker-compose or k8s)
# COPY .env .env 
EXPOSE 4000
CMD ["node", "dist/js/app.js"]
