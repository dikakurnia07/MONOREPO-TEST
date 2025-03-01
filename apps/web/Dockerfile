FROM node:18-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@8.15.6 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json apps/web/
COPY packages/*/package.json packages/
COPY apps/web /app/apps/web
COPY packages /app/packages

RUN pnpm install --frozen-lockfile --shamefully-hoist

COPY turbo.json /app

RUN pnpm build --filter=web

FROM node:18-alpine AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@8.15.6 --activate

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=builder /app/apps/web/package.json /app/apps/web/package.json
COPY --from=builder /app/apps/web /app/apps/web
COPY --from=builder /app/packages /app/packages
COPY --from=builder /app/turbo.json /app

EXPOSE 3000
CMD ["pnpm", "turbo", "run", "dev", "--filter=web"]