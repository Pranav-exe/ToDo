# ---------------------------------------
# Stage 1: Development
# ---------------------------------------
FROM node:18-alpine AS development
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

# ---------------------------------------
# Stage 2: Builder
# ---------------------------------------
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# ---------------------------------------
# Stage 3: Production
# ---------------------------------------
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

COPY package.json package-lock.json ./
RUN npm ci --only=production --legacy-peer-deps

COPY --from=builder /app/dist ./dist

HEALTHCHECK --interval=10s --timeout=5s --start-period=40s --retries=5 \
  CMD node -e "require('http').get('http://127.0.0.1:4000/health', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

USER app
EXPOSE 4000
CMD ["node", "dist/js/Index.js"]