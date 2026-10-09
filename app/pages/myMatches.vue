<script setup lang="ts">
import { users } from '~/data/users'

const { likedUsers, loadLikes } = useLikes()

onMounted(() => {
  loadLikes()
})

const likedUserList = computed(() =>
  users.filter(
    user =>
      likedUsers.value.includes(user.id) &&
      user.likedYou
  )
)
</script>

<template>
  <div class="mx-auto flex w-full max-w-220 flex-col gap-6 sm:gap-8">

    <!-- Заголовок -->
    <h2 class="font-display text-2xl font-extrabold sm:text-3xl">
      Мои мэтчи
    </h2>

    <!-- Карточки мэтчей -->
    <div
    v-if="likedUserList.length > 0"
    class="
        mx-auto
        grid
        w-full
        grid-cols-1
        justify-items-center
        gap-4
        min-[480px]:grid-cols-[repeat(2,minmax(0,320px))]
        min-[1200px]:grid-cols-[repeat(3,minmax(0,320px))]
        justify-center
    "
    >
    <UserCard
        v-for="user in likedUserList"
        :key="user.id"
        :user="user"
        class="w-full"
    />
    </div>

    <!-- Пустое состояние -->
    <div
      v-else
      class="
        relative overflow-hidden rounded-2xl p-px
      "
    >
      <div class="absolute inset-0 bg-primary-gradient opacity-30"></div>

      <div
        class="
          relative flex flex-col items-center
          justify-center gap-4 rounded-[15px]
          bg-background px-5 py-12 text-center
          sm:px-8 sm:py-16
        "
      >
        <div
          class="
            flex h-16 w-16 items-center justify-center
            rounded-2xl bg-primary-gradient/15
            sm:h-20 sm:w-20
          "
        >
          <img
            src="/icons/like-ico.svg"
            alt=""
            class="h-8 w-8 sm:h-10 sm:w-10"
          />
        </div>

        <h3 class="font-display text-xl font-extrabold sm:text-2xl">
          Пока нет взаимных мэтчей
        </h3>

        <p class="max-w-md text-sm leading-6 text-muted sm:text-base">
          Ставь лайки понравившимся людям. Когда симпатия окажется взаимной,
          вы появитесь здесь.
        </p>

        <NuxtLink
          to="/random"
          class="
            mt-2 rounded-xl bg-primary-gradient
            px-6 py-3 text-center
            font-display font-semibold text-white
            transition-transform hover:scale-[1.02]
            active:scale-95
          "
        >
          Перейти в рулетку
        </NuxtLink>
      </div>
    </div>

  </div>
</template>