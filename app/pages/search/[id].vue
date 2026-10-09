<script setup lang="ts">
import { users } from '~/data/users'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const user = computed(() =>
  users.find((u) => u.id === id.value)
)
</script>

<template>
  <div class="mx-auto w-full max-w-220">

    <!-- Профиль найден -->
    <div
      v-if="user"
      class="
        flex flex-col gap-5
        md:flex-row md:items-start md:gap-6
        lg:gap-8
      "
    >

        <!-- Фото пользователя -->
        <div
            class="
            relative w-full overflow-hidden rounded-2xl
            bg-primary-gradient p-px
            md:w-[45%] md:shrink-0
            "
        >
            <div class="relative overflow-hidden rounded-[15px] bg-background">
            <img
                :src="user.avatar"
                :alt="`Фото профиля: ${user.name}`"
                class="
                aspect-4/5 w-full object-cover
                sm:aspect-5/4
                md:aspect-3/4
                lg:aspect-4/5
                "
            />
            </div>
        </div>

      <!-- Информация -->
      <div class="flex min-w-0 flex-1 flex-col gap-4">

        <div class="relative overflow-hidden rounded-2xl p-4 sm:p-5 lg:p-6">

          <!-- Градиентный фон -->
          <div
            class="absolute inset-0 bg-primary-gradient opacity-15"
          ></div>

          <!-- Контент -->
          <div class="relative flex flex-col gap-5">

            <!-- Имя и город -->
            <div class="flex flex-col gap-1">
              <h1
                class="
                  wrap-break-words font-display
                  text-xl font-extrabold
                  sm:text-2xl
                "
              >
                {{ user.name }}, {{ user.age }}
              </h1>

              <p>
                {{ user.city }}
              </p>
            </div>

            <!-- О себе -->
            <div class="flex flex-col gap-2">
              <h2 class="font-display text-lg font-bold sm:text-xl">
                О себе
              </h2>

              <p>
                {{ user.description }}
              </p>
            </div>

            <!-- Интересы -->
            <div class="flex flex-col gap-2">
              <h2 class="font-display text-lg font-bold sm:text-xl">
                Интересы
              </h2>

              <div class="flex flex-wrap gap-2">
                <UiInterestsBlock
                  v-for="interest in user.interests"
                  :key="interest"
                  :interest="interest"
                />
              </div>
            </div>

            <!-- Цель знакомства -->
            <div class="flex flex-col gap-2">
              <h2 class="font-display text-lg font-bold sm:text-xl">
                Цель знакомства
              </h2>

              <span
                class="
                  w-fit max-w-full rounded-xl
                  bg-primary-gradient p-0.5
                "
              >
                <span
                  class="
                    block rounded-[10px] bg-background
                    px-3 py-2 
                  "
                >
                  {{ user.purpose }}
                </span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Пользователь не найден -->
    <div
      v-else
      class="
        flex flex-col items-center justify-center
        gap-3 rounded-2xl bg-surface
        px-5 py-12 text-center
      "
    >
      <h2 class="font-display text-xl font-extrabold">
        Пользователь не найден
      </h2>

      <p class="text-sm text-muted">
        Возможно, анкета не существует или была удалена.
      </p>

      <NuxtLink
        to="/search"
        class="
          mt-2 rounded-xl bg-primary-gradient
          px-6 py-3 font-semibold text-white
          transition-transform hover:scale-[1.02]
        "
      >
        Вернуться к поиску
      </NuxtLink>
    </div>

  </div>
</template>