# Monorepo dengan Turborepo dan Docker Compose

## Pendahuluan
Konfigurasi ini memungkinkan pengembangan lokal dan deployment untuk aplikasi berbasis monorepo menggunakan Turborepo. Dengan Docker Compose, seluruh aplikasi dapat dijalankan dalam container terisolasi dengan caching untuk mempercepat build.

## Cara Menggunakan
1. **Clone repository:**
   git clone https://github.com/dikakurnia07/MONOREPO-TEST.git
   cd monorepo-test

2. **Jalankan aplikasi:**
   docker-compose up --d

3. **Akses aplikasi:**
   - Web: [http://localhost:3000](http://localhost:3000)
   - Docs: [http://localhost:3001](http://localhost:3001)


## Perubahan Terbaru
- **Menambahkan filter untuk web & docs di `package.json`**
  "scripts": {
    "dev:web": "turbo dev --filter=web",
    "dev:docs": "turbo dev --filter=docs",
    "build:web": "turbo build --filter=web",
    "build:docs": "turbo build --filter=docs"
  }

- **Update `Dockerfile` untuk Web dan Docs**
  ```dockerfile
  CMD ["pnpm", "turbo", "run", "dev", "--filter=docs"]
  
  **Perbaikan `docker-compose.yml` agar menggunakan filter yang benar**
  docs:
    build:
      context: .
      dockerfile: apps/docs/Dockerfile
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=development
    command: pnpm turbo run dev --filter=docs
  
## Stop dan Hapus Container
docker-compose down