<script setup lang="ts">
import { users } from '~/data/users'

const { likeUser } = useLikes()

const availableUsers = ref([...users])
const currentUser = ref(availableUsers.value[0]!)

const getRandomUser = () => {
  if (availableUsers.value.length === 0) {
    availableUsers.value = [...users]
  }

  const randomIndex = Math.floor(
    Math.random() * availableUsers.value.length
  )

  currentUser.value = availableUsers.value[randomIndex]!

  availableUsers.value.splice(randomIndex, 1)
}
</script>

<template>
  <div class="mx-auto flex w-full max-w-220 flex-col gap-6 sm:gap-8">

    <!-- Заголовок -->
    <h2 class="font-display text-2xl font-extrabold sm:text-3xl">
      Рулетка
    </h2>

    <!-- Основная карточка -->
    <div
      class="
        flex w-full flex-col gap-5
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
                :src="currentUser.avatar"
                :alt="`Фото профиля: ${currentUser.name}`"
                class="
                aspect-4/5 w-full object-cover
                sm:aspect-5/4
                md:aspect-3/4
                lg:aspect-4/5
                "
            />
            </div>
        </div>

      <!-- Информация и кнопки -->
      <div class="flex min-w-0 flex-1 flex-col gap-4 sm:gap-5">

        <!-- Информация -->
        <div class="relative overflow-hidden rounded-2xl p-4 sm:p-5 lg:p-6">

          <!-- Градиентный фон -->
          <div
            class="absolute inset-0 bg-primary-gradient opacity-15"
          ></div>

          <!-- Контент -->
          <div class="relative flex flex-col gap-5">

            <!-- Имя и город -->
            <div class="flex flex-col gap-1">
              <h3
                class="
                  wrap-break-words font-display
                  text-xl font-extrabold
                  sm:text-2xl
                "
              >
                {{ currentUser.name }}, {{ currentUser.age }}
              </h3>

              <p class="text-sm text-muted sm:text-base">
                {{ currentUser.city }}
              </p>
            </div>

            <!-- О себе -->
            <div class="flex flex-col gap-2">
              <h4 class="font-display text-lg font-bold sm:text-xl">
                О себе
              </h4>

              <p class="wrap-break-words text-sm leading-6 sm:text-base">
                {{ currentUser.description }}
              </p>
            </div>

            <!-- Интересы -->
            <div class="flex flex-col gap-2">
              <h4 class="font-display text-lg font-bold sm:text-xl">
                Интересы
              </h4>

              <div class="flex flex-wrap gap-2">
                <UiInterestsBlock
                  v-for="interest in currentUser.interests"
                  :key="interest"
                  :interest="interest"
                />
              </div>
            </div>

            <!-- Цель знакомства -->
            <div class="flex flex-col gap-2">
              <h4 class="font-display text-lg font-bold sm:text-xl">
                Цель знакомства
              </h4>

              <span class="w-fit max-w-full rounded-xl bg-primary-gradient p-0.5">
                <span class="block rounded-[10px] bg-background px-3 py-2 text-sm sm:text-base">
                  {{ currentUser.purpose }}
                </span>
              </span>
            </div>

          </div>
        </div>

        <!-- Кнопки -->
        <div class="grid grid-cols-2 gap-3 sm:gap-4">

          <!-- Лайк -->
          <button
            type="button"
            aria-label="Поставить лайк"
            class="
              flex min-h-16 items-center justify-center
              rounded-2xl bg-[#DCFCE7]
              transition-all duration-200
              hover:bg-[#b9fdd1] hover:shadow-md
              active:scale-95
              sm:min-h-20
            "
            @click="likeUser(currentUser.id); getRandomUser()"
          >
            <img
              src="/icons/like-ico.svg"
              alt=""
              class="h-8 w-8 sm:h-10 sm:w-10"
            />
          </button>

          <!-- Дизлайк -->
          <button
            type="button"
            aria-label="Пропустить анкету"
            class="
              flex min-h-16 items-center justify-center
              rounded-2xl bg-[#FEE2E2]
              transition-all duration-200
              hover:bg-[#fccccc] hover:shadow-md
              active:scale-95
              sm:min-h-20
            "
            @click="getRandomUser()"
          >
            <img
              src="/icons/dislike-ico.svg"
              alt=""
              class="h-8 w-8 sm:h-10 sm:w-10"
            />
          </button>

        </div>
      </div>
    </div>
  </div>
</template>