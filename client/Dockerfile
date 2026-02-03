# Multi-stage Dockerfile
# We use stages to keep the final image clean and small.

# ---------------------------------------
# Stage 1: Development
# Used for local development (docker-compose).
# Includes full node_modules and tools.
# ---------------------------------------
FROM node:18-alpine AS development
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# ---------------------------------------
# Stage 2: Builder
# Used to compile the application.
# Artifacts are passed to the Production stage.
# ---------------------------------------
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# ---------------------------------------
# Stage 3: Production
# The final image. Uses Nginx to serve static files.
# Tiny size (~20MB + static files) vs ~800MB for full Node image.
# ---------------------------------------
FROM nginx:alpine AS production
# Copy the custom nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy the build artifacts from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]