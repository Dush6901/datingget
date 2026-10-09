<template>
  <div class="mx-auto max-w-4xl py-12">

    <div class="mb-10">
      <h1 class="font-display text-4xl font-extrabold">
        Правовая информация
      </h1>

      <p class="mt-3 text-muted">
        Основные документы и информация об использовании сервиса.
      </p>
    </div>

    <div class="flex flex-col gap-4">

      <NuxtLink
        to="#privacy"
        class="group rounded-2xl bg-surface p-6 transition hover:bg-surface-hover"
      >
        <h2 class="font-display text-xl font-bold">
          Политика конфиденциальности
        </h2>

        <p class="mt-2 text-muted">
          Информация о сборе, обработке и защите персональных данных.
        </p>
      </NuxtLink>

      <NuxtLink
        to="#terms"
        class="group rounded-2xl bg-surface p-6 transition hover:bg-surface-hover"
      >
        <h2 class="font-display text-xl font-bold">
          Пользовательское соглашение
        </h2>

        <p class="mt-2 text-muted">
          Условия использования сервиса DatingGet.
        </p>
      </NuxtLink>

      <NuxtLink
        to="#cookies"
        class="group rounded-2xl bg-surface p-6 transition hover:bg-surface-hover"
      >
        <h2 class="font-display text-xl font-bold">
          Использование файлов cookie
        </h2>

        <p class="mt-2 text-muted">
          Информация об использовании cookie и аналогичных технологий.
        </p>
      </NuxtLink>

    </div>

    <div class="mt-10 rounded-2xl bg-surface p-6">
      <p class="text-sm leading-6 text-muted">
        Данная страница является информационной заглушкой для демонстрационной
        версии проекта. Перед запуском реального сервиса юридические документы
        должны быть подготовлены и проверены в соответствии с применимым
        законодательством.
      </p>
    </div>

  </div>
</template>