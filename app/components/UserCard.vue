<script setup lang="ts">

import type { User } from '~/types/user'

defineProps<{
  user: User
}>()

</script>

<template>
  <NuxtLink
    :to="`/search/${user.id}`"
    class="group block w-full max-w-80 overflow-hidden rounded-2xl bg-primary-gradient p-px transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="overflow-hidden rounded-[15px] bg-background">

      <!-- Фото -->
      <div class="relative aspect-4/5 overflow-hidden">
        <img
          :src="user.avatar"
          :alt="user.name"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          class="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/60 to-transparent"
        ></div>

        <div class="absolute bottom-4 left-4 text-white">
          <h3 class="font-display text-xl font-extrabold">
            {{ user.name }}, {{ user.age }}
          </h3>

          <p class="text-sm opacity-90">
            {{ user.city }}
          </p>
        </div>
      </div>

      <!-- Контент -->
      <div class="flex flex-col gap-3 p-4">

        <p class="line-clamp-2 min-h-10 text-sm text-muted">
          {{ user.description }}
        </p>

        <!-- Интересы -->
        <div class="min-h-13">
          <div class="flex max-h-13 flex-wrap content-start gap-1.5 overflow-hidden">
            <span
              v-for="interest in user.interests.slice(0, 3)"
              :key="interest"
              class="rounded-lg bg-surface px-2.5 py-1 text-xs font-medium"
            >
              {{ interest }}
            </span>

            <span
              v-if="user.interests.length > 3"
              class="rounded-lg bg-surface px-2.5 py-1 text-xs font-medium text-muted"
            >
              +{{ user.interests.length - 3 }}
            </span>
          </div>
        </div>

        <!-- Цель знакомства -->
        <div class="rounded-lg bg-primary-gradient p-px">
          <div
            class="rounded-[7px] bg-background px-3 py-2 text-center text-sm font-semibold"
          >
            {{ user.purpose }}
          </div>
        </div>

      </div>
    </div>
  </NuxtLink>
</template>