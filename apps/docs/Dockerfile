FROM node:18-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@8.15.6 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/
COPY packages/*/package.json packages/
COPY /apps/docs /app/apps/docs
COPY packages /app/packages

RUN pnpm install --frozen-lockfile 
RUN cat /app/apps/docs/node_modules/next/dist/bin/next

COPY turbo.json /app
RUN cat /app/apps/docs/node_modules/next/dist/bin/next
RUN pnpm build --filter=docs

FROM node:18-alpine AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@8.15.6 --activate

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=builder /app/apps/docs/package.json /app/apps/docs/package.json
COPY --from=builder /app/apps/docs /app/apps/docs
COPY --from=builder /app/packages /app/packages
COPY --from=builder /app/turbo.json /app
EXPOSE 3001
CMD ["pnpm", "turbo", "run", "dev", "--filter=docs"]