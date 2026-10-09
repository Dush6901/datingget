<script setup lang="ts">
  const isOpen = ref(false);

</script>


<template>
  <div class="flex min-h-screen flex-col gap-8 px-4 py-6 lg:gap-12 lg:px-32">

    <!-- HEADER lg -->
    <header class="flex-col gap-5 hidden lg:flex-row lg:items-center lg:justify-between lg:flex">

      <!-- Лого -->
      <NuxtLink
        to="/"
        class="
          bg-[linear-gradient(90deg,#BDA3FF,#FFA6C1)]
          bg-clip-text
          text-[32px]
          font-display
          font-extrabold
          text-transparent
          sm:text-[36px]
          lg:text-[40px]
        "
      >
        DaitingGet
      </NuxtLink>

      <!-- Навигация -->
      <nav>
        <ul
          class="
            flex
            flex-wrap
            gap-x-5
            gap-y-2
            text-[16px]
            sm:gap-x-7
            sm:text-[18px]
            lg:flex-nowrap
            lg:gap-8
            lg:text-[20px]
          "
        >
          <NuxtLink
            to="/"
            class="transition-colors hover:text-hover"
            active-class="text-[#FE6291]"
          >
            Главная
          </NuxtLink>

          <NuxtLink
            to="/random"
            class="transition-colors hover:text-hover"
            active-class="text-[#FE6291]"
          >
            Рулетка
          </NuxtLink>

          <NuxtLink
            to="/search"
            class="transition-colors hover:text-hover"
            active-class="text-[#FE6291]"
          >
            Поиск
          </NuxtLink>

          <NuxtLink
            to="/myMatches"
            class="transition-colors hover:text-hover"
            active-class="text-[#FE6291]"
          >
            Мои мэтчи
          </NuxtLink>
        </ul>
      </nav>

    </header>

    <!-- HEADER mg -->
<!-- HEADER MOBILE -->
<header class="relative lg:hidden">
  <!-- Верхняя часть -->
  <div class="flex items-center justify-between">
    
    <!-- Лого -->
    <NuxtLink
      to="/"
      class="
        bg-[linear-gradient(90deg,#BDA3FF,#FFA6C1)]
        bg-clip-text
        text-[32px]
        font-display
        font-extrabold
        text-transparent
        sm:text-[36px]
      "
    >
      DaitingGet
    </NuxtLink>

    <!-- Кнопка меню -->
    <button
      type="button"
      aria-label="Открыть меню"
      class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface transition-colors hover:bg-surface-hover"
      @click="isOpen = !isOpen"
    >
      <img
        src="/icons/menu-ico.svg"
        alt=""
        class="h-6 w-6"
      />
    </button>

  </div>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="translate-y-[-10px] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-10px] opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute left-0 right-0 top-full z-50 mt-3"
      >
        <!-- Градиентная рамка -->
        <div class="rounded-2xl bg-primary-gradient p-px shadow-lg">

          <!-- Меню -->
          <nav class="rounded-[15px] bg-background p-2">

            <NuxtLink
              to="/"
              @click="isOpen = false"
              class="
                group
                flex
                items-center
                rounded-xl
                px-4
                py-3
                font-display
                text-[16px]
                font-semibold
                transition-colors
                hover:bg-surface
              "
              active-class="bg-surface text-[#FE6291]"
            >
              <span>
                Главная
              </span>

              <span
                class="
                  ml-auto
                  text-muted
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </NuxtLink>

            <NuxtLink
              to="/random"
              @click="isOpen = false"
              class="
                group
                flex
                items-center
                rounded-xl
                px-4
                py-3
                font-display
                text-[16px]
                font-semibold
                transition-colors
                hover:bg-surface
              "
              active-class="bg-surface text-[#FE6291]"
            >
              <span>
                Рулетка
              </span>

              <span
                class="
                  ml-auto
                  text-muted
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </NuxtLink>

            <NuxtLink
              to="/search"
              @click="isOpen = false"
              class="
                group
                flex
                items-center
                rounded-xl
                px-4
                py-3
                font-display
                text-[16px]
                font-semibold
                transition-colors
                hover:bg-surface
              "
              active-class="bg-surface text-[#FE6291]"
            >
              <span>
                Поиск
              </span>

              <span
                class="
                  ml-auto
                  text-muted
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </NuxtLink>

            <NuxtLink
              to="/myMatches"
              @click="isOpen = false"
              class="
                group
                flex
                items-center
                rounded-xl
                px-4
                py-3
                font-display
                text-[16px]
                font-semibold
                transition-colors
                hover:bg-surface
              "
              active-class="bg-surface text-[#FE6291]"
            >
              <span>
                Мои мэтчи
              </span>

              <span
                class="
                  ml-auto
                  text-muted
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </NuxtLink>

          </nav>
        </div>
      </div>
    </Transition>
  </header>

    <!-- Разделитель -->
    <hr class="h-0.75 w-full rounded-2xl border-0 bg-primary-gradient" />

    <!-- CONTENT -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="flex flex-col gap-4">

      <!-- Верхняя часть -->
      <div class="rounded-2xl bg-primary-gradient p-0.5">

        <div
          class="
            flex
            flex-col
            items-center
            gap-8
            rounded-[13px]
            bg-background
            px-6
            py-6

            sm:px-8

            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-6
            lg:px-12
            lg:py-6
          "
        >

          <!-- Лого -->
          <div class="flex flex-col gap-2">

            <h1
              class="
                bg-primary-gradient
                bg-clip-text
                text-[28px]
                font-display
                font-extrabold
                text-transparent
                sm:text-[32px]
              "
            >
              DaitingGet
            </h1>

            <p class="text-muted text-center">
              Знакомься быстро.<br>
              Встречайся сразу.
            </p>

          </div>

          <!-- Навигация -->
          <div
            class="
              flex flex-col items-center gap-2
              md:flex-row md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-2
              lg:flex-col lg:items-center lg:gap-2
            "
          >
            <NuxtLink
              to="/"
              class="text-muted transition-colors hover:text-hover"
              active-class="text-[#FE6291]"
            >
              Главная
            </NuxtLink>

            <NuxtLink
              to="/random"
              class="text-muted transition-colors hover:text-hover"
              active-class="text-[#FE6291]"
            >
              Рулетка
            </NuxtLink>

            <NuxtLink
              to="/search"
              class="text-muted transition-colors hover:text-hover"
              active-class="text-[#FE6291]"
            >
              Поиск
            </NuxtLink>

            <NuxtLink
              to="/myMatches"
              class="text-muted transition-colors hover:text-hover"
              active-class="text-[#FE6291]"
            >
              Мои мэтчи
            </NuxtLink>
          </div>

          <!-- Информация -->
          <div
            class="
              flex flex-col items-center gap-2
              md:flex-row md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-2
              lg:flex-col lg:items-center lg:gap-2
            "
          >
            <NuxtLink
              to="/about"
              class="text-muted transition-colors hover:text-hover"
              active-class="text-[#FE6291]"
            >
              О проекте
            </NuxtLink>

            <NuxtLink
              to="/contacts"
              class="text-muted transition-colors hover:text-hover"
              active-class="text-[#FE6291]"
            >
              Контакты
            </NuxtLink>

            <NuxtLink
              to="/legal"
              class="text-muted transition-colors hover:text-hover"
              active-class="text-[#FE6291]"
            >
              Правовая информация
            </NuxtLink>
          </div>

          <!-- Соцсети -->
          <div class="flex flex-col gap-2 text-left lg:text-center">

            <p class="font-display text-[20px] font-bold">
              Соцсети
            </p>

            <div class="flex gap-4">

              <img
                src="/icons/github-ico.svg"
                alt="GitHub"
                class="h-6 w-6"
              >

              <img
                src="/icons/telegram-ico.svg"
                alt="Telegram"
                class="h-6 w-6"
              >

              <img
                src="/icons/portfolio-ico.svg"
                alt="Portfolio"
                class="h-6 w-6"
              >

            </div>

          </div>

        </div>
      </div>

      <!-- Нижняя часть -->
      <div class="text-xs leading-5 text-muted sm:text-sm">

        <p>© 2026. Все права защищены.</p>

        <p>
          Данный проект является дизайн-концепцией для портфолио.
        </p>

        <p>
          Все совпадения с реальными компаниями, объектами и персонами случайны.
        </p>

        <p>
          Дизайн и разработка: Яковлев Максим
        </p>

      </div>

    </footer>

  </div>
</template>