# Макс-НН

Сайт на Vue 3, TypeScript и Vite.

## Разработка

Требуются Node.js и pnpm.

```bash
pnpm install
pnpm dev
```

Сайт будет доступен по адресу, указанному Vite в терминале.

## Production

Требуются Git, Node.js, pnpm и запущенный Docker.

```bash
pnpm container:up
```

Команда установит зависимости, соберёт проект, создаст Docker-образ с тегом по хэшу последнего коммита и запустит контейнер на:

```text
http://localhost:8080
```

Другой порт:

```bash
HOST_PORT=80 pnpm container:up
```

По умолчанию production-запуск требует чистого Git-дерева.
