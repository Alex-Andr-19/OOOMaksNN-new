#!/bin/sh

set -eu

IMAGE_NAME="${IMAGE_NAME:-ooomaksnn-web}"
CONTAINER_NAME="${CONTAINER_NAME:-ooomaksnn-web}"
HOST_PORT="${HOST_PORT:-8080}"
ALLOW_DIRTY="${ALLOW_DIRTY:-0}"

if ! command -v git >/dev/null 2>&1; then
    echo "Ошибка: git не установлен." >&2
    exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
    echo "Ошибка: pnpm не установлен." >&2
    exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
    echo "Ошибка: Docker не установлен." >&2
    exit 1
fi

if ! docker info >/dev/null 2>&1; then
    echo "Ошибка: Docker daemon недоступен." >&2
    exit 1
fi

if [ "$ALLOW_DIRTY" != "1" ] && [ -n "$(git status --porcelain)" ]; then
    echo "Ошибка: рабочее дерево Git содержит незакоммиченные изменения." >&2
    echo "Образ помечается хэшем коммита, поэтому сначала закоммитьте изменения." >&2
    echo "Для принудительного запуска используйте ALLOW_DIRTY=1 pnpm container:up." >&2
    exit 1
fi

GIT_HASH="$(git rev-parse --short=12 HEAD)"
IMAGE_TAG="${IMAGE_NAME}:${GIT_HASH}"
LATEST_TAG="${IMAGE_NAME}:latest"

echo "Установка зависимостей..."
pnpm install --frozen-lockfile

echo "Сборка приложения..."
pnpm build

echo "Создание Docker-образа ${IMAGE_TAG}..."
docker build --pull --tag "$IMAGE_TAG" --tag "$LATEST_TAG" .

if docker container inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
    echo "Удаление предыдущего контейнера ${CONTAINER_NAME}..."
    docker rm --force "$CONTAINER_NAME" >/dev/null
fi

echo "Запуск контейнера ${CONTAINER_NAME} на порту ${HOST_PORT}..."
docker run \
    --detach \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    --publish "${HOST_PORT}:80" \
    --label "org.opencontainers.image.revision=${GIT_HASH}" \
    "$IMAGE_TAG"

echo "Контейнер запущен."
echo "Образ: ${IMAGE_TAG}"
echo "Адрес: http://localhost:${HOST_PORT}"
